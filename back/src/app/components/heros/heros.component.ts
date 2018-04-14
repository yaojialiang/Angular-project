import { Component, OnInit } from '@angular/core';
import { Hero } from '../../utils/hero'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{
	constructor(private http: Http) {
    } 
	ngOnInit(){

		 this.http.get('http://localhost:8080/goods?page=1&pageitems=10').toPromise().then((response) => {
		 	this.Hero=response.json().data
		 	let num:number=response.json().rowsCount;

		 	console.log(response.json());
		 	this.http.get('http://localhost:4200/assets/config/student.txt').subscribe((res) => {
		 		console.log(res.json());
		 		this.Pages=Math.ceil(num/res.json().pageItems);
		 		this.columns=res.json().cols.split(',')
		 		console.log(this.columns)
		 	})
		 }).catch((error) => {
		 	console.log(error);
		 	return Promise.reject(error);
		 })
	}
	ac(idx){
		this.high=[];
		this.high.push(idx);
		let n:number=idx+1;
		this.http.get('http://localhost:8080/goods?page='+n+'&pageitems=10').toPromise().then((response) => {
			this.Hero=response.json().data
			console.log(response.json());
		}).catch((error) => {
			console.log(error);
			return Promise.reject(error);
		})
	}
	high:Array<any>=[0];
	Hero:Array<any>=null;
	Pages:number;
	Data:string;
	dsColumns: Array<string> = [];
	columns: Array<string> = [];
	filterColumns: Array<string> = [];
	hideColumns: Array<string> = [];
	getData(str){
		this.Data=str;
	}
	getKeys(item){
		return Object.keys(item);
	}

}