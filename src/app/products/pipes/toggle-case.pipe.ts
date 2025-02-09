import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'toggleCase',
})
export class TogglePipe implements PipeTransform {
	transform(value: string, toUpper: boolean = false): string {
		if (toUpper) {
			return value.toUpperCase();
		} else {
			return value.toLowerCase();
		}
	}
}
