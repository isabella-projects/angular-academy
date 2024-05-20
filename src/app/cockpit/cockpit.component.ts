import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { DataServer } from '../types/types';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<DataServer>();
    @Output() blueprintCreated = new EventEmitter<DataServer>();

    // newServerName: string = '';
    // newServerContent: string = '';
    @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }
}
