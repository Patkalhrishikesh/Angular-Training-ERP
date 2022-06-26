import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {


//  @Input() public parentData;
@Input('parentData') public name;

@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

fireEvent(){
  this.childEvent.emit('hey hrishikesh in to ..parent component')
}


}
