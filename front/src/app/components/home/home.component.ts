import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    home:string='home'
    types:string = 'zuixin'
    timer:any;
    constructor(private route: ActivatedRoute, private router: Router){
        this.timer = setInterval(this.aa,2000);

    }
    aa(){
        $('.lunbo').animate({top:'-0.84rem'}).animate({top:0},0,function(){
            $('.lunbo').find('li:first').remove().appendTo($('.lunbo'));
        })
    }
    gosearch(){
        this.router.navigate(['/gamesearch']);
    }
    ngOnInit() {
        $(document).ready(function () {
            new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: true,
                speed:1000,
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              })        
        })
    }
    ngOnDestroy(){
        clearInterval(this.timer);
    }

}
