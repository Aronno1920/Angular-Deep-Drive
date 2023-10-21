import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eLearning';


  angularCourse = COURSES[0];
  gitCourse = COURSES[1];
  dockerCourse = COURSES[2];

}
