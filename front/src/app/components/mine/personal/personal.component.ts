import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpclientService} from '../../../services/httpclient.service'
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    
    active:boolean = false;
    sex:string='nan';
    nickname:string='';
    imgs:string='http://img.duoziwang.com/uploads/c160224/145632J63430-36438.jpg';
    constructor(private http:HttpclientService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.http.get('suser',{username:window.localStorage.getItem('user')}).then((res) => {
            console.log(res);
            this.nickname=res['data'][0].nickname;
            if(res['data'][0].imgs){
                this.imgs=res['data'][0].imgs;
            }
            if(res['data'][0].sex){
                this.sex=res['data'][0].sex;
            }
        })
    }

    photo(){
        $('.mask').css('display','block');
        $('.pop').animate({
            marginTop:'116%'
        },500)
    }
    closshow(event: any){
        event.stopPropagation();
        if(event.target.className=='mask'){
            $('.pop').animate({
                marginTop:'216%'
            },500,function(){
                $('.mask').css('display','none');
            })
        }
        
    }
    nan(){
        this.sex='nan'
    }
    nv(){
        this.sex='nv'
    }
    zhong(){
        this.sex='zhong'
    }
    exit(){
        window.localStorage.setItem('user','');
        window.localStorage.setItem('carlist','');
        this.router.navigate(['/home/zuixin']);
    }
    setpic(event,picele){
        var el=picele
        // this.file = el.files[0];
        var filePath = $(el).val(),         //获取到input的value，里面是文件的路径  
        fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),  
        src = window.URL.createObjectURL(el.files[0]); //转成可以在本地预览的格式  
        // 检查是否是图片  
        if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {  
            alert('上传错误,文件格式必须为：png/jpg/jpeg');  
            return;    
        }  
        
        // $('.tou').find('img').attr('src',src);
        // this.imgs=src;
        this.upload();
    }
    upload(){
        let formData = new FormData(); 
        let ad='';
        let item=$('.pic')[0];
        formData.append(item.name,item.files[0],item.files[0].name);
        $.ajax({
             url: 'http://10.3.136.33:8080/upload',
             type: 'POST',
             cache: false,
             data: formData,
             processData: false,
             contentType: false
         }).done((res) => {
               var params =  'http://10.3.136.33:8080/assets/';
               this.imgs = params +item.files[0].name;
               console.log(this);
            }).fail((res) => {
                console.log('失败');
            }); 

    }
    keep(){
        this.http.get('upuser',{
            username:window.localStorage.getItem('user'),
            imgs:this.imgs,
            nickname:this.nickname,
            sex:this.sex
        }).then((res) => {
            console.log(res);
        })
    }
}
