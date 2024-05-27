import {
    Component,
    EventEmitter,
    Input,
    Output,
    // computed,
    // input,
} from '@angular/core';

import { type User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath(): string {
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser(): void {
        this.select.emit(this.user.id);
    }

    /**
     * New alternative with signal inputs
     * 
     * @usageNote
     * - Execute the properties as functions in order to work
        avatar = input.required<string>();
        name = input.required<string>();
        imagePath = computed(() => {
            return 'assets/users/' + this.avatar();
        });
     */
}
