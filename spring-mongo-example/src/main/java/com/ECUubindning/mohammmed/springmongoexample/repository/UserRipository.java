package com.ECUubindning.mohammmed.springmongoexample.repository;

import com.ECUubindning.mohammmed.springmongoexample.document.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRipository extends MongoRepository<User,String> {
}
