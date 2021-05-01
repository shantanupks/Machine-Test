import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  person;
  name;
  email;
  gender;
  address;
  dateOfBirth: Date;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.person = data;
    this.name = data.name;
    this.email = data.email;
    this.gender = data.gender;
    this.address = data.address;
    this.dateOfBirth = new Date(data.dateOfBirth);
  }

  dobUpdate(event) {
    console.log(event);
    console.log(this.dateOfBirth.toLocaleDateString('en-GB'));
  }

  ngOnInit(): void {
  }

  updatePerson() {
    this.person = {
      name: this.name,
      email: this.email,
      gender: this.gender,
      address: this.address,
      dateOfBirth: this.dateOfBirth.toString()
    }
    this.dialogRef.close(this.person);
  }

}
