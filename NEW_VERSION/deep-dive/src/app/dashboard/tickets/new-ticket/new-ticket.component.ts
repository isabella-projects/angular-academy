import {
    AfterViewInit,
    Component,
    ElementRef,
    viewChild /* ViewChild */,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements AfterViewInit {
    /* ------------ Angular < 17 decorator way --------------------------- */
    // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

    /* --- Signal way available from Angular 17+ --- */
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    /* ---------------------------------- */

    ngAfterViewInit(): void {
        console.log('AFTER VIEW INIT');
        console.log(this.form());
    }

    onSubmit(title: string, ticketText: string): void {
        console.log(title);
        console.log(ticketText);

        this.form().nativeElement.reset();
    }
}
