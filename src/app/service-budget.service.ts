import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Service } from './services-list/service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceBudgetService {

  private budget_List: Service [] = [];
  budgetList: BehaviorSubject<Service []> = new BehaviorSubject<Service []>([]);
 


  constructor() {  }

  addToBudget(services: Service){
    
     let item: Service  | undefined = this.budget_List.find((v1)=> v1.Detail == services.Detail);
     if(!item){
        this.budget_List.push({... services});
        console.log('Service added:', services);
        console.log('Updated budget_List:', this.budgetList);
     }
    
     this.budgetList.next(this.budget_List);
     

  }
  
}
