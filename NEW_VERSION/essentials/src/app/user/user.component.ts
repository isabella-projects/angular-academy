import {
    Component,
    EventEmitter,
    Input,
    Output,
    computed,
    input,
} from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;
    @Output() select = new EventEmitter<string>();

    get imagePath(): string {
        return 'assets/users/' + this.avatar;
    }

    onSelectUser(): void {
        this.select.emit(this.id);
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
