import { Component } from '@angular/core';
import wordsArray from '../utils/words'
import countriesArray from '../utils/countries'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  randomNumber = 0;

  onSlide(event : any){
    this.limit = event.target.value;
  }

  generate(){
    this.words = wordsArray.slice(0, this.limit).join(" ");
  }

  max = 20;
  min = 0;
  generateRandom(){
    this.randomNumber = Math.random() * (this.max - this.min) - this.min;
    this.words = countriesArray.slice(this.randomNumber, this.randomNumber + 1).join(" ");
  }
}
