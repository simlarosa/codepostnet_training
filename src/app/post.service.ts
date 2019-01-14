import { Injectable } from '@angular/core';
import { Http } from '@angulare/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  getPosts(){
    return this._http.get("/api/posts")
    .map(result => this.result = result.json());
  }
  
}
