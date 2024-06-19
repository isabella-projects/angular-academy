import { Component } from '@angular/core';

@Component({
    selector: 'button[appButton]',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    /*  We can use Signal Inputs or Input() decorator
        But this team instead we'll use ng-content
    */
}
