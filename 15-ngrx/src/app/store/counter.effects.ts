import { inject, Injectable } from '@angular/core';
import { debounceTime, of, switchMap, tap, withLatestFrom } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { decrement, increment, init, set } from './counter.actions';
import { selectCount } from './counter.selectors';
import { ICounterShape } from './counter.model';

@Injectable()
export class CounterEffects {
    private actions$ = inject(Actions);
    private store$ = inject<Store<ICounterShape>>(Store);

    saveCount = createEffect(
        () =>
            this.actions$.pipe(
                ofType(increment, decrement),
                withLatestFrom(this.store$.select(selectCount)),
                debounceTime(1000),
                tap(([type, value]) => {
                    console.log(type);
                    localStorage.setItem('count', value.toString());
                }),
            ),
        { dispatch: false },
    );

    loadCount = createEffect(() =>
        this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const storedCounter = localStorage.getItem('count');
                if (storedCounter) {
                    return of(set({ value: +storedCounter }));
                }
                return of(set({ value: 0 }));
            }),
        ),
    );
}
