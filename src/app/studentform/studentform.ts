import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule],
  templateUrl: './studentform.html',
  styleUrl: './studentform.css',
})
export class Studentform {

  searchvalues: FormGroup = new FormGroup({
    'stuname': new FormControl(''),
  'stuphone': new FormControl(''),
  'stugender': new FormControl(''),
  'stuaddress': new FormControl('')
  })
  
  


  handlestu(){
    console.log(this.searchvalues.get('stuname')?.value);
    console.log(this.searchvalues.get('stuphone')?.value);
    console.log(this.searchvalues.get('stugender')?.value);
    console.log(this.searchvalues.get('stuaddress')?.value);
  } 
}
