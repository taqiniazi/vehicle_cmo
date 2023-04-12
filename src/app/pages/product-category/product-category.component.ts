import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {
  filterTerm!: string;
  product_category:any = [
    { 
      emp_code: 1,
      cat_code : 123,
      cat_name: 'PITB',
      description:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 2,
      cat_code : 1223,
      cat_name: 'PITB',
      description:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 3,
      cat_code : 1423,
      cat_name: 'PITB',
      description:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 4,
      cat_code : 4123,
      cat_name: 'PITB',
      description:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 5,
      cat_code : 1023,
      cat_name: 'PITB',
      description:'In Progress',
      update:'Update',
      delete:'Delete'
    },
    
    
         
  ];
  constructor() {}
  ngOnInit(){   
  }  
}
