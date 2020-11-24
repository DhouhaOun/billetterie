import { Ticket } from '../models/ticket';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {TicketFetch } from '../models/ticket-fetch';

export class TicketData implements InMemoryDbService{
  createDb(){
const tickets: Ticket[] = [
    {  id: 1, 
      name: 'moi moche et méchant-1 restant',
      description: 'Une place de cinema gratuite',
      imagePath :'../../assets/images/moche.jpg',
 
    },
    {   id: 2,
        name: 'spécialitéfruitsde mer *****-10 restant',
        description: 'Découvrir une nouvelle adresse qui fait la pari de vous faire apprécier les crabe.Ic les recettes sont une belle fusion entre la mer et la France',
        imagePath :'../../assets/images/fruits.jpg',
      },

      { id: 3,
        name: 'mc Grégor VS Mayweather-4 restant',
        description: 'Découvrir une nouvelle adresse qui fait la pari de vous faire apprécier les crabe',
        imagePath :'../../assets/images/fruits.jpg',
      }
  
  ];
const ticket : TicketFetch[]= [
  {  id: 1, 
    name: 'moi moche et méchant-1 restant',
    description: 'Une place de cinema gratuite',
    imagePath :'../../assets/images/moche.jpg',

  },
  {   id: 2,
      name: 'spécialitéfruitsde mer *****-10 restant',
      description: 'Découvrir une nouvelle adresse qui fait la pari de vous faire apprécier les crabe.Ic les recettes sont une belle fusion entre la mer et la France',
      imagePath :'../../assets/images/fruits.jpg',
    },

    { id: 3,
      name: 'mc Grégor VS Mayweather-4 restant',
      description: 'Découvrir une nouvelle adresse qui fait la pari de vous faire apprécier les crabe',
      imagePath :'../../assets/images/fruits.jpg',
    }

];

return {tickets, ticket};
  }}










