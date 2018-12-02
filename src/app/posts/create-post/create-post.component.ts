import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  enteredValue=''
   newPost=`No content`;
  constructor() {}
// tslint:disable-next-line:one-line
onAddPost(){
this.newPost=this.enteredValue;
}
  ngOnInit() {}
}
