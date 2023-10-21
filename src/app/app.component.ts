import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/Course';

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

  onCourseSelected(course:Course){
    alert('Click for '+course.title+' details page');
  }

}
