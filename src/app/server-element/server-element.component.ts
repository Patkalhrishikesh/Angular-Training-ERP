import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation,DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None ,Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {


 @Input('srvElement') element : { type: string, name: string, content: string; };
 @Input () name: string;


 constructor() {
  console.log('constructor called !');

 }

 ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log('Ng on changes called !');
  console.log(changes);


 }

 ngOnInit(): void {
  console.log('ngOnInit Called ..!');

 }

 ngDoCheck(): void{
  console.log('ngDoCheck called!')
 }


 ngAfterContentInit(): void {
 console.log('ng After init called ..');

}

}
