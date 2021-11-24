import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  
  oddNumbers: number[] = [];
  evenNumber: number[] = [];
 onIntervalFired(firedNumber: number) {
  if (firedNumber % 2 === 0) {
    this.evenNumber.push(firedNumber);
  } else {
    this.oddNumbers.push(firedNumber);
  }
 }


@Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
