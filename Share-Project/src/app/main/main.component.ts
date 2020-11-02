import { Component, OnInit, Input, Pipe} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 @Input() userloggedIn;
 personCount = 0;
 amountTotal = 0;
 eachPerson = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onEnterPersonCount(value: string){
    let number = parseInt(value);
    if(!(isNaN(number)))
    this.personCount = number;
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
