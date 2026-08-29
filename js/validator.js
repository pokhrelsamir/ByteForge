/**
 * ByteForge
 * Input Validation
 */

const Validator = (() => {

    const patterns = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^\d+$/,
        16: /^[0-9a-fA-F]+$/
    };

    function validate(value, base) {

        if (!value || value.trim() === "") {
            return {
                valid: false,
                message: "Enter a value first."
            };
        }

        value = value.trim();

        const pattern = patterns[base];

        if (!pattern.test(value)) {
            return {
                valid: false,
                message: `Invalid value for base ${base}.`
            };
        }

        const decimal = parseInt(value, base);

        if (!Number.isSafeInteger(decimal)) {
            return {
                valid: false,
                message: "Value exceeds the supported safe integer range."
            };
        }

        return {
            valid: true,
            value
        };
    }

    return {
        validate
    };

})();