import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    
	s_h(event: any){
		console.log(event);
		$(event.target).next('.div3').slideToggle();
	}
	constructor() { }

	ngOnInit() {
	}
    
}
