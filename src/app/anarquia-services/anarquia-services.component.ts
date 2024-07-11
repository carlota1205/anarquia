import { Component } from '@angular/core';
import {ServicesListComponent} from '../services-list/services-list.component';
import {CreateBudgetComponent} from '../create-budget/create-budget.component';
@Component({
  selector: 'app-anarquia-services',
  standalone: true,
  imports: [ServicesListComponent,CreateBudgetComponent],
  templateUrl: './anarquia-services.component.html',
  styleUrl: './anarquia-services.component.scss'
})
export class AnarquiaServicesComponent {
  constructor() { }

  ngOnInit(): void { }
}


