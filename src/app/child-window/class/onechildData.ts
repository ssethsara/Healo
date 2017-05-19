import { InMemoryDbService } from 'angular-in-memory-web-api';

export class oneChild implements InMemoryDbService {
  createDb() {
    let child = [
      { 
        id:123, 
        first_name: 'Ruwan',
        last_name: 'Perera' ,
        date_of_birth: '10/15/2017',
        blood_group:'A+'}, 
    ];
    return {child};

  }

  
}