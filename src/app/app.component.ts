import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import {AnarquiaServicesComponent} from './anarquia-services/anarquia-services.component';
import {AnarquiaContactComponent} from './anarquia-contact/anarquia-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,AnarquiaServicesComponent,AnarquiaContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A N A R Q U I A';
}
