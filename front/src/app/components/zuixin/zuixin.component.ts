import { Component, OnInit ,Input} from '@angular/core';
import { Http } from '@angular/http';
import { Router,ActivatedRoute,} from '@angular/router';
@Component({
  selector: 'app-zuixin',
  templateUrl: './zuixin.component.html',
  styleUrls: ['./zuixin.component.css']
})
export class ZuixinComponent implements OnInit {
<<<<<<< HEAD
    @Input() aa:string
    data:Array<any>
  constructor(private http: Http) { }
=======
    data:Array
    id:number
  constructor(private http: Http, private router: Router,private route: ActivatedRoute) { }
>>>>>>> f81391fce79a7d7402cbbab37b303bb5035d2c13

  ngOnInit() {
     this.http.get('http://10.3.136.33:8080/sgoods?hot=true').subscribe((res) => {
            res=res.json()
<<<<<<< HEAD
            this.data = res['data'];
            console.log(this.data)

=======
            this.data = res.data;
>>>>>>> f81391fce79a7d7402cbbab37b303bb5035d2c13
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
    this.router.navigate(['shoppingcar',this.id]));
  }


}
