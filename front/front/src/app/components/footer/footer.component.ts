import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() curr:string	
	constructor() { }

	ngOnInit() {
		console.log(this.curr);
  }

}
