import { Component } from '@angular/core';

interface Item {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  items: Item[] = [
    { title: 'Area A, Ground Floor', icon: 'home' },
    { title: 'Area B, Ground Floor', icon: 'home' },
    { title: 'Room 1.01, First Floor', icon: 'home' },
    { title: 'Room 1.02, First Floor', icon: 'home' },
    { title: 'Roses LOL. First Floor', icon: 'home' },
    { title: 'Room 1.03, First Floor', icon: 'home' },
    { title: 'Room 2.01, Second Floor', icon: 'home' },
    { title: 'Room 2.02, Second Floor', icon: 'home' },
    { title: 'Room 104. Pirvt Floor', icon: 'home' },
    { title: 'Room 21, Sermud Hoor', icon: 'home' },
    { title: 'Room 2.03, Second Floor', icon: 'home' },
    { title: 'Surau, Third Floor', icon: 'home' },
    { title: 'Library, Third Floor', icon: 'home' },
  ];
}
