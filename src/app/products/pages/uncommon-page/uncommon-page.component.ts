import { ChangeDetectorRef, Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  public name: string = 'John Doe';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'Mr.',
    female: 'Mrs.',
  };
  guests: string[] = ['Elena', 'John', 'Jane', 'Chris', 'Mike', 'Anna'];
  pluralMap: { [count: string]: string } = {
    '=0': 'No guest',
    '=1': 'One guest',
    other: '# guests',
  };
  removeGuest() {
    this.guests.shift();
    this.cdr.detectChanges();
  }

  changeGender() {
    this.gender = this.gender === 'male' ? 'female' : 'male';
    this.name = this.name === 'John Doe' ? 'Jane Doe' : 'John Doe';
  }

  public person = {
    name: 'kate',
    age: 25,
    address: '123 Main St',
    mascot: 'dog',
  };

  public myObservableTimer = interval(2000).pipe(
    tap(() => {
      console.log('Observable timer emitted');
    })
  );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });
}
