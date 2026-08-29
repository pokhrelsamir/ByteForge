/**
 * ByteForge
 * UI Renderer
 */

const Renderer = (() => {

    const labels = {
        decimal: "DECIMAL",
        binary: "BINARY",
        octal: "OCTAL",
        hexadecimal: "HEXADECIMAL"
    };

    function renderResults(results) {

        const grid = document.getElementById("resultGrid");

        grid.innerHTML = "";

        Object.entries(results).forEach(([key, value]) => {

            const article = document.createElement("article");

            article.className = "result-card";

            article.innerHTML = `
                <span>${labels[key]}</span>
                <strong>${value}</strong>
                <small>BASE ${getBase(key)}</small>
                <button
                    class="copy-button"
                    data-copy="${value}"
                    type="button"
                >
                    Copy
                </button>
            `;

            grid.appendChild(article);
        });
    }

    function getBase(key) {

        return {
            decimal: 10,
            binary: 2,
            octal: 8,
            hexadecimal: 16
        }[key];

    }

    function renderSteps(steps) {

        const container = document.getElementById("stepsContainer");

        container.innerHTML = steps
            .map((step, index) => `
                <div class="step">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <code>${step}</code>
                </div>
            `)
            .join("");
    }

    function renderBinaryView(binary) {

        const container = document.getElementById("binaryView");

        container.innerHTML = `
            <div class="bit-row">
                ${binary.split("").map(bit => `
                    <span class="bit ${bit === "1" ? "active" : ""}">
                        ${bit}
                    </span>
                `).join("")}
            </div>
        `;
    }

    function renderHistory(history) {

        const container = document.getElementById("historyContainer");

        if (!history.length) {

            container.innerHTML = `
                <div class="empty-state">
                    No conversions yet.
                </div>
            `;

            return;
        }

        container.innerHTML = history
            .map(item => `
                <button
                    class="history-item"
                    data-value="${item.input}"
                    data-base="${item.base}"
                    type="button"
                >
                    <span>
                        ${item.input}
                        <small>BASE ${item.base}</small>
                    </span>

                    <strong>→</strong>

                    <span>
                        ${item.decimal}
                        <small>DECIMAL</small>
                    </span>
                </button>
            `)
            .join("");
    }

    function setStatus(message, type = "") {

        const status = document.getElementById("inputStatus");

        status.textContent = message;
        status.className = `status ${type}`;
    }

    function setError(message) {

        document.getElementById("errorMessage").textContent = message;

    }

    function clearError() {

        setError("");

    }

    return {
        renderResults,
        renderSteps,
        renderBinaryView,
        renderHistory,
        setStatus,
        setError,
        clearError
    };

})();