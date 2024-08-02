import { createAction, props } from '@ngrx/store';

import { ECounterActionId, ICounterStore } from './counter.model';

export const init = createAction(ECounterActionId.INIT);

export const set = createAction(
    ECounterActionId.SET, 
    props<ICounterStore>()
);

export const increment = createAction(
    ECounterActionId.INCREMENT,
    props<ICounterStore>(),
);

export const decrement = createAction(
    ECounterActionId.DECREMENT,
    props<ICounterStore>(),
);
