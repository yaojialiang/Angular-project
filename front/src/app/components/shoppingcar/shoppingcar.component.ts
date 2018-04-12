import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import {HttpclientService} from '../../services/httpclient.service'
@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent implements OnInit {
  car:string='car'
    show:boolean=true;
    dataset: Array<any>=[];
    dataset1: Array<any>=[];
    ipt: Array<any>=[];
    allprice:number= 0;
    qty:string = null;
    taslk:string = '';
    taslkshow:Boolean = false;

  constructor(private http :HttpclientService ,private router:Router) { }
  ngOnInit() {
        let admin:string='admin';
        this.http.get('sorder',{username:admin}).then((res)=>{
          console.log(res)
          this.dataset1 = res['data'];
          if(res['data'].length>0){
            for(let i=0;i<this.dataset1.length;i++){
                this.http.get('sgoods',{id:this.dataset1[i].goodsID}).then((res)=>{
                    let id:number = this.dataset1[i]['id']
                    res['data'][0]['orderID']=id;
                    this.dataset.push(res['data'][0]);
                })
            }
          }
          console.log(this.dataset)
        })
  }
  checkall(event: any){
    let n:number = this.dataset.length;
    if(n == this.ipt.length){
      this.ipt=[];
    }else{
      this.ipt=[];
      this.dataset.forEach((item) => {
        this.ipt.push(item.id);
      })
    }
    this.allp()
  }
  sincheck(event: any,id: any){
    if(this.ipt.indexOf(id)> -1){
      this.ipt.splice(this.ipt.indexOf(id),1);
    }else{
      this.ipt.push(id);
    }
    this.allp();
  }
  allp(){
    this.allprice=0
    this.ipt.forEach((item) => {
      this.dataset.forEach((res) => {
        if(res.id==item){
          this.allprice=this.allprice+(res.price*1);
        }
      })
    })
  }
  jiesuan(event: any){
    if($(event.target).hasClass('ac')){
      let arr:any =[];
      this.ipt.forEach((item) => {
        this.dataset.forEach((res) => {
          if(item==res.id){
            arr.push(res);
          }
        })
      })
      window.localStorage.setItem('carlist',JSON.stringify(arr));
      this.router.navigate(['/confirm/']);
    }else{
    }
  }
  bianji(event){
    this.show=!this.show;
  }
  delcar(){
    if(this.ipt.length>0){
      let arr:Array<any>=[];
      this.ipt.forEach((item) => {
        this.dataset.forEach((res) => {
          if(item==res.id){
            arr.push(res.orderID);
          }
        })
      })
      this.http.get('delcar',{ipt:arr}).then((res) => {
        if(res['status']){
          arr.forEach((item) => {
            this.dataset.forEach((res,idx) => {
              if(item==res.orderID){
                this.dataset.splice(idx,1);
              }
            })
          })

          this.taslkshow=true;
          this.taslk="删除成功！"
          setTimeout(() => {
            this.taslkshow=false;
          },2000)
        }
      })
    }
  }
}
