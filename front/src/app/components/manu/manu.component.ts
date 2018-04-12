import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,} from '@angular/router';
@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
   back(){
    this.router.navigate(['/home/zuixin'])
  }
}
