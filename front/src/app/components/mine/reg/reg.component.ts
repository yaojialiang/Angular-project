import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; //引入jquery
import { HttpclientService } from '../../../services/httpclient.service'
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

    username: String;
    password: String;

    remind:string = '';
 
    constructor(private http:HttpclientService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }

    regstr: boolean = false

    showPop:boolean = false


    //点击注册
    getReg(username,password){
        // let username:string = username.value;
        // let password:string = password.value;
        this.http.get('suser',{username:this.username}).then((res)=>{
            console.log(res);
            if(res['data'].length>0){
                this.remind = '此手机号太受欢迎了';
                this.showPop = true;
                setTimeout(()=>{
                    this.showPop = false;
                },2000)
            }else{
                if(!username){
                    this.remind = '用户名不能为空';
                    this.showPop = true;
                    setTimeout(()=>{
                        this.showPop = false;
                    },2000)

                }
                else if($('.code').html()!=$('.vCode').val()){
                    this.remind = '验证码输错了哟';
                    this.showPop = true;
                    setTimeout(()=>{
                        this.showPop = false;
                    },2000)
                }
                else if(!password){
                    
                    this.remind = '密码不能为空';
                    this.showPop = true;
                    setTimeout(()=>{
                        this.showPop = false;
                    },2000)
                }
                else{
                    this.http.get('reg',{username:username,password:password}).then((res)=>{
                        console.log(res);
                        if(res['status']==false){ 
                            this.remind = '此手机号太受欢迎了';
                            this.showPop = true;
                            setTimeout(()=>{
                                this.showPop = false;
                            },2000)    
                        }else{
                            this.remind = '注册成功';
                            this.showPop = true;
                            setTimeout(()=>{
                                this.showPop = false;
                                this.router.navigate(['/login']);
                            },2000) 
                        } 
                        
                    })
                }
            }
        })
        
        
    }





    // 获取随机验证码
    getCode(){
        let arr:any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let vCode = '';
        for(let i=0;i<4;i++){
            let num:any=Math.random()*arr.length
            vCode += arr[parseInt(num)];
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

    //用户名失去焦点时触发
    getPhone(){
        if(!/^1[34578]\d{9}$/.test($('.ip1').val())){

            this.showPop = true;
            this.remind = '您输入的手机号格式不正确';

            setTimeout(()=>{
                this.showPop = false;
            },2000)

        }else{
            console.log(this.username);
            this.showPop = false;
            this.http.get('suser',{username:this.username}).then((res)=>{
                console.log(res);
                if(res['data'].length>0){
                    alert('no');
                }
            })

        }
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
