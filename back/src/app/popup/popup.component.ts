import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { HttpclientService} from '../services/httpclient.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
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
        
        
        this.http.get('upgoods', 
            {
                cover:(<HTMLInputElement>document.getElementById('goodsCover')).value,
                detsale:(<HTMLInputElement>document.getElementById('goodsDetsale')).value,
                hot:(<HTMLInputElement>document.getElementById('goodsHot')).value,
                id:(<HTMLInputElement>document.getElementById('goodsId')).value,
                imgs:(<HTMLInputElement>document.getElementById('goodsImgs')).value,
                imgtxt:(<HTMLInputElement>document.getElementById('goodsImgtxt')).value,
                label:(<HTMLInputElement>document.getElementById('goodsLabel')).value,
                name:(<HTMLInputElement>document.getElementById('goodsName')).value,
                new:(<HTMLInputElement>document.getElementById('goodsNew')).value,
                nickname:(<HTMLInputElement>document.getElementById('goodsNickname')).value,
                price:(<HTMLInputElement>document.getElementById('goodsPrice')).value,
                saledate:(<HTMLInputElement>document.getElementById('goodsSaledate')).value,
                toconfig:(<HTMLInputElement>document.getElementById('goodsToconfig')).value,
            }
        ).then((res) => {
                this.aa.emit();
                this.updatelist.emit();
        })
     }
  
}
