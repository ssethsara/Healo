import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemChildService implements InMemoryDbService {
  createDb() {
    let children = [
      { id:123, 
        first_name: 'Ruwan',
        last_name: 'Perera' ,
        date_of_birth: '10/06/2017',
        blood_group:'A+',
        age:3,
        SRC:'No',
        last_clinic_date: '12/10/2017',
        last_doctor_check_date: '12/10/2017',
        last_midwife_visit_date: '12/10/2017',
        weight:19,
        height:45,
        doctor_notes:'Should come next clinic date and do the eye test',
        midwife_notes:'Reaction Time of child is not good meet the doctor immediately'
      }, 

      { id: 125,
        first_name: 'Nuwan',
        last_name: 'Perera',
        date_of_birth: '10/06/2017',
        blood_group:'B+',
        age:3,
        SRC:'No',
        last_clinic_date: '12/10/2017',
        last_doctor_check_date: '12/10/2017',
        last_midwife_visit_date: '12/10/2017',
        weight:22,
        height:58,
        doctor_notes:'Should come next clinic date and do the eye test',
        midwife_notes:'Reaction Time of child is not good meet the doctor immediately'
      },

      { id: 145, 
        first_name: 'Kasun',
        last_name: 'Perera',
        date_of_birth: '10/06/2017',
        blood_group:'A-',
        age:3,
        SRC:'No',
        last_clinic_date: '12/10/2017',
        last_doctor_check_date: '12/10/2017',
        last_midwife_visit_date: '12/10/2017',
        weight:21,
        height:55,
        doctor_notes:'Should come next clinic date and do the eye test',
        midwife_notes:'Reaction Time of child is not good meet the doctor immediately'  
      },

      { id: 553, 
        first_name: 'Pasan',
        last_name: 'Perera',
        date_of_birth: '10/06/2017',
        blood_group:'A+',
        age:3,
        SRC:'No',
        last_clinic_date: '12/10/2017',
        last_doctor_check_date: '12/10/2017',
        last_midwife_visit_date: '12/10/2017',
        weight:23,
        height:51,
        doctor_notes:'Should come next clinic date and do the eye test',
        midwife_notes:'Reaction Time of child is not good meet the doctor immediately'

      }
    ];

    let schedule = [
      {
            "id": 1,
    		"title": "Clinic for Mothers",
    		"start": "2017-02-01"
    	},
    	{
            "id": 2,
    		"title": "Clinic for Child",
    		"start": "2017-02-07",
    		"end": "2017-02-10"
    	},
    	{
    		"id": 3,
    		"title": "Midwife home visit",
    		"start": "2017-02-09T16:00:00"
    	},
    	{
    		"id": 4,
    		"title": "Speacial seminar for mothers",
    		"start": "2017-02-16T16:00:00"
    	},
    	{
            "id": 5,
    		"title": "Eye Clinic",
    		"start": "2017-02-11",
    		"end": "2017-02-13"
    	},
    	{
            "id": 6,
    		"title": "Clinic for Child",
    		"start": "2017-02-12T10:30:00",
    		"end": "2017-02-12T12:30:00"
    	},
    	{
            "id": 7,
    		"title": "Clinic for Child",
    		"start": "2017-02-12T12:00:00"
    	},
    	{
            "id": 8,
    		"title": "Clinic for Mothers",
    		"start": "2017-02-12T14:30:00"
    	},
    	{
            "id": 9,
    		"title": "Clinic for Child",
    		"start": "2017-02-12T17:30:00"
    	},
    	{
            "id": 10,
    		"title": "Clinic for Child",
    		"start": "2017-02-12T20:00:00"
    	},
    	{
            "id": 11,
    		"title": "Clinic for Mothers",
    		"start": "2017-02-13T07:00:00"
    	},
   
    ];


    return {children,schedule};

  }
}





