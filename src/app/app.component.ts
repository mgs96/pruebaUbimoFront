import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ranges: Range[] = [];
  rangeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.rangeForm = this.formBuilder.group(new Range);
  }

  addRange() {
    this.ranges.push(new Range);
  }

  deleteRange() {
    this.ranges.pop();
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
