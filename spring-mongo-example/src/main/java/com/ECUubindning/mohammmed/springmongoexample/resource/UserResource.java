package com.ECUubindning.mohammmed.springmongoexample.resource;

import com.ECUubindning.mohammmed.springmongoexample.document.Post;
import com.ECUubindning.mohammmed.springmongoexample.document.User;
import com.ECUubindning.mohammmed.springmongoexample.repository.PostRipository;
import com.ECUubindning.mohammmed.springmongoexample.repository.UserRipository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserResource {

    UserRipository userRipository;
    PostRipository postRipository;

    public UserResource(UserRipository userRipository, PostRipository postRipository) {
        this.userRipository = userRipository;
        this.postRipository = postRipository;
    }

    //**************Get All Users******
    @GetMapping("/all")
    public List<User> getAllUsers() {

        return userRipository.findAll();
    }

    //**************Create User ******
    @PostMapping("/createUser")
    public String createUser(@RequestBody User user) {
        List<User> usersList = new ArrayList<>();
        usersList = userRipository.findAll();
        for (User userInDb : usersList) {
            if (userInDb.getPersonNummer().equals(user.getPersonNummer())) {
                return user.getName() + " is already exists";
            }
        }
        userRipository.save(user);
        return user.getName() + "  added successfully";
    }
    //**************Add post to user ******
    @PostMapping("/addPostToUser")
    public String addPostToUser(@RequestBody Post post) {
        List<User> usersList = new ArrayList<>();
        usersList = userRipository.findAll();
        for (User userInDb : usersList) {

            if (userInDb.getPersonNummer().equals(post.getUserPersNum())) {
                userInDb.addPost(post);
                post.setId();
                userRipository.save(userInDb);
                postRipository.save(post);
                return userInDb.getName() + " added post: "+post.getTitle();
            }
        }

        return "user with "+post.getUserPersNum()+ " not exists please create user profile";
    }


}
