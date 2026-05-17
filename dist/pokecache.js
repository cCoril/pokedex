export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(amount) {
        this.#interval = amount;
        this.#startReapLoop();
    }
    ;
    add(key, val) {
        const createdAt = Date.now();
        let newEntry = { createdAt, val };
        this.#cache.set(key, newEntry);
    }
    ;
    get(key) {
        const response = this.#cache.get(key);
        if (response === undefined) {
            return undefined;
        }
        return response.val;
    }
    ;
    #reap() {
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt && (entry.createdAt < (Date.now() - this.#interval))) {
                this.#cache.delete(key);
            }
            ;
        }
        ;
    }
    ;
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    ;
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
    }
    ;
}
