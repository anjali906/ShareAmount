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
 collection = [];
  constructor() { }

  ngOnInit(): void {

  }
  pushData(name: string, contribute: number){
     this.collection.push({name, contribute});
    console.log('pushed this change', name, contribute);
    console.log(this.collection);
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
