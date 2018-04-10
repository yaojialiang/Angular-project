import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
	fenlei:string='fenlei';
	show:Boolean=false;
	settag(event: any){
		if(event.target.tagName.toLowerCase()=='span'){
			$(event.target).closest('.cen').find('span').removeClass('ac');
			$(event.target).addClass('ac');

		}
	}
	maskshow(event: any){
		this.show=true;
	}
	s_h(event: any){
		if($(event.target).attr('class')=='mask'){
			this.show=!this.show;
		}
		
	}
	constructor() { }

	ngOnInit() {
	}

}
