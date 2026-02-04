import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule],
  templateUrl: './studentform.html',
  styleUrl: './studentform.css',
})
export class Studentform {

  //arr: Array<String> = [];

  pagedata = {
    name: '',
    phone: '',
    gender: '',
    address: '',
    emptyfield: [] as String[]
  };

  searchvalues: FormGroup = new FormGroup({
    'stuname': new FormControl(''),
  'stuphone': new FormControl(''),
  'stugender': new FormControl(''),
  'stuaddress': new FormControl('')
  })
  
  


  handlestu(){

    this.pagedata.emptyfield = [];
    
    for(let i = 0; i < 4; i++){
      switch(i){

        case 0:
          if(this.searchvalues.get('stuname')?.value?.trim() == ''){
            this.pagedata.emptyfield.push("name");
          }
          break;
        case 1:
          if(this.searchvalues.get('stuphone')?.value?.trim() == ''){
            this.pagedata.emptyfield.push("phone");
          }
          break;
        case 2:
          if(this.searchvalues.get('stugender')?.value?.trim() == ''){
            this.pagedata.emptyfield.push("gender");
          }
          break;
        case 3:
          if(this.searchvalues.get('stuaddress')?.value?.trim() == ''){
            this.pagedata.emptyfield.push("address");
          }
          break;
      }
    }
    
    this.pagedata.name = this.searchvalues.get('stuname')?.value;
    this.pagedata.phone = this.searchvalues.get('stuphone')?.value;
    this.pagedata.gender = this.searchvalues.get('stugender')?.value;
    this.pagedata.address = this.searchvalues.get('stuaddress')?.value;


  } 
}
