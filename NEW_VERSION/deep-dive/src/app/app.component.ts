import { Component } from '@angular/core';

import { TrafficData } from './traffic-data.model';

import { dummyData } from './traffic-data';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
})
export class AppComponent {
    dummyTrafficData: TrafficData<number>[] = dummyData;
    currentStatus: string = 'online';

    maxTraffic: number = Math.max(
        ...this.dummyTrafficData.map((data) => data.value)
    );
}
