import { Injectable } from '@angular/core';
import {Http, RequestMethod, RequestOptions} from '@angular/http';
import {SpringService} from './spring.service'

@Injectable()
export class HttpclientService {
	baseurl: string = "http://localhost:8080/";
	constructor(private http: Http,private pinner: SpringService) { }
	
	filterurl(url){
		if(url.startsWith('http')){
			return url;
		}
		return this.baseurl + url;
	}

	get(url: string, params?: {}){
		this.pinner.springshow=true;
		return new Promise((reslove, reject) => {
			params = params || {};
			params["_"] = Math.random();
			this.http.request(this.filterurl(url), new RequestOptions({
				method: RequestMethod.Get,
				search: params
			})).toPromise().then((res) => {
				reslove(res.json());
				this.pinner.springshow=false;
			}).catch((error) => {
				reject(error);
			})
		})
	}
}
