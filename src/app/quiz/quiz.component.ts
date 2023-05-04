import { Router } from '@angular/router';
import { APIService } from './../api.service';
import { SettingsComponent } from './../settings/settings.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],

})

export class QuizComponent implements OnInit {

constructor(private _API:APIService , private _router:Router){
}

Question:string='';
Answers:string[]=[];
shuffledAnswers:string[]=[]; //we will show this
correctAnswer:string='';
wrongAnswer:string[]=[];
currentAnswer:string='';
currentIndex:number=0;
correctAnswers:number=0;
nextBtnText:string='Submit';
finished:number=0;
totalQuestions:number = this._API.Questions.length

ngOnInit(): void {
  this.currentIndex=0;
  this.nextBtnText='submit';

  // console.log(this._API.Questions);
  this.Question=(this._API.Questions)[this.currentIndex].question;

  this.Answers=[(this._API.Questions)[this.currentIndex].correct_answer,...(this._API.Questions)[this.currentIndex].incorrect_answers]
  this.shuffle(this.Answers)
  this.correctAnswer=(this._API.Questions)[this.currentIndex].correct_answer

  if(this.totalQuestions==1){
    this.nextBtnText='Finish'
  }



}

shuffle(array:string[]){
  this.shuffledAnswers= array.sort(()=>{return Math.random()-0.5;});
 return this.shuffledAnswers
}

getAnswer(event:any){
  this.currentAnswer=event.target.value;
}

nextQuestion(){
  if(this.currentAnswer!=''){

    if(this.currentAnswer==this.correctAnswer){
      (this.correctAnswers)++;
      $('#Correct').fadeIn(500).fadeOut(500);
    }
    else{
      $('#inCorrect').fadeIn(500).fadeOut(500)
    }
    this.currentIndex++;
    if((this.currentIndex+1)<=(this._API.Questions.length)){
      this.Question=(this._API.Questions)[this.currentIndex].question;
      this.Answers=[(this._API.Questions)[this.currentIndex].correct_answer,...(this._API.Questions)[this.currentIndex].incorrect_answers]
      this.correctAnswer=(this._API.Questions)[this.currentIndex].correct_answer
      this.shuffle(this.Answers)
    }



    if((this.currentIndex+1)==(this._API.Questions.length)){
      this.nextBtnText='Finish'
    }
    if((this.currentIndex)==(this._API.Questions.length)){
      this._router.navigateByUrl('/score')
    }

    this.currentAnswer='';
  }

  this._API.score=this.correctAnswers;



}


}
