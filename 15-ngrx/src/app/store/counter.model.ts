export enum ECounterActionId {
    INIT = '[Counter] Init',
    SET = '[Counter] Set',
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
}

export interface ICounterStore {
    value: number;
}

export interface ICounterShape {
    counter: number;
}
