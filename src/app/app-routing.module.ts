import { ScoreComponent } from './score/score.component';
import { QuizComponent } from './quiz/quiz.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'settings',pathMatch:'full'},
  {path:'settings',component:SettingsComponent,title:'Quiz settings'},
  {path:'quiz',component:QuizComponent,title:'Quiz'},
  {path:'score',component:ScoreComponent,title:'Score'},
  {path:'**',component:SettingsComponent,title:'Quiz settings'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
