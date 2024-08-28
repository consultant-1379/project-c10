package com.example.Team5.CloudMatrixTool.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "email")
    private String email;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "company_name")
    private String companyName;
    @Column(name = "result")
    private String result;

    public Users(String email, String firstName, String lastName, String companyName, String result) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.result = result;
    }

    public Users() {
    }

    public Integer getId() {
        return id;
    }

    public String getEmail(){ return email; }
}