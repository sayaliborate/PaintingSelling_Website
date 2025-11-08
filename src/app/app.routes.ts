import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtistLoginComponent } from './components/artist-login/artist-login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AdminDashboard1Component } from './components/admin-dashboard1/admin-dashboard1.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { IndianArtComponent } from './components/indian-art/indian-art.component';
import { HomeDecComponent } from './components/home-dec/home-dec.component';
import { ModernArtComponent } from './components/modern-art/modern-art.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackRetriveComponent } from './components/feedback-retrive/feedback-retrive.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'artist-login', component: ArtistLoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'admin-dashboard1', component: AdminDashboard1Component },
  { path: 'dashboard', component: AdminDashboard1Component },
  { path: 'indian-art', component: IndianArtComponent },
  { path: 'modern-art', component: ModernArtComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'feedback-retrive', component: FeedbackRetriveComponent },



//   { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'HomeComponent' } // Redirect unknown paths to home
];

export const appRoutingProviders = [provideRouter(routes)];
