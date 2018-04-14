import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-car',
  templateUrl: './spinner-car.component.html',
  styleUrls: ['./spinner-car.component.scss']
})
export class SpinnerCarComponent implements OnInit {
	@Input() taslk: string;
	constructor() { }

	ngOnInit() {
		console.log(this.taslk)
	}

}
