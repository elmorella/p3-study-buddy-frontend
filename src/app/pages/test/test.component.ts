import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextSubmited(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
