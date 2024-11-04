import { Injectable } from "@angular/core";
import { ICity } from "./booking-details.models";

@Injectable({
    providedIn:'root'
})
export class Bookingservice{
    cities:ICity[] = [
        {
          "id": 1,
          "name": "Paris, France",
          "price": 100000,
          "imageUrl": "assets/image/parisnewimage.jpg",
          "description": "Discover Paris: iconic landmarks, rich art, vibrant culture, charming streets, and world-famous French cuisine.",
          "rating": 4.5
        },
        {
          "id": 2,
          "name": "Dubai, United Arab Emirates",
          "price": 120000,
          "imageUrl": "assets/image/dubai.jpg",
          "description": "Discover the glamour of Los Angeles, the heart of the entertainment industry, with its beautiful beaches, iconic Hollywood sign, and diverse cultural attractions.",
          "rating": 4.7
        },
        {
          "id": 3,
          "name": "New York, USA",
          "price": 90000,
          "imageUrl": "assets/image/newyork.jpg",
          "description": "Enjoy the architectural beauty and deep-dish pizza in Chicago, a city known for its stunning skyline, museums, and vibrant arts scene.",
          "rating": 4.3
        },
        {
          "id": 4,
          "name": "Sydney, Australia",
          "price": 800000,
          "imageUrl": "assets/image/sydney.jpg",
          "description": "Experience the diverse culture and culinary delights of Houston, a city rich in history, offering world-class dining and a bustling arts community.",
          "rating": 4.6
        },
        {
          "id": 5,
          "name": "Istanbul, Turkey",
          "price": 95000,
          "imageUrl": "assets/image/istanbul.jpg",
          "description": "Enjoy the stunning desert landscapes and warm climate of Phoenix, where you can explore beautiful parks and outdoor activities year-round.",
          "rating": 4.6
        },
        {
          "id": 6,
          "name": "Kuala Lumpur, Malaysia",
          "price": 90000,
          "imageUrl": "assets/image/KualaLumpur.jpg",
          "description": "Step back in time in Philadelphia, home to iconic historical sites like the Liberty Bell and Independence Hall, as well as a vibrant food scene.",
          "rating": 4.2
        },
        {
          "id": 7,
          "name": "Shanghai, China",
          "price": 80000,
          "imageUrl": "assets/image/china.jpg",
          "description": "Experience the rich history and vibrant culture of San Antonio, known for its beautiful River Walk, historic missions, and delicious Tex-Mex cuisine.",
          "rating": 4.4
        },
        {
          "id": 8,
          "name": "Barcelona, Spain",
          "price": 130000,
          "imageUrl": "assets/image/spain.jpg",
          "description": "Relax in sunny San Diego, famous for its beaches, parks, and warm climate, ideal for outdoor enthusiasts and family-friendly fun.",
          "rating": 4.7
        },
        {
          "id": 9,
          "name": "Seoul, South Korea",
          "price": 105000,
          "imageUrl": "assets/image/korea.jpg",
          "description": "Discover the modern charm of Dallas, a city known for its cultural landmarks, shopping districts, and vibrant nightlife.",
          "rating": 4.6
        },
        {
          "id": 10,
          "name": "Maui, Hawaii",
          "price": 115000,
          "imageUrl": "assets/image/Hawai.jpg",
          "description": "Explore San Jose, the heart of Silicon Valley, known for its tech innovation, diverse communities, and beautiful parks.",
          "rating": 4.9
        },
        {
          "id": 11,
          "name": "Zurich, Switzerland",
          "price": 90000,
          "imageUrl": "assets/image/switzerland.jpg",
          "description": "Immerse yourself in the live music capital of the world, Austin, known for its eclectic vibe, outdoor festivals, and delicious barbecue.",
          "rating": 4.8
        },
        {
          "id": 12,
          "name": "Vancouver, Canada",
          "price": 75000,
          "imageUrl": "assets/image/canada.jpg",
          "description": "Enjoy the coastal charm of Jacksonville, with its beautiful beaches, golf courses, and thriving arts scene.",
          "rating": 2
        }
      ];
      

    getCities(){
        return this.cities;
    }
    getCityDetails(id:number) {
        return this.cities.find(cityDetails => cityDetails.id === id);
      
    }

    addCity(newCity: ICity) {
      newCity.id = this.cities.length + 1;
      this.cities.push(newCity);
  }
}

