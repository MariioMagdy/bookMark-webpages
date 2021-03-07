import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _web:UserService) { }
  isEdit
  pattern="(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"

  ngOnInit(): void {
  }
  Obj={
    webname:"",
    url:"",
    id:""
  }

  webId = Date.now()
addUser(info){
  console.log(info);
  let user = info.value
  user.id = this.webId


this._web.createUser(info.value).subscribe((res)=>{
  console.log("web added");
  this.webId++

  this._web.informChild()
  info.form.reset()
})


}
recevieUser(web){
  console.log(web);
  this.Obj= Object.assign({},web)
  this.isEdit=true
}

updateUser(info){
  this._web.updateWeb(this.Obj).subscribe(res=>{
    console.log();
    this._web.informChild()
    this.isEdit=false
    info.form.reset()
  })
  console.log(info.value);


}
}
