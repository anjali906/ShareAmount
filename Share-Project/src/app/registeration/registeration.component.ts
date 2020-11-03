import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
 newUserForm= new FormGroup({
   firstName: new FormControl('', Validators.required),
   lastName: new FormControl('', Validators.required),
   email: new FormControl('', Validators.required),
   password: new FormControl('', Validators.required),
   city: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required)
 });
  constructor() { }

  ngOnInit(): void {
  }

}
