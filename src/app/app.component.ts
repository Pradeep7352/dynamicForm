import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [{
    type: 'text',
    name: "person_name",
    label: "Person's Name",
    value: '',
    required: true,
  },
  {
    type: 'dropdown',
    name: "states",
    label: "Person's state",
    value: 'in',
    required: true,
    options: ["Maharashtra",
      "Kerala",
      "Tamil Nadu"
    ]
  }

  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
