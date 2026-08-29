/**
 * ByteForge
 * Local Storage Manager
 */

const StorageManager = (() => {

    const KEY = "byteforge_history";
    const LIMIT = 20;

    function getHistory() {

        try {
            const stored = localStorage.getItem(KEY);

            if (!stored) {
                return [];
            }

            const history = JSON.parse(stored);

            return Array.isArray(history) ? history : [];

        } catch {
            return [];
        }
    }

    function saveConversion(conversion) {

        const history = getHistory();

        history.unshift({
            ...conversion,
            timestamp: Date.now()
        });

        localStorage.setItem(
            KEY,
            JSON.stringify(history.slice(0, LIMIT))
        );
    }

    function clearHistory() {
        localStorage.removeItem(KEY);
    }

    return {
        getHistory,
        saveConversion,
        clearHistory
    };

})();