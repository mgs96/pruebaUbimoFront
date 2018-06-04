import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { SpringService } from './spring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rangeForm: FormGroup;
  response: any = {};

  constructor(
    private spring: SpringService
  ) {
    this.rangeForm = new FormGroup({
      'period': new FormControl('2018'),
      'ranges': new FormArray([
        new FormGroup({
          lower: new FormControl(null, Validators.required),
          upper: new FormControl(null, Validators.required),
          name: new FormControl(null, Validators.required)
        })
      ])
    })
  }

  addRange() {
    console.log((<FormArray>this.rangeForm.controls['ranges']).controls);
    console.log(this.rangeForm.value);
    (<FormArray>this.rangeForm.controls['ranges']).push(
      new FormGroup({
        lower: new FormControl(null, Validators.required),
        upper: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required)
      })
    )
  }

  sendToSpring() {
    console.log(this.rangeForm.value);
    this.spring.sendData(this.rangeForm.value)
      .subscribe(table => {
        console.log(table);
        this.response = table;
        alert(`el estado del periodo es: ${ this.response.identifier }`);
      });
  }
}