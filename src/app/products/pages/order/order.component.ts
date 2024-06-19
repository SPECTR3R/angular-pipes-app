import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'products-order',
	templateUrl: './order.component.html',
})
export class OrderComponent {
	isUpperCase: boolean = false;

	toggleCase() {
		this.isUpperCase = !this.isUpperCase;
	}
}
