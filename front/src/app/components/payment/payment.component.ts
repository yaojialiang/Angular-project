import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpclientService} from '../../services/httpclient.service'
import {SpringService} from '../../services/spring.service'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private http:HttpclientService,private backurl:SpringService) { }
  dataset:Array<any>=[];
  allprice:number=0
  ngOnInit() {
  	if(window.localStorage.getItem('carlist')){
  		let arr:any=JSON.parse(window.localStorage.getItem('carlist'));
  		this.dataset=arr;
  		arr.forEach((res,idx) => {
  			this.allprice=this.allprice+res['price']*1;
  		})
  		console.log(arr);
  	}else{
  		this.router.navigate(['/login/']);
  	}
  }
  payment(){
  	let arr:Array<any>=[];
  	if(this.dataset[0].orderID){
  		this.dataset.forEach((res) => {
  			arr.push(res.orderID);
  		})
  		console.log(arr)
  		this.http.get('delcar',{ipt:arr}).then((res) => {
  			if(res['status']){
  				alert('支付成功！')
          this.router.navigate(['/home/zuixin']);
  			}
  		})
  	}else{
  		window.localStorage.setItem('carlist','');
      alert('支付成功！');
      this.router.navigate(['/home/zuixin']);
  	}
  }
  back(){
    // console.log(this.backurl.backhis);
    this.router.navigate(['/confirm/']);
  }
}
