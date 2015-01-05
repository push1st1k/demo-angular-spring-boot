package com.altoros.sample.angular.repository;

/**
 * Created by aliaksandr.krasitski on 12/22/2014.
 */
public interface SequenceRepository {
    Long getNextSequenceId(String key);
}
