import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    signal,
} from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [InfoMessageComponent],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
    count = signal(0);

    get debugOutput(): string {
        console.log('[Counter] "debugOutput" binding re-evaluated.');
        return 'Counter Component Debug Output';
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.count.set(0);
        }, 4000);

        setTimeout(() => {
            console.log('Timer expired!');
        }, 5000);
    }

    onDecrement(): void {
        this.count.update((prevCount) => prevCount - 1);
    }

    onIncrement(): void {
        this.count.update((prevCount) => prevCount + 1);
    }
}
