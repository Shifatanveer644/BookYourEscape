import { CommonModule } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RatingComponent } from "../rating/rating.component";
import { FormsModule } from '@angular/forms'
import { map } from 'rxjs';
import { Bookingservice } from '../service';
import { ICity } from './booking-details.models';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent,FormsModule, UserComponent, RouterLink],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent implements OnInit {
  city: ICity | undefined;
  id:number|undefined;

  

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!
      this.city = this.bookingservice.getCityDetails(this.id)
    })
  }constructor(
    private router: Router, private route: ActivatedRoute,
    private bookingservice:Bookingservice ) {}
    
  onBack() {
    this.router.navigate(['/booking']); // or the route path to your registration page
  }
}
