
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Post } from './model/post';
import { HttpRequestsService } from './services/http-requests.service';


@Injectable({providedIn: 'root'})
 export class PostService implements OnInit {

  headers;
private posts:Post[]=[];
private postUpdated=new Subject<Post[]>()
constructor(private httprequest:  HttpRequestsService){}

ngOnInit() {

  this.httprequest.getPosts().subscribe(resp =>{
    // display its headers
    const keys = resp.headers.keys();
    this.headers = keys.map(key =>
      `${key}: ${resp.headers.get(key)}`);
    // access the body directly, which is typed as `Config`.
    this.posts = resp.body ;
    console.log(resp.body)
  });


}
loadPost(posts:Post[]){
this.posts=posts;

}
addPost(title:string,content:string){
  let post =new Post(title,content,this.formatPostDate());
  post.setPostDate(this.formatPostDate())
  this.posts.push(post);
  //emit the postUpdated whean it is available
  this.postUpdated.next(this.posts)
}

getPostUpdateListner():Observable<Post[]>{

  return this.postUpdated.asObservable()
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
public getPosts():Post[]{
  return this.posts;
}
}
