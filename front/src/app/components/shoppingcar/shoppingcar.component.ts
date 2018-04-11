import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {HttpclientService} from '../../services/httpclient.service'
@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent implements OnInit {
	car:string='car'
    show:boolean=true;
    show1:boolean=false;
    dataset: Array<any>=[];
    ipt: Array<any>=[];
    allprice:number= null;
    qty:string = null;

	constructor(private http :HttpclientService ,private router:Router) { }
	ngOnInit() {
        this.http.get('goods',{page:1,pageitems:3}).then((res)=>{
          console.log(res);
            this.dataset = res['data'];
        })
	}
  bianji($event:any){
    $event.target.style.display="none"
    $event.target.nextSibling.style.display="block"
    this.show1=true;
    this.show=false;
  }
  wancheng($event:any){
    $event.target.previousSibling.style.display="block"
    $event.target.style.display="none"
    this.show = true;
    this.show1=false;
  }
  select(id:string,$event:any){
    if($event.target.checked){
       this.ipt.push(id);
     }else{
        this.ipt.splice(this.ipt.indexOf(id),1)
     }
      this.setcheck();
      this.sel();
      this.bb();
  }
  setcheck(){
    let item:any=window.document.getElementById('check');
    if(this.ipt.length==this.dataset.length){
        item.setAttribute('checked', 'true')
    }else{
      item.removeAttribute('checked')
    }
  }
  selectAll(){
    let item:any=window.document.getElementById('check');
    let arr:any=document.getElementsByClassName('check2');
    if(item.getAttribute('checked')){
      item.removeAttribute('checked');
    }else{
      item.setAttribute('checked',true);
    }
    if(item.getAttribute('checked')){
      this.ipt=[];
      this.dataset.forEach((item) => {
        this.ipt.push(item.id);
      })
    }else{
      this.ipt=[];
    }
    this.sea();
    this.sel();
    this.bb();
  }
  sea(){
    let arr:any=document.getElementsByClassName('check2');
    let item:any=window.document.getElementById('check');
    if(item.getAttribute('checked')){
      for(let i=0;i<arr.length;i++){
        arr[i].setAttribute('checked', true)
      }
    }else{
       for(let i=0;i<arr.length;i++){
        arr[i].removeAttribute('checked',false)
      }
    }
  }
  sel(){
    let pr:number=0;
    if(this.ipt.length>0){
        this.ipt.forEach((item) => {
          this.dataset.forEach((item2) => {
            if(item2.id==item){
              pr+=item2.price;
            }
          })
        })
    }else{
        this.allprice = 0;
    }
    this.allprice=pr;
  }
  jiesuan(){
    let a:any=window.document.getElementById('jiesuan')
    let arr:any=document.getElementsByClassName('check2');
    let item:any=window.document.getElementById('check');
    this.bb();
     for(let i = 0;i<arr.length;i++){
     if(item.checked || arr[i].checked){
         this.router.navigate(['confirm']);
      }
    }
  }
  bb(){
    let a:any=window.document.getElementById('jiesuan')
    let arr:any=document.getElementsByClassName('check2');
    let item:any=window.document.getElementById('check');
    for(let i = 0;i<arr.length;i++){
      if(item.checked || arr[i].checked){
        a.style.backgroundColor = '#f90'
      }else{
        a.style.backgroundColor = '#ccc'
      }
    }
  }

}
