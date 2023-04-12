import { Component } from '@angular/core';

@Component({
  selector: 'app-search-of-vehicle',
  templateUrl: './search-of-vehicle.component.html',
  styleUrls: ['./search-of-vehicle.component.scss']
})
export class SearchOfVehicleComponent {
  filterTerm!: string;
  employe_information:any = [
    { 
      emp_code: 1,
      vehicle_no: 'KWJ-3214',
      company_name: 'PITB',
      product_name:'Cultus 2016',
      bill_no:18,
      bill_date:'24-12-2022',
      qty:18,
      unit:1235,
      unit_price:300,
      net_price:2500,
      remarks:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 2,
      vehicle_no: 'KWJ-3214',
      company_name: 'PITB',
      product_name:'Superintendent',
      bill_no:18,
      bill_date:'24-12-2022',
      qty:18,
      unit:1235,
      unit_price:300,
      net_price:2500,
      remarks:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 3,
      vehicle_no: 'KWJ-3214',
      company_name: 'PITB',
      product_name:'Superintendent',
      bill_no:18,
      bill_date:'24-12-2022',
      qty:18,
      unit:1235,
      unit_price:300,
      net_price:2500,
      remarks:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 4,
      vehicle_no: 'KWJ-3244',
      company_name: 'PITB',
      product_name:'Superintendent',
      bill_no:18,
      bill_date:'24-12-2022',
      qty:18,
      unit:1235,
      unit_price:300,
      net_price:2500,
      remarks:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 5,
      vehicle_no: 'KWJ-3233',
      company_name: 'PITB',
      product_name:'Superintendent',
      bill_no:18,
      bill_date:'24-12-2022',
      qty:18,
      unit:1235,
      unit_price:300,
      net_price:2500,
      remarks:'In Progress',
      update:'Update',
      delete:'Delete'
    }
         
  ];
  constructor() {}
  ngOnInit(){   
  }  
}
