import { Post } from './../Post';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
   @Output() postCreated=new EventEmitter<Post>()

   
  constructor() {}
// tslint:disable-next-line:one-line
onAddPost(postForm:NgForm){

 const post:Post={title:postForm.value.title,content:postForm.value.content,date:this.formatPostDate()};
 this.postCreated.emit(post);
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
  ngOnInit() {}
}
