// ====== ./app.routes.ts ======

// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';

// Route Configuration
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'images', component: ImagesComponent},
    {path: 'videos', component: VideosComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
