import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _web:UserService) { }
  @Output() sendtoParent = new EventEmitter()

  allwebsites:any=[]



  ngOnInit(): void {
    this._web.webAdded.subscribe(res=>{
      console.log("user added from parent");
      this.getlatestUsers()
    })
    this.getlatestUsers()
  }

  getlatestUsers(){
    this._web.getLatestWeb().subscribe(res=>{
      console.log(res);
      this.allwebsites=res
    })
  }

  editUser(web){
    console.log(web);
    this.sendtoParent.emit(web)


  }
  deleteUser(web){
 this._web.deleteWeb(web).subscribe(res=>{
  this.getlatestUsers()
 })

  }

  visit(web){
    console.log(web);



  }
}
