import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [BrowserAnimationsModule, ButtonModule, MenuModule, MenubarModule],
})
export class PrimeNgModule {}
