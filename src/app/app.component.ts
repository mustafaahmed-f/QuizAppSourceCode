import { fadeAnimation } from './animation';
import { Router } from '@angular/router';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [fadeAnimation],
})
export class AppComponent {
  title = 'QuizApp';
  constructor(private router:Router){

  }

  ngOnInit() {
    // this.router.navigate([''])
    this.router.navigateByUrl('/settings')
  }
}
