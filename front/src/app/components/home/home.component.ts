import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    home:string='home'
    types:string = 'zuixin'
    constructor(){}
    aa(){
        
        $('.lunbo').animate({top:'-0.84rem'}).animate({top:0},0,function(){
            $('.lunbo').find('li:first').remove().appendTo($('.lunbo'));
        })
    }
    ngOnInit() {
        
    }
}
