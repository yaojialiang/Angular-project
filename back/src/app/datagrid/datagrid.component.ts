import { Component, OnInit } from '@angular/core';

// import { HttpclientService} from '../services/httpclient.service'
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
    arg:string='';
    aa='background-color:red';
	getKeys(item){
		return item ? Object.keys(item) : [];
	}	
	constructor() { }

	ngOnInit() {
		// this.http.get('goods').then((res) =>{
		// 	console.log(res);
		// })
	}
    show(){
        this.aa = 'background-color:green'
    }
}
