import {
    AfterViewInit,
    Component,
    ElementRef,
    output,
    EventEmitter,
    viewChild /* ViewChild */,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

import { NewTicket } from './new-ticket.model';

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
    // @Output() add = new EventEmitter<NewTicket>();

    /* --- Signal way available from Angular 17+ --- */
    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    enteredTitle = '';
    enteredText = '';

    add = output<NewTicket>();

    ngAfterViewInit(): void {
        console.log('AFTER VIEW INIT');
    }

    onSubmit(): void {
        this.add.emit({
            title: this.enteredTitle,
            text: this.enteredText,
        });

        this.enteredTitle = '';
        this.enteredText = '';
        // this.form().nativeElement.reset();
    }
}
