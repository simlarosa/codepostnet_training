import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  server = '//localhost:3000/'
  result:any;

  constructor(private _http: HttpClient) {
  }

  public getPosts(): Observable<any> {
    return this._http.get<any>(`${this.server}api/posts`);
  }

}

/*

getPosts(){
  return this._http.get("/api/posts")
  .pipe(map(result => this.result));
}

*/
