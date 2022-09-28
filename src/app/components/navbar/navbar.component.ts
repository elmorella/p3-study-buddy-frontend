import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // searchForm: FormGroup = new FormGroup({
  //   search:new FormControl('')
  // })

  constructor() { }

  ngOnInit(): void {
  }

}
