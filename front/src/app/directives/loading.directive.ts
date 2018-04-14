import { Directive ,ElementRef} from '@angular/core';
import * as $ from 'jquery'
@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {

  constructor(el: ElementRef) {
        el.nativeElement.onload=function(){
        	let num:any=Math.random()*2000;
        	setTimeout(() => {
        		let src:string=el.nativeElement.getAttribute('name');
        		el.nativeElement.setAttribute('src',src);
        	},parseInt(num)+500);
        	
        };
    }

}
