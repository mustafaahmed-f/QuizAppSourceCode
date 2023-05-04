
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _httpClient:HttpClient) {

  }
  Questions:any[]=[];
  Api:any='';
  score:number=0;
  getQuestions(numOfQuestions:number,category:number,difficulty:string): Observable<any> {
    this.Api= `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`
    return this._httpClient.get(this.Api)
  }
}
