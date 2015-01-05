package com.altoros.sample.angular.repository;

import com.altoros.sample.angular.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by aliaksandr.krasitski on 12/20/2014.
 */
public interface UserRepository  extends MongoRepository<User, Long> {

}
