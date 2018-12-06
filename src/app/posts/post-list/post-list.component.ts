
import { PostService } from './../posts.service';

import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../model/post';
import { HttpRequestsService } from '../services/http-requests.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  headers;
private postSubb:Subscription;
 /* posts=[{title:`First Post`,content:`content of first post`}
  ,{title:`Second Post`,content:`content of second post`},
  {title:`Third Post`,content:`content of third post`}]*/
    posts :Post[]=[]
  constructor(public postServices:PostService,public postHttpSercice :HttpRequestsService) {

   }
   edite(){
    console.log(this.postServices.getPosts())
   }
   delete(){

   }
  ngOnInit() {
    this.postHttpSercice.getReadyPosts().subscribe(posts=>this.posts=posts);
    //this.loadPost()
    //this.postServices.loadPost(this.posts);
  }
  ngOnDestroy(): void {
    this.postSubb.unsubscribe();

  }
  loadPost(){
    this.postHttpSercice.getPosts().subscribe(resp =>{
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      // access the body directly, which is typed as `Config`.
      this.posts = resp.body ;

    });

  }
  public loadFromSer(){
    console.log( this.postServices.getPosts()   )
  }
}
