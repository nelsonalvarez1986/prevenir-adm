import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() nameFromChild = new EventEmitter();
  public name;
  constructor() { }

  ngOnInit(): void {
  }
alert(name){
    this.nameFromChild.emit(name);
  }
}
