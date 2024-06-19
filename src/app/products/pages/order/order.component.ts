import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
	selector: 'products-order',
	templateUrl: './order.component.html',
})
export class OrderComponent {
	isUpperCase: boolean = false;
	heroes: Hero[] = [
		{ id: 1, name: 'Superman', canFly: true, color: Color.blue },
		{ id: 2, name: 'Batman', canFly: false, color: Color.black },
		{ id: 3, name: 'Flash', canFly: false, color: Color.red },
		{ id: 4, name: 'Wonderman', canFly: true, color: Color.gold },
	];
	sortKey: keyof Hero | null = null;

	setSortKey(sortKey: keyof Hero) {
		this.sortKey = sortKey;
	}
	toggleCase() {
		this.isUpperCase = !this.isUpperCase;
	}
}
