import { Component, OnInit ,Input} from '@angular/core';
import { Http } from '@angular/http';
import { Router,ActivatedRoute,} from '@angular/router';
@Component({
  selector: 'app-zuixin',
  templateUrl: './zuixin.component.html',
  styleUrls: ['./zuixin.component.css']
})
export class ZuixinComponent implements OnInit {
    data:Array<any>;
    id:number;
  constructor(private http: Http, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
     this.http.get('http://10.3.136.33:8080/sgoods?hot=true').subscribe((res) => {
            this.data = res.json().data;
        });
      
  }
  chuanid($event){
    if($event.target.id){
      this.id=$event.target.id;
    }else if($event.target.parentNode.id){
      this.id=$event.target.parentNode.id
    }else if($event.target.parentNode.parentNode.id){
      this.id=$event.target.parentNode.parentNode.id
    }
    this.router.navigate(['details',this.id]);



  }


}
