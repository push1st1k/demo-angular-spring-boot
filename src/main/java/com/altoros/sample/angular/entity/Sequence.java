package com.altoros.sample.angular.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by aliaksandr.krasitski on 12/22/2014.
 */
@Document(collection = "counters")
public class Sequence {
    @Id
    private String key;
    private Long seq;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }
}
