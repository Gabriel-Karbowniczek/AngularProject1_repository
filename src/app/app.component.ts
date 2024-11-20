import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PiesAddEditComponent } from './pies-add-edit/pies-add-edit.component';
import { PiesService } from './services/pies.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  displayedColumns: string[] = ['id', 'Id_of_Owner', 'Name', 'Race','Date_of_Birth','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // switchValue = 'material';
  constructor(private _dialog: MatDialog,
    private _piesService: PiesService,
    private _coreService: CoreService){}

  ngOnInit(): void {
    this.getPiesList();
  }

  openAddEditPiesForm(){
    const dialogRef = this._dialog.open(PiesAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if(val){
          this.getPiesList();
        }
      }
    })
  }

  getPiesList(){
    this._piesService.getPiesList().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePies(id: number){
    this._piesService.deletePies(id).subscribe({
      next: (res) =>{
        this._coreService.openSnackBar('Succesfully deleted','done')
        this.getPiesList();
      },
      error: console.log
    })
  }

  openEditForm(data: any){
    const dialogRef = this._dialog.open(PiesAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if(val){
          this.getPiesList();
        }
      }
    })
  }
}

