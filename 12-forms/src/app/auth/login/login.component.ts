import {
    Component,
    DestroyRef,
    effect,
    inject,
    input,
    viewChild,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

import { FormType } from './login.model';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    formType = input.required<FormType>();

    reactiveForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.email, Validators.required],
        }),
        password: new FormControl('', {
            validators: [Validators.minLength(6), Validators.required],
        }),
    });

    private templateDrivenForm = viewChild.required<NgForm>('form');
    private destroyRef = inject(DestroyRef);

    get isEmailValid() {
        return (
            this.reactiveForm.controls.email.touched &&
            this.reactiveForm.controls.email.dirty &&
            this.reactiveForm.controls.email.invalid
        );
    }

    get isPassValid() {
        return (
            this.reactiveForm.controls.password.touched &&
            this.reactiveForm.controls.password.dirty &&
            this.reactiveForm.controls.password.invalid
        );
    }

    constructor() {
        effect(() => {
            if (this.formType() === 'reactive') {
            }

            if (this.formType() === 'template') {
                console.log('template');

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
        });
    }

    onSubmitTD(formData: NgForm): void {
        if (formData.form.invalid) return;

        const enteredEmail = formData.form.value.email;
        const enteredPassword = formData.form.value.password;

        console.log(formData.form);
        console.log(enteredEmail, enteredPassword);

        formData.form.reset();
    }

    onSubmitRF() {
        console.log(this.reactiveForm);
    }
}
