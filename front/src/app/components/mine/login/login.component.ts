import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../services/httpclient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

    }

    showPop: boolean = false
    remind:string = '';



    //点击验证登陆
    login(user,psw){
        let username:string=user.value;
        let password:string=psw.value;

        let useLen:number = username.length;
        let pwdLen:number = password.length;
        if(!username || !password){
            this.showPop = true;
            this.remind='用户名或者密码不能为空';
            setTimeout(()=>{
                this.showPop = false;
            },2000)

        }else{
            this.http.get('login',{username,password}).then((res) => {
                // console.log(res.data);
                if(res['data'].length>0){
                    window.localStorage.setItem('user',res['data'][0].username);
                    this.showPop = true;
                    this.remind = '恭喜你，可以愉快的玩游戏了';
                    this.router.navigate(['/home/zuixin']);
                    window.localStorage.setItem('user',username);

                }else{
                    this.showPop = true;
                    this.remind = '您的用户名或密码有问题';
                    //设置延时器取消弹窗
                    setTimeout(()=>{
                        this.showPop = false;
                    },2000)
                }
            })

        }

        
    }


    //显示密码
    showPwd(){
        if($('#psw').attr('type') == 'password'){
            $('#psw').attr('type','text');
            $('.icon-yanjing').addClass('active');
        }else{
            $('#psw').attr('type','password');
            $('.icon-yanjing').removeClass('active');
        }
    }
    close(){
        this.router.navigate(['/home/zuixin']);
    }
}
