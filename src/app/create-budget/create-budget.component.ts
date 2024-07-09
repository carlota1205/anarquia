
import { Component, OnInit } from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import { CommonModule } from '@angular/common';
import { Service } from '../services-list/service';


@Component({
  selector: 'app-create-budget',
  standalone: true,
  imports: [CommonModule],
  providers:[ServiceBudgetService],
  templateUrl: './create-budget.component.html',
  styleUrl: './create-budget.component.scss'
})
export class CreateBudgetComponent {

  budgetList: Service[] =[];
 
  constructor(private budget: ServiceBudgetService ){
    this.budget.budgetList.subscribe(b => this.budgetList = b);
       console.log('?:', this.budgetList)
  }

  ngOnInit():void{
     
  }
}
