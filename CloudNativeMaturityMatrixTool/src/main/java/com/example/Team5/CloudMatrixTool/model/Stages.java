package com.example.Team5.CloudMatrixTool.model;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class Stages {

    @Id
    @Column(name = "user_id")
    private Integer userId;
    @Column(name = "culture")
    private Integer culture;
    @Column(name = "service")
    private Integer service;
    @Column(name = "team")
    private Integer team;
    @Column(name = "process")
    private Integer process;
    @Column(name = "architecture")
    private Integer architecture;
    @Column(name = "maintenance")
    private Integer maintenance;
    @Column(name = "delivery")
    private Integer delivery;
    @Column(name = "provisioning")
    private Integer provisioning;
    @Column(name = "infrastructure")
    private Integer infrastructure;
    @Column(name="date_added")
    private LocalDateTime dateAdded;

    public Stages(){}

    public Stages(Integer userId, Integer culture, Integer service, Integer team, Integer process, Integer architecture, Integer maintenance, Integer delivery, Integer provisioning, Integer infrastructure, LocalDateTime dateAdded) {
        this.userId = userId;
        this.culture = culture;
        this.service = service;
        this.team = team;
        this.process = process;
        this.architecture = architecture;
        this.maintenance = maintenance;
        this.delivery = delivery;
        this.provisioning = provisioning;
        this.infrastructure = infrastructure;
        this.dateAdded = dateAdded;

    }

}
