import { APIService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  constructor(private _API:APIService){

  }
  score:number=this._API.score;
  total:number=this._API.Questions.length;
}
