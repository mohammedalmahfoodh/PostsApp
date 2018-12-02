import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 /* posts=[{title:`First Post`,content:`content of first post`}
  ,{title:`Second Post`,content:`content of second post`},
  {title:`Third Post`,content:`content of third post`}]*/
 posts=[]
  constructor() { }

  ngOnInit() {
  }

}
