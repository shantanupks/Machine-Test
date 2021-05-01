import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.scss']
})

export class DeleteDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  deletePerson() {
    this.dialogRef.close('confirmDelete');
  }

}
