import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PiesService } from '../services/pies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/services/core.service';

@Component({
  selector: 'app-pies-add-edit',
  templateUrl: './pies-add-edit.component.html',
  styleUrls: ['./pies-add-edit.component.css']
})
export class PiesAddEditComponent implements OnInit {
  piesForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _piesService: PiesService,
    private _dialogRef: MatDialogRef<PiesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService : CoreService
  ){
    this.piesForm = this._fb.group({
      Id_of_Owner: '',
      Name: '',
      Race: '',
      Date_of_Birth: ''
    })
  }

  ngOnInit(): void {
    this.piesForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.piesForm.valid){
      if(this.data){
        this._piesService.updatePies(this.data.id,this.piesForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Updated Successfully')
            this._dialogRef.close(true);
          },
          error: (err: any) =>{
            console.error(err);
          }
        });
      }else{
        this._piesService.addPies(this.piesForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Added Successfully')
            this._dialogRef.close(true);
          },
          error: (err: any) =>{
            console.error(err);
          }
        });
      }
    }
  }
}
