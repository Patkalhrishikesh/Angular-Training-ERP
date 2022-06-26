import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public name = "hrishikesh";
  public url = window.location.href;
  public greeting = "";

  public myId="testId"
  public isDisabled = true;
  public successClass = "text-danger";

  public count = 0




  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onclick(){
    return this.count++;
  }



  logMessage(value){
    console.log(value)
  }

}
