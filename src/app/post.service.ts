import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  result:any;

  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get("/api/posts")
    .pipe(map(result => this.result));
  }

}
