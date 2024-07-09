import { Routes, RouterModule} from '@angular/router';
import { AnarquiaServicesComponent } from './anarquia-services/anarquia-services.component';
import { AnarquiaContactComponent } from './anarquia-contact/anarquia-contact.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'services',
        pathMatch: 'full'
    },
    {
        path: 'services',
        component: AnarquiaServicesComponent
    },
    {
        path: 'contact',
        component: AnarquiaContactComponent
    },
    
];

