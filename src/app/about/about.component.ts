import {
  Component
} from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about-component.scss']
})
export class AboutComponent {
  public team: { name: string; email: string; }[] = [
    {
      name: 'Michael O\'cain',
      email: 'ocainmm@g.cofc.edu'
    },
    {
      name: 'Marianna Sawyer',
      email: 'sawyermk@g.cofc.edu'
    },
    {
      name: 'Connor Yates',
      email: 'yatescp@g.cofc.edu'
    }
  ];
}
