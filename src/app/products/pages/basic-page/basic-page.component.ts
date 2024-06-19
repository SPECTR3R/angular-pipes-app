import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent {
  public name: string = 'SOlid SnAkE';

  public customDate: Date = new Date();
}
