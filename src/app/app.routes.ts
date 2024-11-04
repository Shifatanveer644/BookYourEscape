import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component'; 
import { RatingComponent } from './rating/rating.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [
    
 
    {
        path:'home',
        component:HomeComponent
    },
 
    
    {
        path:'booking',
        component:BookingComponent
    },

    {
        path:'about-us',
        component:AboutUsComponent
    },
   
    {
        path:'contactus',
        component:ContactUsComponent
    },
    {
        path:'booking-details/:id',
        component:BookingDetailsComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
 
 
]; 