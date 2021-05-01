import { Component } from '@angular/core';


export interface PersonData {
  name: string,
  email: string,
  gender: string,
  address: string,
  dateOfBirth: any
}

const ELEMENT_DATA: PersonData[] = [
  {
    name: 'name1',
    email: 'email1@gmail.com',
    gender: 'female',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name2',
    email: 'email2@gmail.com',
    gender: 'male',
    address: 'Gujrat, India',
    dateOfBirth: 'Wed Jun 11 1998 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name3',
    email: 'email3@gmail.com',
    gender: 'female',
    address: 'address3',
    dateOfBirth: 'Thu May 30 2002 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name4',
    email: 'email4@gmail.com',
    gender: 'male',
    address: 'address4',
    dateOfBirth: 'Thu May 10 2000 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name5',
    email: 'email5@gmail.com',
    gender: 'female',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name6',
    email: 'email6@gmail.com',
    gender: 'female',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name7',
    email: 'email7@gmail.com',
    gender: 'male',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name8',
    email: 'email8@gmail.com',
    gender: 'male',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name9',
    email: 'email9@gmail.com',
    gender: 'female',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
  {
    name: 'name10',
    email: 'email10@gmail.com',
    gender: 'female',
    address: 'Maharashtra, India',
    dateOfBirth: 'Wed Jul 20 1994 00:00:00 GMT+0530 (India Standard Time)'
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personData = ELEMENT_DATA.map((x, index) => {
    x['index'] = index
    return x
  });

  updateData(data) {
    this.personData = data;
  }
}
