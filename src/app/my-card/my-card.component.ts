import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent {

  @Input()
  get message() {
    return this.text;
  }
  set message(newMessage: any) {
    this.text = newMessage;

    this.messageChange.emit(newMessage);
  }

  @Output() messageChange = new EventEmitter();

  messageHandler(value) {
    this.text = value;
    this.messageChange.emit(this.text);
  }


  @Input()
  get rating() {
    return this.theRating;
  }
  set rating(newRating: any) {
    this.theRating = parseInt(newRating, 10);
    this.ratingChange.emit(newRating);
  }

  @Output() ratingChange = new EventEmitter();

  public text = '';
  public theRating = 3;

  ratingHandler(value) {
    this.theRating = value;
    this.ratingChange.emit(this.theRating);
  }

  constructor() { }

}
