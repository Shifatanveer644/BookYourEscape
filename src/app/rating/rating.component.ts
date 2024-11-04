import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges {

  faStar = faStar;
  @Input() //decorator to receive data from parent component
  rating!: number; //expect number type and it is property of rating component
  starWidth!: number; 

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); //allow child component to emit events to parent component

  ngOnChanges(): void { //input
    this.starWidth = (this.rating * 90) / 5; 
  }

  onClick(): void {
    this.ratingClicked.emit(`You rated ${this.rating} stars`); 
  }
} 
