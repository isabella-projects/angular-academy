import { Component } from '@angular/core';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

import { Ticket } from './tickets.model';
import { NewTicket } from './new-ticket/new-ticket.model';

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
    tickets: Ticket[] = [];

    onAdd(ticketData: NewTicket) {
        const ticket: Ticket = {
            title: ticketData.title,
            request: ticketData.text,
            id: crypto.randomUUID(),
            status: 'open',
        };

        this.tickets.push(ticket);
    }

    onCloseTicket(id: string) {
        this.tickets = this.tickets.map((ticket) => {
            if (ticket.id === id) {
                return { ...ticket, status: 'closed' };
            }
            return ticket;
        });
    }
}
