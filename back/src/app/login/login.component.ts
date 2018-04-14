import { Component, OnInit  } from '@angular/core';
import { Router} from '@angular/router';

import { HttpclientService} from '../services/httpclient.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';  
  constructor(private httpclientService: HttpclientService,private router: Router) { }

  ngOnInit() {
  }
  login(){
    
    this.httpclientService.get('adlgin', {username:this.username,password:this.password}).then((res:any) => {
            console.log(res)
            if(res.data.length>0){
                window.sessionStorage.setItem('username', this.username);
                this.router.navigate(['index']);
            }else{
                alert('用户信息错误');
            }
            
    })
  }
}
