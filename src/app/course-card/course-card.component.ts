import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
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

  setImagePath(): string{
    let imageUrl:string ='';
 
      if(this.course && this.course.imagepath){
       imageUrl= this.course.imagepath;
     }else{
       imageUrl="https://techaid24.com/wp-content/uploads/2021/06/no_image_available.png";
     }
     return imageUrl;
   }
}
