package com.ECUubindning.mohammmed.springmongoexample.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.UUID;

@Document(collection = "posts")
public class Post {
    @Id
    private UUID id;
    private String title;
    private String content;
    private String postDate;
    private String userPersNum;

    public Post() {

    }

    public String getUserPersNum() {
        return userPersNum;
    }

    public void setUserPersNum(String userPersNum) {
        this.userPersNum = userPersNum;
    }

    public Post(String postDate) {
        this.postDate=postDate;
    }

    public UUID getId() {
        return id;
    }

    public void setId() {
        id= UUID.randomUUID();
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
