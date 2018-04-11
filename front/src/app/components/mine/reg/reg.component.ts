import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

 
    constructor() { }

    ngOnInit() {
    }

    regstr: boolean=false

    // 获取随机验证码
    getCode(){
        let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let vCode = '';
        for(let i=0;i<4;i++){
            vCode += arr[parseInt(Math.random()*arr.length)];
        }
        $('.code').show().text(vCode);
    }

    //判断密码强度
    onKeyup(){
        if($('#pwd').val().length>5){
            $('.prefun').children()[1].className='k';
        }else{
            $('.prefun').children()[1].className='kiss';
        }

        if($('#pwd').val().length>10){
            $('.prefun').children()[2].className='k';
        }else{
            $('.prefun').children()[2].className='kiss';
        }
        
    }


    getPhone(){
        if(!/^1[34578]\d{9}$/.test($('.ip1').val())){
            console.log($('.ip1').val()));
            // $('.phone').parent('p').css('display','block');
            this.regstr=true;

        }else{
            this.regstr=false;
            // $('.phone').parent('p').css('display','none');
        }
        // let phoneReg = /^1[34578]\d{9}$/g;
        // if($('.ip1').val().length<1){
        //     // alert('手机号码不能为空');
        //     $('.phone').parent('p').css('display','none').text('手机号码不能为空');
        // }
    }


    showPwd(){
        if($('#pwd').attr('type') == 'password'){
            $('#pwd').attr('type','text');
            $('.icon-yanjing').addClass('active');

        }else{
            $('#pwd').attr('type','password');
            $('.icon-yanjing').removeClass('active');
        }
        
    }



}
