import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from '../model/post';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  headers;
  posts :Post[]=[];
  private postUpdated=new Subject<Post[]>()
  getPostsUrl:string='http://localhost:3000/posts/all';
  constructor(private http:HttpClient) { }
  public getPosts():Observable<HttpResponse<Post[]>>{
   return this.http.get<Post[]>(this.getPostsUrl,{ observe: 'response' });
  }


  public getReadyPosts():Observable<Post[]>{
    this.http.get<Post[]>(this.getPostsUrl,{ observe: 'response' })
   .subscribe(resp =>{
    // display its headers
    const keys = resp.headers.keys();
    this.headers = keys.map(key =>
      `${key}: ${resp.headers.get(key)}`);
    // access the body directly, which is typed as `Config`.
    this.posts = resp.body ;
    this.postUpdated.next(this.posts)

  });
  return this.postUpdated.asObservable()
  }
  addPost(title:string,content:string){
    let post =new Post(title,content,this.formatPostDate());
    post.setPostDate(this.formatPostDate())
    this.posts.push(post);
    //emit the postUpdated whean it is available
    this.postUpdated.next(this.posts)
  }
  formatPostDate():string{
    const nowDate=new Date()
     let stringDate =nowDate.toISOString();
     stringDate=stringDate.slice(0,15);
     let arryDS=stringDate.split("T");
     let hours=nowDate.getHours();
     let minuts=nowDate.getMinutes();
     let hoursS=hours>12?hours.toString():`0${hours}`
     let minutsS=minuts<10?`0${minuts}`:minuts.toString()
    return `${arryDS[0]}\u00A0\u00A0\u00A0\u00A0   ${hoursS}:${minutsS} `
  }
  getPostUpdateListner():Observable<Post[]>{
    return this.postUpdated.asObservable()
  }
}
