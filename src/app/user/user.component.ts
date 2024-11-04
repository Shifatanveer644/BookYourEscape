import { Component } from '@angular/core';
import {User} from './user.model';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,BrowserModule,FormsModule,RouterModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user: User = new User();

save(userform:NgForm)
{
  console.log(userform.form);
  console.log(userform.valid);
  console.log("Saved info " + JSON.stringify(userform.value))
}

}
