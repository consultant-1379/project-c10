package com.example.Team5.CloudMatrixTool.model;


public class UserStages {

    private String email;
    private String firstName;
    private String lastName;
    private String companyName;
    private String result;
    private Integer culture;
    private Integer service;
    private Integer team;
    private Integer process;
    private Integer architecture;
    private Integer maintenance;
    private Integer delivery;
    private Integer provisioning;
    private Integer infrastructure;

    public UserStages(String email, String firstName, String lastName, String companyName, String result,
                      Integer culture, Integer service, Integer team, Integer process, Integer architecture,
                      Integer maintenance, Integer delivery, Integer provisioning, Integer infrastructure){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.result = result;
        this.culture = culture;
        this.service = service;
        this.team = team;
        this.process = process;
        this.architecture = architecture;
        this.maintenance = maintenance;
        this.delivery = delivery;
        this.provisioning = provisioning;
        this.infrastructure = infrastructure;
    }


    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public String getResult() {
        return result;
    }

    public Integer getCulture() {
        return culture;
    }

    public Integer getService() {
        return service;
    }

    public Integer getTeam() {
        return team;
    }

    public Integer getProcess() {
        return process;
    }

    public Integer getArchitecture() {
        return architecture;
    }

    public Integer getMaintenance() {
        return maintenance;
    }

    public Integer getDelivery() {
        return delivery;
    }

    public Integer getProvisioning() {
        return provisioning;
    }

    public Integer getInfrastructure() { return infrastructure; }
}
