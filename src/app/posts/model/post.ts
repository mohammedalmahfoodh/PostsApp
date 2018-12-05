export  class Post{
    id:any;
     title:string;
      content:string;
      postDate:string;
      userPersNum:string;
      constructor(title:string,content:string,userPersNum:string){}
      public setPostDate(postDate:string){
        this.postDate=postDate;
      }
}
