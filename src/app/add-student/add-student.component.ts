import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addStudentForm = new FormGroup({
    firstName: new FormControl(
      null,[Validators.required, Validators.minLength(3),Validators.maxLength(10)]
    ),
    lastName: new FormControl(),
    email: new FormControl()
    
  });

  get getAddStudentFormControl(){
    return this.addStudentForm.controls;


  }

  createNewStudent(){
   // console.log(this.addStudentForm);

    let data = this.addStudentForm.value;
    console.log(data);
  }
}
