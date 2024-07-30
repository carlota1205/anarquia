
import { Component, OnInit } from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import { Service } from '../services-list/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-budget',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './create-budget.component.html',
  styleUrl: './create-budget.component.scss'
})
export class CreateBudgetComponent implements OnInit{

  budgetList: Service[] = [];
  total: number = 0;
  constructor(private budget: ServiceBudgetService ){
    
  }
 
  
  ngOnInit(): void {
    this.budget.budgetList.subscribe(b => {
      this.budgetList = b;
      this.calculateTotal();
      console.log('Subscribed budgetList:', this.budgetList);
    });
  }

  calculateTotal(): number {
    // Calcular el total sumando los precios de los servicios
    this.total = this.budgetList.reduce((sum, service) => sum + service.Price, 0);
    return this.total;
  }
 


}

