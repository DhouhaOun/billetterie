import { Component } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billetterie';
  showValidation:boolean = true;
  form: FormGroup;
  constructor(private readonly fb: FormBuilder,private route:Router) {
    this.form = this.fb.group({
      username: ['admin'],      
      password: ['admin']
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.showValidation = true;
   
    }
  }
}