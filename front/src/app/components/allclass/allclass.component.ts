import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,} from '@angular/router';
@Component({
  selector: 'app-allclass',
  templateUrl: './allclass.component.html',
  styleUrls: ['./allclass.component.scss']
})
export class AllclassComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/home/zuixin'])
  }
  tagclick(event: any){
  	if(event.target.tagName.toLowerCase()=='button'){
  		// console.log(event.target.innerText)
      this.router.navigate(['/community/'+event.target.innerText]);
  	}
  }
}
