import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interface or class for level details data (replace with your actual structure)
interface LevelDetails {
  title: string;
  room: string;
  status: string;
  suggestion: string;
  // ... other properties
}

@Component({
  selector: 'app-level-details',
  templateUrl: './level-details.page.html',
  styleUrls: ['./level-details.page.scss'],
})
export class LevelDetailsPage implements OnInit {
  levelDetails: LevelDetails = {
    title: 'Room 2.03, Level 2',
    room: '2.03',
    status: 'Overflown',
    suggestion: 'Add more trash bin, put a bigger size of trash bin or pick up trash when it is already full.',
    // ... other properties with default values
  };
  

  constructor(private activatedRoute: ActivatedRoute) {}

  
  ngOnInit() {
  // Retrieve level details (ensure you handle potential missing data)
  this.levelDetails = this.activatedRoute.snapshot.queryParams['levelDetails'] as LevelDetails;
  }
}
