/**
 * ByteForge
 * Number Conversion Engine
 */

const Converter = (() => {

    const BASES = {
        decimal: 10,
        binary: 2,
        octal: 8,
        hexadecimal: 16
    };

    function toDecimal(value, base) {
        return parseInt(value, base);
    }

    function fromDecimal(value, base) {
        return value.toString(base).toUpperCase();
    }

    function convert(value, inputBase) {

        const decimal = toDecimal(value, inputBase);

        if (!Number.isSafeInteger(decimal)) {
            throw new Error("Value is outside the supported safe integer range.");
        }

        return {
            decimal: fromDecimal(decimal, BASES.decimal),
            binary: fromDecimal(decimal, BASES.binary),
            octal: fromDecimal(decimal, BASES.octal),
            hexadecimal: fromDecimal(decimal, BASES.hexadecimal)
        };
    }

    function getSteps(value, base) {

        const decimal = toDecimal(value, base);

        if (base === 10) {
            return [
                `${value}₁₀ is already in decimal form.`,
                `Decimal value = ${decimal}`
            ];
        }

        const digits = value
            .toUpperCase()
            .split("")
            .reverse();

        const terms = digits.map((digit, index) => {
            const digitValue = parseInt(digit, base);
            return `(${digitValue} × ${base}^${index})`;
        });

        const calculation = digits
            .map((digit, index) => {
                const digitValue = parseInt(digit, base);
                return digitValue * Math.pow(base, index);
            })
            .reduce((sum, value) => sum + value, 0);

        return [
            `${value}₍${base}₎`,
            terms.reverse().join(" + "),
            `= ${calculation}`,
            `Decimal value = ${decimal}`
        ];
    }

    function getBinaryBits(decimal) {

        const binary = decimal.toString(2);

        return binary.padStart(
            Math.ceil(binary.length / 8) * 8,
            "0"
        );
    }

    return {
        convert,
        getSteps,
        getBinaryBits
    };

})();