import { Component } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage {
  // List data for levels (replace with your actual data)
  levels: any[] = [
    { title: 'Area A, Ground Floor' },
    { title: 'Area B, Ground Floor' },
    { title: 'Room 1.01, First Floor' },
    // ... add more level items
  ];
}
