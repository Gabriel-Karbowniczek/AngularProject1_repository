import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pies-add-edit',
  templateUrl: './pies-add-edit.component.html',
  styleUrls: ['./pies-add-edit.component.css']
})
export class PiesAddEditComponent {
  piesForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.piesForm = this._fb.group({
      Id_of_Owner: '',
      Name: '',
      Race: '',
      Date_of_Birth: ''
    })
  }

  onFormSubmit(){
    if(this.piesForm.valid){
      console.log(this.piesForm.value)
    }
  }
}
