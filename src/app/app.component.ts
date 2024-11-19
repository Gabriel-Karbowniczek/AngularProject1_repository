import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PiesAddEditComponent } from './pies-add-edit/pies-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt1';
  // switchValue = 'material';
  constructor(private _dialog: MatDialog ){}

  openAddEditPiesForm(){
    this._dialog.open(PiesAddEditComponent)
  }
}

