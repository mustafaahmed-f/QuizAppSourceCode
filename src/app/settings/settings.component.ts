import { APIService } from './../api.service';
import { Component, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  constructor(private _API: APIService) {
  }

  difficulty: string = 'easy';
  category: number = 9;
  numberOfQuestions: number = 0;
  Questions:any[]=[];

  getDifficulty(event: any) {
    this.difficulty = event.target.value;
    this.getData();
  }

  getCategory(event: any): void {
    this.category = event.target.value;
    this.getData();
  }

  getNumOfQ(event: any):void {
    this.numberOfQuestions=event.target.value;
    this.getData();
  }



  getData(): void{
    this._API.getQuestions(this.numberOfQuestions, this.category, this.difficulty).subscribe({
      next: (data) => {
        this.Questions=data.results
        if(this.numberOfQuestions !=0  && this.Questions.length>0){
          $('#startBtn').removeClass('disabled')
        }
        else{
          if($('#startBtn').hasClass('disabled')==false){
            $('#startBtn').addClass('disabled')
          }
        }
        this._API.Questions=this.Questions;
      },
      error: (er:Error) => {
        console.log(er);
      },
      complete: () => {},
    });
  }


}
