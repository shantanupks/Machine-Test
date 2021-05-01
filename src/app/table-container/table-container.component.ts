import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogBoxComponent } from '../delete-dialog-box/delete-dialog-box.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Input() dataSource;
  displayedColumns: string[] = ['name', 'email', 'gender', 'address', 'dateOfBirth', 'action'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formatDataSource();
  }

  deletePerson(person) {
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      width: '250px',
      data: person
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirmDelete') {
        this.dataSource = this.dataSource.filter(x => x.index !== person.index);
        this.updateData.emit(this.dataSource);
      }
    });
  }

  editPerson(person) {
    this.openDialog(person);
  }

  openDialog(person): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: person
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource = this.dataSource.map(x => {
          if (x.index === person.index) {
            x = result
          }
          return x
        });
        this.formatDataSource();
        this.updateData.emit(this.dataSource);
      }
    });
  }

  formatDataSource() {
    this.dataSource = this.dataSource.map(x => {
      x['formattedDOB'] = new Date(x.dateOfBirth).toLocaleDateString();
      return x;
    })
    console.log(this.dataSource);
  }

}
