import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    title = 'app';
  constructor(private router: Router) { }

  ngOnInit() {
        
        if(!window.sessionStorage.getItem('username')){
            this.router.navigate(['']);
        }
  }

}
