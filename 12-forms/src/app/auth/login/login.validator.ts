import { AbstractControl } from '@angular/forms';

export const mustContainQuestionMark = (control: AbstractControl) => {
    if (control.value.includes('?')) {
        return null;
    }

    return { doesNotContainQuestionMark: true };
};
