import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ranges: Range[] = [];
  rangeForm: FormGroup;

  constructor() {
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

  // this.rangeForm = new FormGroup({
  //   'nombreCompleto': new FormGroup({
  //     'nombre': new FormControl('Mauricio', Validators.required),
  //     'apellido': new FormControl('', Validators.required)
  //   }),
  //   'correo': new FormControl('', Validators.required)
  // });


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
  }
}

class Range {
  lower: Number;
  upper: Number;
  name: String;

  constructor() {
    this.lower = null;
    this.upper = null;
    this.name = null;
  }
}
