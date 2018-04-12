import { Component, OnInit .Input} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-zuixin',
  templateUrl: './zuixin.component.html',
  styleUrls: ['./zuixin.component.css']
})
export class ZuixinComponent implements OnInit {
    @Input() aa:string
    data:Array<any>
  constructor(private http: Http) { }

  ngOnInit() {
     this.http.get('http://10.3.136.33:8080/sgoods?new=true').subscribe((res) => {
            res=res.json()
            this.data = res['data'];
            console.log(this.data)

        });
  }


}
