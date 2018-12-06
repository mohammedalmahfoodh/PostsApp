package com.ECUubindning.mohammmed.springmongoexample.config;

import com.ECUubindning.mohammmed.springmongoexample.repository.UserRipository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = UserRipository.class)
@Configuration
public class MongoDBConfig {

}
