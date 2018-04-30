package org.ayos.event.management.backend.graphql;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    private String id;
    private String firstName;
    private String middleName;
    private String sureName;
    private Date dateOfBirth;
    private String mobilePhone;
    private String landline;
    private UserType userType;

}
