import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
	declarations: [],
	exports: [
		ButtonModule,
		MenubarModule,
		CardModule,
		FieldsetModule,
		PanelModule,
		ToolbarModule,
		SplitButtonModule,
	],
})
export class PrimeNgModule {}
