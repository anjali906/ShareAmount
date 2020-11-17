import { Component, OnInit, Input, Pipe} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayUser = false;
 @Input() userloggedIn;
 personCount = 0;
 amountTotal = 0;
 eachPerson = 0;
 user = 0;
  constructor() { }

  ngOnInit(): void {

  }

  onAddUser(){
    this.displayUser = true;
  }
  onEnterPersonCount(value: string){
    let number = parseInt(value);
    if(!(isNaN(number)))
    this.personCount = number;
    this.user = number;
  }
  onEnterAmount(value:string){
    let amount = parseInt(value);
    if(!(isNaN(amount)))
    this.amountTotal = amount;
  }
  onSubmit(){
    this.eachPerson = Math.floor(this.amountTotal/this.personCount);
  }
}
