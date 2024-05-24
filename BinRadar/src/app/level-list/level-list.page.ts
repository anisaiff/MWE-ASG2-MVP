import { Component } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './level-list.page.html',
  styleUrls: ['./level-list.page.scss'],
})
export class LevelsPage {
  // List data for levels (replace with your actual data)
  levels: any[] = [
    { title: 'Area A, Ground Floor' },
    { title: 'Area B, Ground Floor' },
    { title: 'Room 1.01, First Floor' },
    // ... add more level items
  ];

  navigateToDetails(level: any) {
    // Implement your navigation logic here, potentially passing the selected level data
    console.log('Level clicked:', level);
    // Use Ionic Navigation API (replace with your actual navigation logic)
    // this.router.navigate(['level-details'], { queryParams: { levelDetails: level } });
  }
}
