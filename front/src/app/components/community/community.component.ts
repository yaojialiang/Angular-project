import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpclientService} from '../../services/httpclient.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
	fenlei:string='fenlei';
	show:string='none';
	dataset:Array<any>=[];
	imgs:Array<any>=[];
	gametag:string='';
	settag(event: any){
		if(event.target.tagName.toLowerCase()=='span'){
			$(event.target).closest('.cen').find('span').removeClass('ac');
			$(event.target).addClass('ac');
			this.gametag=event.target.innerText;
			this.http.get('sgoods',{label:this.gametag}).then((res) => {
				this.dataset=res['data'];
			})
		}
	}
	maskshow(event: any){
		this.show='block';
		if(this.show=='block'){
			$('.taglist').animate({
				marginRight:0+'%'
			},500)
		}
		
	}
	s_h(event: any){
		let is:any = this;
		if($(event.target).attr('class')=='mask'||$(event.target).attr('class')=='ok'){
			$('.taglist').animate({
				marginRight:-80+'%'
			},500,function(){
				is.show='none'
			})
			
			// this.show=!this.show;
		}
		
	}
	getid(id: number){
		 this.router.navigate(['/details/'+id]);
	}
	toSearch(){
		this.router.navigate(['/gamesearch'])
	}
	clostag(event: any){
		event.stopPropagation();
		if(event.target.tagName.toLowerCase()=='i'){
			this.gametag='';
			this.http.get('sgoods').then((res) => {
				this.dataset=res['data'];
			})
		}
	}
	goback(){
		this.router.navigate(['//home/zuixin']);
	}
	constructor(private http:HttpclientService,private route: ActivatedRoute, private router: Router) { }
	ngOnInit() {
		let str:any;
		this.route.params.subscribe((params) => {
            str=params.tag;
        });
		if(str==0){
			this.http.get('sgoods').then((res) => {
				this.dataset=res['data'];
			})
		}else{
			this.http.get('sgoods',{label:str}).then((res) => {
				this.dataset=res['data'];
				this.gametag=str;
			})
		}
		
	}

}
