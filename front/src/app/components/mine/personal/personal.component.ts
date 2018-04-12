import { Component, OnInit } from '@angular/core';
import * as $ 'jquery';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    
    active:boolean = false;
    sex:string='nan'
    constructor() { }

    ngOnInit() {
    }

    photo(){
        $('.mask').css('display','block');
        $('.pop').animate({
            marginTop:'116%';
        },500)
    }
    closshow(event: any){
        event.stopPropagation();
        console.log(event);
        $('.pop').animate({
            marginTop:'216%';
        },500,function(){
            $('.mask').css('display','none');
        })
    }
    nan(){
        this.sex='nan'
        // if(!attr[active1])
        // $('.icon-nan').addClass('active1');
    }
    nv(){
        this.sex='nv'
        // $('.icon-nvfemale128').addClass('active2');
    }
    zhong(){
        this.sex='zhong'
        // $('.icon-zhongxing').addClass('active3');
    }

}
