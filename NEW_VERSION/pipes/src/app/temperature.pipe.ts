import { Pipe, PipeTransform } from '@angular/core';
import {
    TemperatureModel,
    TemperatureType,
    TemperatureSymbol,
} from './temperature.model';

@Pipe({
    name: 'temperature',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {
    transform(
        value: TemperatureModel,
        inputType: TemperatureType,
        outputType?: TemperatureType
    ): string {
        let val: number;

        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        let outputTemp: number;

        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;
        }

        let symbol: TemperatureSymbol;

        if (!outputType) {
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}
