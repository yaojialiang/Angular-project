import { Component, OnInit } from '@angular/core';
import { HttpclientService} from '../services/httpclient.service'
@Component({
  selector: 'app-addgoods',
  templateUrl: './addgoods.component.html',
  styleUrls: ['./addgoods.component.scss']
})
export class AddgoodsComponent implements OnInit {
  
  constructor(private http: HttpclientService) { }

  ngOnInit() {
      
  }
  addgoods(){
    if((<HTMLInputElement>document.getElementById('goodsId')).value){
      this.http.get('agoods', 
          {
              id:(<HTMLInputElement>document.getElementById('goodsId')).value,
              imgs:(<HTMLInputElement>document.getElementById('goodsImgs')).value,
              name:(<HTMLInputElement>document.getElementById('goodsName')).value,
              nickname:(<HTMLInputElement>document.getElementById('goodsNickname')).value,
              price:(<HTMLInputElement>document.getElementById('goodsPrice')).value,
              label:(<HTMLInputElement>document.getElementById('goodsLabel')).value,
              imgtxt:(<HTMLInputElement>document.getElementById('goodsImgtxt')).value,
              detsale:(<HTMLInputElement>document.getElementById('goodsDetsale')).value,
              toconfig:(<HTMLInputElement>document.getElementById('goodsToconfig')).value,
              saledate:(<HTMLInputElement>document.getElementById('goodsSaledate')).value,
              hot:(<HTMLInputElement>document.getElementById('goodsHot')).value,
              new:(<HTMLInputElement>document.getElementById('goodsNew')).value,
              cover:(<HTMLInputElement>document.getElementById('goodsCover')).value,          
          }
      ).then((res) => {
              
      })
    }else{
      alert('请填完整信息')
    }
    
  }
}
