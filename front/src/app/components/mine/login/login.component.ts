import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('http://10.3.136.33:8080/adlgin?username=admin&password=admin').subscribe((res)=>{
            console.log(res);
        })
    }

}
