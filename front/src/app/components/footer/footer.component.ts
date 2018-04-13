import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() curr:string	
	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		console.log(this.curr);
  }
  	gomin(){
  		if(window.localStorage.getItem('user')){
        this.router.navigate(['/mine']);
  		}else{
  			this.router.navigate(['/login']);
  		}
  	}
}
