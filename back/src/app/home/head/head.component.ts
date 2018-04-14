import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
        document.getElementById('use').innerHTML = window.sessionStorage.getItem('username');
  }
  exit(){
    window.sessionStorage.removeItem('username');
    this.router.navigate(['']);
  }
}
