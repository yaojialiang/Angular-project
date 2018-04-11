import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent implements OnInit {
	car:string='car'
    show:boolean=true;
    show1:boolean=false;
    dataset: Array<any>;
    ipt: Array<any>;
	constructor(private http : Http,private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
        this.http.get('http://localhost:8080/goods?page=1&pageitems=1').subscribe((res)=>{
            this.dataset = res.json().data;
            console.log(this.dataset);
        })
        this.route.params.subscribe((id) => {
            console.log(id);
        });
	}

  bianji($event:any){
    $event.target.style.display="none"
    $event.target.nextSibling.style.display="block"
    this.show1=true;
    this.show=false;
  }
  wancheng($event:any){
    $event.target.previousSibling.style.display="block"
    $event.target.style.display="none"
    this.show = true;
    this.show1=false;
  }
}
