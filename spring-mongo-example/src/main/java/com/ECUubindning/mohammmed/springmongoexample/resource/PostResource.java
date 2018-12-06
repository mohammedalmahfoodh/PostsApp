package com.ECUubindning.mohammmed.springmongoexample.resource;

import com.ECUubindning.mohammmed.springmongoexample.document.Post;
import com.ECUubindning.mohammmed.springmongoexample.document.User;
import com.ECUubindning.mohammmed.springmongoexample.repository.PostRipository;
import com.ECUubindning.mohammmed.springmongoexample.repository.UserRipository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostResource {

    UserRipository userRipository;
    PostRipository postRipository;

    public PostResource(UserRipository userRipository, PostRipository postRipository) {
        this.userRipository = userRipository;
        this.postRipository = postRipository;
    }

    //**************Get All Users******
    @GetMapping("/all")
    public List<Post> getAllUsers() {

        return postRipository.findAll();
    }


}
