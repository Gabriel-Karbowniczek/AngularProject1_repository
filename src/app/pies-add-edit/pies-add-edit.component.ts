import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PiesService } from '../services/pies.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pies-add-edit',
  templateUrl: './pies-add-edit.component.html',
  styleUrls: ['./pies-add-edit.component.css']
})
export class PiesAddEditComponent {
  piesForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _piesService: PiesService,
    private _dialogRef: MatDialogRef<PiesAddEditComponent>
  ){
    this.piesForm = this._fb.group({
      Id_of_Owner: '',
      Name: '',
      Race: '',
      Date_of_Birth: ''
    })
  }

  onFormSubmit(){
    if(this.piesForm.valid){
      this._piesService.addPies(this.piesForm.value).subscribe({
        next: (val: any) => {
          alert('Added Successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) =>{
          console.error(err);
        }
      })
    }
  }
}
