import { Component } from '@angular/core';

import { TrafficData } from '../../traffic-data.model';

import { dummyData } from '../../traffic-data';

@Component({
    selector: 'app-traffic',
    standalone: true,
    imports: [],
    templateUrl: './traffic.component.html',
    styleUrl: './traffic.component.css',
})
export class TrafficComponent {
    dummyTrafficData: TrafficData[] = dummyData;

    maxTraffic: number = Math.max(
        ...this.dummyTrafficData.map((data) => data.value)
    );
}
