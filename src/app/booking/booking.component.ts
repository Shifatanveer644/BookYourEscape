import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserComponent } from "../user/user.component";
import { Bookingservice} from "../service";
import { ICity } from './booking.model';


@Component({
  selector: 'app-booking',
  standalone:true,
  imports: [RouterModule, CommonModule, FormsModule, UserComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  cities: ICity[] = [];

  filteredCities = [...this.cities]; // Storing search results
  searchTerm: string = '';
  editingCityId: number | null = null;
  showAddCityModal: boolean = false;

  newCity: ICity = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    rating: 0
  };

  constructor(private router: Router, private cityService:Bookingservice) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    this.filteredCities=this.cities;
  }
  
  // bookNow(cities: string) {
  //   this.router.navigate(['/booking-details', .id]);
  // }

  filterCities() {
    if (this.searchTerm.trim()) {
      this.filteredCities = this.cities.filter(city =>
        city.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
     
      this.filteredCities = this.cities;
    }
  }  
  editCity(cityId: number) {
    this.editingCityId = cityId;
  }

  // Save the edited city details
  saveCity() {
    this.editingCityId = null; // Clear editing state after saving
  }

  // Cancel editing without saving
  cancelEdit() {
    this.editingCityId = null;
    this.filteredCities = [...this.cities]; // Optional: reset to original cities if desired
  }

  // Delete a city by ID
  deleteCity(cityId: number) {
    this.cities = this.cities.filter(city => city.id !== cityId);
    this.filteredCities = this.filteredCities.filter(city => city.id !== cityId);
  }

  openAddCityModal() {
    this.showAddCityModal = true;
  }
 
 
  closeAddCityModal() {
    this.showAddCityModal = false;
  }
 
 
  addNewCity() {
    this.cityService.addCity(this.newCity);
    this.cities = this.cityService.getCities();
    this.filterCities();
    this.resetNewCity();
    this.closeAddCityModal();
  }
 
 
  resetNewCity() {
    this.newCity = { id: 0, name: '', description: '', imageUrl: '', price: 0, rating: 0 };
  }


}