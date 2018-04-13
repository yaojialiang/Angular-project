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
    constructor(private route: ActivatedRoute, private router: Router){
        let timer = setInterval(this.aa,2000);
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
        
    }

}
