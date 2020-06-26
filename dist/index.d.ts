export declare type PollingFunction<T = any> = () => Promise<T>;
export declare type State = "idle" | "polling" | "ticking";
export interface IPolling<T = any> {
    readonly state: State;
    readonly started: boolean;
    intervalSeconds: number;
    pollingFunction: PollingFunction<T>;
    start(): void;
    stop(): Promise<void>;
    on(event: "before-poll", listner: () => void): this;
    on(event: "after-poll", listner: (err?: any, value?: T) => void): this;
    on(event: "state-change", listener: (state: State) => void): this;
}
export declare class Polling {
    static get<T = any>(pollingFunction: PollingFunction<T>, intervalSeconds: number): IPolling<T>;
}
