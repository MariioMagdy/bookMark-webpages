import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  webAdded= new Subject();

  createUser(obj):Observable<any>{
    console.log(obj);
    return this._http.post("http://localhost:3000/websites",obj)
  }
  updateWeb(web){
    return this._http.put("http://localhost:3000/websites/" + web.id,web)
  }
  getLatestWeb(){
    return this._http.get("http://localhost:3000/websites")
  }
  deleteWeb(web){
    return this._http.delete("http://localhost:3000/websites/" + web.id)
  }
  informChild(){
    this.webAdded.next()
  }
}
