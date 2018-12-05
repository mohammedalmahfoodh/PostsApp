import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  getPostsUrl:string='http://localhost:3000/posts/all';
  constructor(private http:HttpClient) { }
  public getPosts():Observable<HttpResponse<Post[]>>{
   return this.http.get<Post[]>(this.getPostsUrl,{ observe: 'response' });
  }

}
