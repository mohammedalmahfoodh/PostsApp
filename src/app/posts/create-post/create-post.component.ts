import { PostService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public postService:PostService) {}
// tslint:disable-next-line:one-line
onAddPost(postForm:NgForm){
  if(postForm.invalid){
    return;
  }
   console.log(postForm.controls["content"])
 this.postService.addPost(postForm.value.title,postForm.value.content);
 postForm.resetForm();

}

  ngOnInit() {}
}
