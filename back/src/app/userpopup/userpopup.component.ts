import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { HttpclientService} from '../services/httpclient.service';
@Component({
  selector: 'app-userpopup',
  templateUrl: './userpopup.component.html',
  styleUrls: ['./userpopup.component.scss']
})
export class UserpopupComponent implements OnInit {

   @Output() aa = new EventEmitter<number>();//获取父组件改变弹窗事件函数，
   @Output() updatelist = new EventEmitter<any>();
   @Input() currentgoods:Object;
   hot:string =  '';
   constructor(private http: HttpclientService) { }

   ngOnInit() {

   }
  
  hiddenpop(n: number){//定义一个函数用于触发父组件的函数，这里aa就是父组件传过来的函数
         this.aa.emit(n);//emit(n)用于触发自定义事件函数
  }

  update(){
     
     
     this.http.get('upuser', 
         {    
             id:(<HTMLInputElement>document.getElementById('goodsId')).value,
             imgs:(<HTMLInputElement>document.getElementById('goodsImgs')).value,
             username:(<HTMLInputElement>document.getElementById('goodsName')).value,
             nickname:(<HTMLInputElement>document.getElementById('goodsNickname')).value,
             password:(<HTMLInputElement>document.getElementById('goodsPassword')).value,
             sex:(<HTMLInputElement>document.getElementById('goodsSex')).value,
         }
     ).then((res) => {
             this.aa.emit();
             this.updatelist.emit();
     })
  }

}
