import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
	name: 'sortHeroBy',
})
export class sortHeroByPipe implements PipeTransform {
	transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
		switch (sortBy) {
			case 'id':
				return value.sort((a, b) => a.id - b.id);
			case 'name':
				return value.sort((a, b) => a.name.localeCompare(b.name));
			case 'canFly':
				return value.sort(
					(a, b) => Number(b.canFly) - Number(a.canFly)
				);
			case 'color':
				return value.sort((a, b) => a.color.localeCompare(b.color));

			default:
				return value;
		}
	}
}
