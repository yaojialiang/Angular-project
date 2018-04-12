import { Component, OnInit } from '@angular/core';
import {SpringService} from './services/spring.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private spinner:SpringService) { }
  title = 'app';
  ngOnInit() {
  }
}
