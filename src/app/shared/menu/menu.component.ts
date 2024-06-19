import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'shared-menu',
	templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
	public items: MenuItem[] = [];

	ngOnInit() {
		this.items = [
			{
				label: 'Angular pipes',
				icon: 'pi pi-desktop',
				items: [
					{
						label: 'Texts & Dates',
						icon: 'pi pi-align-left',
						routerLink: '/',
					},
					{
						label: 'Numbers',
						icon: 'pi pi-dollar',
						routerLink: 'numbers',
					},
					{
						label: 'Others',
						icon: 'pi pi-globe',
						routerLink: 'uncommon',
					},
				],
			},
			{
				label: 'Custom pipes',
				icon: 'pi pi-cog',
				items: [
					{
						label: 'Custom pipe',
						icon: 'pi pi-align-left',
						routerLink: 'custom',
					},
				],
			},
		];
	}
}
