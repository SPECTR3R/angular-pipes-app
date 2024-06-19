import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { TogglePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { sortHeroByPipe } from './pipes/sort-by-hero.pipe';

@NgModule({
	declarations: [
		BasicPageComponent,
		NumbersPageComponent,
		UncommonPageComponent,
		OrderComponent,
		TogglePipe,
		sortHeroByPipe,
		CanFlyPipe,
	],
	imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
