import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
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
		TableModule,
	],
})
export class PrimeNgModule {}
