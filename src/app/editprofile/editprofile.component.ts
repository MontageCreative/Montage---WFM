import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  Roles=[
    "Manager",
    "Senior",
    "member",
  ]
  data = {
    selectedRole :"Manager"
  }
  constructor() { }

  ngOnInit() {
  }

}
