import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SpringService} from '../../services/spring.service'
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
	dataset:Array<any>=[];
	allprice:number=0;
	qty:number=0;
  constructor(private router:Router,private backurl:SpringService) { }

  ngOnInit() {
  	if(window.localStorage.getItem('carlist')){
  		let arr:any=JSON.parse(window.localStorage.getItem('carlist'));
  		this.dataset=arr;
  		arr.forEach((res,idx) => {
  			this.allprice=this.allprice+res['price']*1;
  			this.qty++;
  		})
  	}else{
      this.backurl.backhis='confirm';
  		this.router.navigate(['/login/']);
  	}
  }

}
