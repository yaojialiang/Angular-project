import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

      popupshow:Boolean = false;
      dataset:Array<any> = [];
      columns:Array<any> = [];
      buttonnum:number;
      currentPage:number = 1;
      totalPage:number;
      rows:number = 6;
      sHtml:Array<any>;
      currentgoods:Object;
    constructor(private http: Http ) { }

    ngOnInit() {

        this.http.get('http://localhost:8080/user?page=1&pageItems='+this.rows).subscribe((res) => { 
          //this.http.get('http://localhost:8080/pagegoods?page=1&pageItems='+this.rows).subscribe((res) => {
              console.log(res.json());//res是字符串所以要把它转换成对象
              this.dataset = res.json().data;
              this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
              this.createPages();
              console.log(this.dataset)
              //console.log(document.getElementsByClassName('pages'))
              //document.getElementsByClassName('pages')[0].style.backgroundColor='grey';
          });
          //this.http.get('http://localhost:4200/assets/config/student.txt').subscribe((res)=>{
          //    console.log(res)
              
          //})
          this.http.get('http://localhost:4200/assets/config/users.txt').toPromise().then(response => {
              
              this.columns = response.json().cols.split(',');
          }).catch((error) => {
              
              return Promise.reject(error);
          });  
    }

      //创造分页结构
      createPages() {
              this.sHtml = [];
              var i = 1;
              var hoverClass = '';
              var omissionPage = 5; //多少页后开始引入省略号
              var isHasOmisstion = true;
              var pages = this.totalPage;

              for(;i<=pages;i++){
                  

                  if(i <= omissionPage || i == this.currentPage || i > pages - omissionPage){
                      this.sHtml.push(i) ;

                  }else if(i > omissionPage && i <= pages - omissionPage){

                      //加入省略号
                      if(isHasOmisstion){
                          this.sHtml.push(' ...');
                          isHasOmisstion = false;
                      };

                  };
              };
      };

      //翻页
      turnpage(e,page){
          
         // for(var i=0;i<e.target.parentNode.parentNode.children.length;i++){

             // e.target.parentNode.parentNode.children[i].children[0].style.backgroundColor='#fff';
          //}
          //e.target.style.backgroundColor='grey';
          this.currentPage=page*1;
          this.http.get('http://localhost:8080/user?page='+this.currentPage+'&pageItems='+this.rows).subscribe((res) => {
              this.dataset = res.json().data;
              this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
              this.createPages();

          });
      }
      //向前翻页
      turnfoward(e){
          if(this.currentPage*1>1){
              this.currentPage=this.currentPage*1-1;
              this.http.get('http://localhost:8080/user?page='+this.currentPage+'&pageItems='+this.rows).subscribe((res) => {
                  this.dataset = res.json().data;
                  this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
                  this.createPages();

              });
          }
          
      }
      //向后翻页
      turnback(e){
          if(this.currentPage*1<this.totalPage){
              this.currentPage=this.currentPage*1+1;
              this.http.get('http://localhost:8080/user?page='+this.currentPage+'&pageItems='+this.rows).subscribe((res) => {
                  this.dataset = res.json().data;
                  this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
                  this.createPages();

              });
          }
          
      }
      //弹窗show
      showpop(e){
          var id = e.target.parentNode.parentNode.children[0].innerHTML;
          this.http.get('http://localhost:8080/suser?id='+id).subscribe((res)=>{
              console.log(res.json().data[0])
              this.currentgoods = res.json().data[0];
              this.popupshow = true;
          })
          
          //this.http.get('http://localhost:8080/pagegoods?page='+this.currentPage+'&pageItems='+this.rows).subscribe((res) => {
          //    this.dataset = res.json().data;
          //    this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
          //    this.createPages();

          //});
          

      }

      //更行列表
      updatelist(){
          this.http.get('http://localhost:8080/user?page='+this.currentPage+'&pageItems='+this.rows).subscribe((res) => {
              this.dataset = res.json().data;
              this.totalPage = Math.ceil(res.json().rowsCount/this.rows);
              this.createPages();

          });
      }
      //删除商品
      delgoods(e){
          var id = e.target.parentNode.parentNode.children[0].innerHTML;
          this.http.get('http://localhost:8080/delgoods?id='+id).subscribe((res) => {
              this.updatelist();

          });
      }
      //创造一个函数，让子组件调用这个函数并改变弹窗
      parentEvent(arg:number){//定义形参用于接收子组件的参数
          
          this.popupshow = false;
      }
      getKeys(item){
         return item ? Object.keys(item) : [];
      }

}
