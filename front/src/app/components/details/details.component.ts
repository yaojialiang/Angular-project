import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	goodsid:number;
	start:number;
	dend:number;
	marleft:number=0;
	arr:Array<any>=['https://s1.sonkwo.com/FkIM4pqR4Reuo0EYPJ2IPa9OyXgb','https://s1.sonkwo.com/FvslV8_Fv4kPLFo0NLtK5Q4LKmM-','https://s1.sonkwo.com/FlBXjyU9KPIEw3_Q5P7E7DMD8fEx'];
	constructor(private route: ActivatedRoute, private router: Router) { }
	dow(event: any){
		
		if(event.type=='touchstart'){
			this.start=event.targetTouches[0].clientX;
		}else if(event.type=='touchend'){
			this.dend=event.changedTouches[0].clientX;
			if(this.start-this.dend<0){
				this.marleft=this.marleft+100;
				$(event.target).closest('.swiper-wrapper').css({
					'margin-left':this.marleft+'%'
				})
			}else if(this.start-this.dend>0){
				this.marleft=this.marleft-100;
				if(this.marleft<this.arr.length*(-100)){
					$(event.target).closest('.swiper-wrapper').css({
						'margin-left':this.marleft+'%'
					})
					
					$(event.target).closest('.swiper-wrapper').css({
						'margin-left':this.marleft+'%'
					})
				}else{
					$(event.target).closest('.swiper-wrapper').css({
						'margin-left':this.marleft+'%'
					})
				}
				
			}
		}

	}
	ngOnInit() {
		this.route.params.subscribe((params) => {
            this.goodsid=params.id;
        });
        
	}

}
