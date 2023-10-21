import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/Course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course:Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onClickViewDetails(){
    alert('Add to cart successfully.');

    this.courseEmitter.emit(this.course);
  }
}
