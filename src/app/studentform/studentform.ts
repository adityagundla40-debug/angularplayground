import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule,CommonModule],
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
    var fields = [
    {key: 'stuname' , label: 'name'},
    {key: 'stuphone' , label: 'phone'},
    {key: 'stugender' , label: 'gender'},
    {key: 'stuaddress' , label: 'address'}
   ];
    
   fields.forEach(f =>{
    var value = this.searchvalues.get(f.key)?.value?.trim();
    if(!value)
    {
      this.pagedata.emptyfield.push(f.label);
    }
   });
    this.pagedata.name = this.searchvalues.get('stuname')?.value;
    this.pagedata.phone = this.searchvalues.get('stuphone')?.value;
    this.pagedata.gender = this.searchvalues.get('stugender')?.value;
    this.pagedata.address = this.searchvalues.get('stuaddress')?.value;
console.log(this.pagedata.emptyfield);


  } 
}
