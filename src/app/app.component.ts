import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){}
  rform=this.fb.group({
    fname:[''],
    mname:[''],
    occ:['']
  })
   
   submitted
  selected
 selectInput(event) {
  
    let selected = event.target.value;
     if (this.selected == 1) {
       this.f.setValidators([Validators.required]);
        this.m.setValidators([Validators.required]);
        this.o.setValidators([Validators.required])
     } else{
 this.f.setValidators([Validators.required]);
  this.m.setValidators(null);
   this.o.setValidators(null);
     }
       this.f.updateValueAndValidity();
       this.m.updateValueAndValidity();
       this.o.updateValueAndValidity();
 }
 onSubmit(){
   
  if(this.rform.invalid){
      // alert('please fill the mandatory fields ')
    this.submitted=true
     return false
  
     }
   else
   {
     this.submitted=false
  alert(JSON.stringify(this.rform.value))
 }
   this.rform.reset()
 }
 
 
   get f() {
     return this.rform.get('fname')
   }
    get m() {
     return this.rform.get('mname')
   }
    get o() {
     return this.rform.get('occ')
   }
}
