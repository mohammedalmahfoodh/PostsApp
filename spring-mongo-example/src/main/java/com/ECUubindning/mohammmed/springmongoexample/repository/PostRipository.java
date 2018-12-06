package com.ECUubindning.mohammmed.springmongoexample.repository;

import com.ECUubindning.mohammmed.springmongoexample.document.Post;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRipository extends MongoRepository<Post,Integer> {
}
