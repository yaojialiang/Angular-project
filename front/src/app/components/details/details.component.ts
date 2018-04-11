import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import {HttpclientService} from '../../services/httpclient.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	goodsid:number;
	start:number;
	dend:number;
	marleft:number=-100;
	fl:string='tu';
	dataset:Array<any>=[];
	changTag:string='imgtxt';
	arr:Array<any>=[];
	taslk:string;
	taslkshow:Boolean=false;
	constructor(private route: ActivatedRoute, private router: Router,private http:HttpclientService ) { }
	dow(event: any){
		if(event.type=='touchstart'){
			this.start=event.targetTouches[0].clientX;
		}else if(event.type=='touchend'){
			this.dend=event.changedTouches[0].clientX;
			if(!$(event.target).closest('.swiper-wrapper').is(':animated')){
				if(this.start-this.dend<0){
					this.marleft=this.marleft+100;
					let is:any=this;
					if(this.marleft==0){
						$(event.target).closest('.swiper-wrapper').animate({
							marginLeft:this.marleft+'%'
						},500,function(){
							$(event.target).closest('.swiper-wrapper').css({
								'margin-left':-(is.arr.length*100)+'%'
							})
							is.marleft=-(is.arr.length*100);
						})
					}else{
						$(event.target).closest('.swiper-wrapper').animate({
							marginLeft:this.marleft+'%'
						},500)
					}
					
				}else if(this.start-this.dend>0){
					this.marleft=this.marleft-100;
					if(this.marleft<this.arr.length*(-100)){
						let is:any=this;
						$(event.target).closest('.swiper-wrapper').animate({
							marginLeft:this.marleft+'%'
						},500,function(){
							$(event.target).closest('.swiper-wrapper').css({
								'margin-left':-100+'%'
							})
							is.marleft=-100;
						})
						
					}else{
						$(event.target).closest('.swiper-wrapper').animate({
							marginLeft:this.marleft+'%'
						},500)
					}
					
				}
			}
			
		}
	}
	togtag(event: any){
		if(event.target.tagName.toLowerCase()=='span'){
			if(event.target.innerText=='图文详情'){
				this.fl='tu'
				$(event.target).closest('.tag').find('.tag_move span').stop().animate({
					marginLeft:2+'%'
				})
				this.changTag='imgtxt'
			}else if(event.target.innerText=='发售详情'){
				this.fl='shou'
				$(event.target).closest('.tag').find('.tag_move span').stop().animate({
					marginLeft:35+'%'
				})
				this.changTag='detsale'
			}else if(event.target.innerText=='配置详情'){
				this.fl='pei'
				$(event.target).closest('.tag').find('.tag_move span').stop().animate({
					marginLeft:68+'%'
				})
				this.changTag='toconfig'
			}
		}
	}
	back(){
	
		this.router.navigate(['/community/']);
	}
	ngOnInit() {
		let id:number
		this.route.params.subscribe((params) => {
		    id=params['id'];
		});
        this.http.get('sgoods',{id}).then((res) => {
        	this.dataset=res['data'];
        	this.arr=res['data'][0].imgs.split(',')
        	console.log(this.dataset);
        })
	}
	addcar(){
		if(window.localStorage.getItem('user')){
			let username:string=window.localStorage.getItem('user');
			let goodsID:number;
			let price:number=this.dataset[0].price;
			this.route.params.subscribe((params) => {
			    goodsID=params['id'];
			});
			this.http.get('addgoods',{username,goodsID,price}).then((res) => {
				if(res['status']==true){
					this.tal('成功添加购物车！');
				}else if(res['status']=='buy'){
					this.tal('在你购物车里面啦！');
				}else if(res['status']=='tbp'){
					this.tal('在你订单里面！')
				}else if(res['status']=='yfk'){
					this.tal('买过不能再买哦!')
				}
				console.log(res)
			})
			console.log(username,goodsID);
		}
	}
	tal(val){
		this.taslk=val;
		this.taslkshow=true;
		setTimeout(() => {
			this.taslkshow=false;
		},2000)
	}
}