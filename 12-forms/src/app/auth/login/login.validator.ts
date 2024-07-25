import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';

export const mustContainQuestionMark = (control: AbstractControl) => {
    if (control.value.includes('?')) {
        return null;
    }

    return { doesNotContainQuestionMark: true };
};

// Dummy example.. In real life we might send HTTP request for already taken email
export const emailIsUnique = (control: AbstractControl) => {
    if (control.value !== 'test@example.com') {
        return of(null);
    }

    return of({
        notUnique: true,
    });
};
