import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
