
import { Component, OnInit } from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import { Service } from '../services-list/service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-budget',
  standalone: true,
  imports: [],
  providers:[ServiceBudgetService,HttpClient ],
  templateUrl: './create-budget.component.html',
  styleUrl: './create-budget.component.scss'
})
export class CreateBudgetComponent implements OnInit{

  budgetList: Service[]  | undefined;
 
  constructor(private budget: ServiceBudgetService ){
    this.budget.budgetList.subscribe(b => this.budgetList = b);
       console.log('?:', this.budgetList)
  }
 
  ngOnInit():void{
     
  }
}
