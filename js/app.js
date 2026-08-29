/**
 * ByteForge
 * Application Controller
 */

document.addEventListener("DOMContentLoaded", () => {

    const numberInput = document.getElementById("numberInput");
    const baseSelect = document.getElementById("baseSelect");
    const convertBtn = document.getElementById("convertBtn");
    const clearInputBtn = document.getElementById("clearInputBtn");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");

    function convertValue() {

        const value = numberInput.value.trim();
        const base = Number(baseSelect.value);

        Renderer.clearError();

        const validation = Validator.validate(value, base);

        if (!validation.valid) {

            Renderer.setStatus("ERROR", "error");
            Renderer.setError(validation.message);

            return;
        }

        try {

            const results = Converter.convert(value, base);

            Renderer.renderResults(results);

            const steps = Converter.getSteps(value, base);

            Renderer.renderSteps(steps);

            Renderer.renderBinaryView(results.binary);

            Renderer.setStatus("CONVERTED", "success");

            StorageManager.saveConversion({
                input: value.toUpperCase(),
                base,
                decimal: results.decimal
            });

            Renderer.renderHistory(
                StorageManager.getHistory()
            );

        } catch (error) {

            Renderer.setStatus("ERROR", "error");
            Renderer.setError(error.message);

        }
    }


    convertBtn.addEventListener("click", convertValue);


    numberInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            convertValue();
        }

    });


    numberInput.addEventListener("input", () => {

        Renderer.clearError();

        Renderer.setStatus("READY");

    });


    clearInputBtn.addEventListener("click", () => {

        numberInput.value = "";

        Renderer.clearError();
        Renderer.setStatus("READY");

        numberInput.focus();

    });


    clearHistoryBtn.addEventListener("click", () => {

        StorageManager.clearHistory();

        Renderer.renderHistory([]);

    });


    document.addEventListener("click", event => {

        const copyButton = event.target.closest(".copy-button");

        if (copyButton) {

            navigator.clipboard.writeText(
                copyButton.dataset.copy
            );

            copyButton.textContent = "Copied";

            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1000);

        }


        const historyItem = event.target.closest(".history-item");

        if (historyItem) {

            numberInput.value = historyItem.dataset.value;

            baseSelect.value = historyItem.dataset.base;

            convertValue();

        }

    });


    Renderer.renderHistory(
        StorageManager.getHistory()
    );

});