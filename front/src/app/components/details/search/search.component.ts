import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../../../services/httpclient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	arr:Array<any>=[];
	dataset:Array<any>=[];
  show:Boolean=false;
  constructor(private route: ActivatedRoute, private router: Router,private http:HttpclientService ) { }

  ngOnInit() {
  	if(window.localStorage.getItem('search')){
  		this.arr=JSON.parse(window.localStorage.getItem('search'));
  	}
  	
  }

  mohu(event: any,item: any){
  	let str:string=window.localStorage.getItem('search');
  	if(str&&item.value!=''){
  		if(JSON.parse(str).indexOf(item.value)>-1){
  		}else{
  			this.arr=JSON.parse(str);
  			this.arr.push(item.value);
  		}
  	}else if(item.value!=''){
  		this.arr.push(item.value)
  	}
  	window.localStorage.setItem('search',JSON.stringify(this.arr))
  	this.http.get('fuzzygoods',{data:item.value}).then((res) => {
  		this.dataset=res['data'];
  		if(this.dataset.length<1){
        this.show=true;
      }else{
        this.show=false;
      }
  	})
  }
  clearfont(event: any,item: any){
  	event.stopPropagation();
    this.dataset=[];
  	item.value='';
  }
  clearhis(event: any,item: any){
    event.stopPropagation();
  	let arr:Array<any>=JSON.parse(window.localStorage.getItem('search'));
  	this.arr.splice(this.arr.indexOf(item.innerText),1);
  	window.localStorage.setItem('search',JSON.stringify(this.arr))
  }
  getid(id: any){
  	this.router.navigate(['/details/'+id]);
  }
  checkhis(event: any,item: any){
    item.value=event.target.innerText
    $('.search_for').trigger('click');
  }
  change(event: any,item: any){
    if(item.value){
    }else{
      this.dataset=[];
    }
  }
}