import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // searchForm: FormGroup = new FormGroup({
  //   search:new FormControl('')
  // })

  searchTerm:String = '';

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params =>{
    //   if(params['searchTerm'])
    //     this.searchTerm = params['searchTerm'];
    // })

    this.searchTerm = this.route.snapshot.paramMap.get("searchTerm")!
  }

  search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/search/' + this.searchTerm)
  }

}
