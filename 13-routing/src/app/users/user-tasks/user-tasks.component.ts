import {
    Component,
    computed,
    inject,
    input,
    // Input,
    // DestroyRef,
    // OnInit,
} from '@angular/core';

import { UsersService } from '../users.service';

// import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-tasks',
    standalone: true,
    imports: [],
    templateUrl: './user-tasks.component.html',
    styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
    /* Most common approach by having the same property name as the route 'userId' in this case */
    userId = input.required<string>();

    private usersService = inject(UsersService);

    userName = computed(
        () =>
            this.usersService.users.find((user) => user.id === this.userId())
                ?.name
    );

    /* Another old approach by using observables - same property as the route name is NOT needed
    userName = '';

    constructor(
        private usersService: UsersService,
        private activatedRoute: ActivatedRoute,
        private destroyRef: DestroyRef
    ) {}
    // or injecting it directly in the constructor

    ngOnInit(): void {
        console.log(this.activatedRoute);
        const subscription = this.activatedRoute.paramMap.subscribe({
            next: (paramMap) => {
                this.userName =
                    this.usersService.users.find(
                        (user) => user.id === paramMap.get('userId')
                    )?.name || '';
            },
        });
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }
    */

    /* Getting username without signals
    @Input({ required: true }) userId!: string;

    get userName() {
        return this.usersService.users.find((user) => user.id === this.userId)
            ?.name;
    }
    */
}
