import { AbstractControl } from '@angular/forms';

export const equalValues = (firstControl: string, secondControl: string) => {
    return (control: AbstractControl) => {
        const firstVal = control.get(firstControl)?.value;
        const secondVal = control.get(secondControl)?.value;

        if (firstVal === secondVal) {
            return null;
        }

        return { valuesNotEqual: true };
    };
};
