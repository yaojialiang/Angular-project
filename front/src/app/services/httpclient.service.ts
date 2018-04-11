import { Injectable } from '@angular/core';
import {Http, RequestMethod, RequestOptions} from '@angular/http';
<<<<<<< HEAD
import {SpringService} from './spring.service'

@Injectable()
export class HttpclientService {
	baseurl: string = "http://10.3.136.33:8080/";
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
=======

@Injectable()
export class HttpclientService {
    baseurl: string = "http://10.3.136.33:8080/";
    constructor(private http: Http) { }
    filterurl(url){
        if(url.startsWith('http')){
            return url;
        }
        return this.baseurl + url;
    }
    get(url: string, params?: {}){
        return new Promise((reslove, reject) => {
            params = params || {};
            params["_"] = Math.random();
            this.http.request(this.filterurl(url), new RequestOptions({
                method: RequestMethod.Get,
                search: params
            })).toPromise().then((res) => {
                reslove(res.json());
            }).catch((error) => {
                reject(error);
            })
        })
    }
}
>>>>>>> 30bd8437a2dba6899b148706097a7e6bb9643c7f
