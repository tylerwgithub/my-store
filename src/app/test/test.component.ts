import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  test1 = "";
  test2 = "";

  onClick1(a:string){
    this.test1 = a;
  }

  onClick2(a){
    this.test2 += a.target.value;
  }

  ngOnInit() {
  }

}
