import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-login',
  templateUrl: './share-login.component.html',
  styleUrls: ['./share-login.component.css']
})
export class ShareLoginComponent implements OnInit {
  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
