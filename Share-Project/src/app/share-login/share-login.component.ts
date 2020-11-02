import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-login',
  templateUrl: './share-login.component.html',
  styleUrls: ['./share-login.component.css']
})
export class ShareLoginComponent implements OnInit {
  userLogedIn: boolean = false;
  email:string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userLogedIn = true;
    console.log("success", this.email, this.password);
    this.router.navigateByUrl('main');
  }

}
