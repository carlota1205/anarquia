import {Component, OnInit} from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import {Service} from '../services-list/service';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [],
  providers:[ServiceBudgetService],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent implements OnInit {
   services: Service [] = [
    {
      Detail : 'Diseño completo de merchandasing',
      Categorie:'Diseño de producto',
      Price:12397,
      Image:'img/peñasalud.jpg',
    },
    {
      Detail : 'Diseño de calcos',
      Categorie:'Diseño de producto',
      Price:17166,
      Image:'img/anarquia sticker.jpg',
    },
    {
      Detail : 'Diseño de Menu Restaurant',
      Categorie:'Editorial',
      Price:92980,
      Image:'img/logoydiseñodecarta menu.jpg',
    }
   ];

  
   constructor(private budget: ServiceBudgetService){
   }
   ngOnInit(): void {

   }
   addToBudget(services:Service):void{
     console.log('adding service:',services)
     this.budget.addToBudget(services);
     
   }

}

