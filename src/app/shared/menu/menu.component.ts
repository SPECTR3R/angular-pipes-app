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
            label: 'Texts and Dates',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
          },
          {
            label: 'Others',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
          },
        ],
      },
    ];
  }
}
