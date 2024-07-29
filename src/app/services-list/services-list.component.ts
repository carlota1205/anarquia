import {Component, OnInit} from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import {Service} from '../services-list/service';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent implements OnInit {
   services: Service [] = [
    {
      "Detail": "Diseño Completo de Merchandasing",
      "Categorie": "Diseño de producto",
      "Price": 12397,
      "Image": "img/peñasalud.jpg",
    
    },
    {
      "Detail": "Diseño de Calcos",
      "Categorie": "Diseño de producto",
      "Price": 17166,
      "Image": "img/anarquia sticker.jpg",
      
    },
    {
      "Detail": "Diseño de Menu de Restaurant",
      "Categorie": "Editorial",
      "Price": 92980,
      "Image": "img/logoydiseñodecarta menu.jpg",
     
    },
    {
      "Detail": "Diseño Tapa de Libro",
      "Categorie": "Editorial",
      "Price": 64132,
      "Image": "img/diseñocuentoportada.jpg",
      
    },
    {
      "Detail": "Diseño de Marca",
      "Categorie": "Identidad",
      "Price": 119205,
      "Image": "img/logoexperiencia.jpg",
      
    },
    {
      "Detail": "Tarjetas Personales",
      "Categorie": "Papeleria",
      "Price": 22649,
      "Image": "img/TECNOCELL1.jpg",
      
    },
    {
      "Detail": "Afiche",
      "Categorie": "Publicidad",
      "Price": 38623,
      "Image": "img/CLAPTONERIO.jpg",
     
    },
    {
      "Detail": "Folleto",
      "Categorie": "Folleteria",
      "Price": 41224,
      "Image": "img/Fixture.jpg",
      
    }
   ];

   constructor(private budget: ServiceBudgetService){ }

   ngOnInit(): void { }
   addToBudget(services:Service):void{
     console.log('adding service:',services)
     this.budget.addToBudget(services);
     
   }

}

