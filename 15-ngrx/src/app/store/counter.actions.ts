import { createAction, props } from '@ngrx/store';
import { ICounterStore } from './counter.model';

export const increment = createAction(
    '[Counter] Increment',
    props<ICounterStore>(),
);
export const decrement = createAction(
    '[Counter] Decrement',
    props<ICounterStore>(),
);
