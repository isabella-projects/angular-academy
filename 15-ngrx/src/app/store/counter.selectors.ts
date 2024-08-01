import { createSelector } from '@ngrx/store';

import { ICounterShape } from './counter.model';

export const selectCount = (state: ICounterShape) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2,
);
