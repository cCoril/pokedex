export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(amount: number){
        this.#interval = amount;
        this.#startReapLoop();
    };

    add<T>(key: string, val: T): void {
        const createdAt = Date.now()
        let newEntry: CacheEntry<T> = {createdAt, val}
        this.#cache.set(key, newEntry);  
    };

    get<T>(key: string): CacheEntry<T> | undefined {
        if (!this.#cache.has(key)) {
            return undefined;
        };
        
        return this.#cache.get(key);
    };

    #reap(): void {
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt && (entry.createdAt < (Date.now() - this.#interval))) {
                this.#cache.delete(key);
            };
        };
    };

    #startReapLoop(): void {
        this.#reapIntervalId = setInterval(this.#reap, this.#interval)
    };

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
    };






}
