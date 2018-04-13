import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../../services/httpclient.service'
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
	wode:string='wode';
	nickname:string='jfoiewrjef';
	imgs:string='../../../assets/img/head.jpg';
	constructor(private http:HttpclientService) { }

	ngOnInit() {
		this.http.get('suser',{username:window.localStorage.getItem('user')}).then((res) => {
			console.log(res);
			if(res['data'][0].nickname==null||res['data'][0].nickname==''){

			}else{
				this.nickname=res['data'][0].nickname;
			}
			if(res['data'][0].imgs==null){

			}else{
				this.imgs=res['data'][0].imgs;
			}
		})
	}

}
