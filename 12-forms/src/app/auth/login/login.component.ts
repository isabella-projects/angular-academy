import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

import { emailIsUnique, mustContainQuestionMark } from './login.validator';

let initialEmailValue = '';
const savedForm = localStorage.getItem('saved-login-form');

if (savedForm) {
    const loadedForm = JSON.parse(savedForm);
    initialEmailValue = loadedForm.email;
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    // formType = input.required<FormType>();
    // private templateDrivenForm = viewChild.required<NgForm>('form');

    reactiveForm = new FormGroup({
        email: new FormControl(initialEmailValue, {
            validators: [Validators.email, Validators.required],
            asyncValidators: [emailIsUnique],
        }),
        password: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.required,
                mustContainQuestionMark,
            ],
        }),
    });

    private destroyRef = inject(DestroyRef);

    get isEmailValid() {
        return (
            this.reactiveForm.controls.email.touched &&
            this.reactiveForm.controls.email.dirty &&
            this.reactiveForm.controls.email.invalid
        );
    }

    get isPassValid() {
        const passwordControl = this.reactiveForm.controls.password;
        return (
            passwordControl.touched &&
            passwordControl.dirty &&
            passwordControl.hasError('minlength')
        );
    }

    get hasPassSymbol() {
        const passwordControl = this.reactiveForm.controls.password;
        return (
            passwordControl.touched &&
            passwordControl.dirty &&
            passwordControl.hasError('doesNotContainQuestionMark')
        );
    }

    ngOnInit(): void {
        /* Normal way, but there's alternative as well
        const savedForm = localStorage.getItem('saved-login-form');

        if (savedForm) {
            const loadedForm = JSON.parse(savedForm);
            this.reactiveForm.patchValue({
                email: loadedForm.email,
            });
        }
        */

        const subscription = this.reactiveForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe({
                next: ({ email }) => {
                    const cleanedEmail = this.removeSpacing(email);

                    localStorage.setItem(
                        'saved-login-form',
                        JSON.stringify({ email: cleanedEmail }),
                    );
                },
            });

        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }

    onSubmitRF() {
        console.log(this.reactiveForm);
        if (this.reactiveForm.valid) {
            this.reactiveForm.reset();
        }
    }

    private removeSpacing(input: Partial<string | null | undefined>) {
        return input?.split(' ').join('');
    }

    /*
    constructor() {
        // use afterNextRender here
        const savedForm = localStorage.getItem('saved-login-form');

        if (savedForm) {
            const loadedFormData = JSON.parse(savedForm);
            const savedEmail = loadedFormData.email;

            setTimeout(() => {
                this.templateDrivenForm().controls['email'].setValue(
                    savedEmail,
                );
            }, 1);
        }

        const subscription = this.templateDrivenForm()
            .valueChanges?.pipe(debounceTime(500))
            .subscribe({
                next: ({ email }) => {
                    localStorage.setItem(
                        'saved-login-form',
                        JSON.stringify({ email }),
                    );
                },
            });
        this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    }
    */

    /* Template Driven
    onSubmitTD(formData: NgForm): void {
        if (formData.form.invalid) return;

        const enteredEmail = formData.form.value.email;
        const enteredPassword = formData.form.value.password;

        console.log(formData.form);
        console.log(enteredEmail, enteredPassword);

        formData.form.reset();
    }
    */
}
