package com.example.Team5.CloudMatrixTool.repository;

import com.example.Team5.CloudMatrixTool.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface UserRepository extends JpaRepository<Users, Integer> {

    @Query(value = "SELECT user_id, architecture, culture, delivery, infrastructure, " +
            "maintenance, process, provisioning, service, team, result, date_added \n" +
            "FROM stages " +
            "JOIN users on users.id = stages.user_id " +
            "WHERE email = ?1", nativeQuery = true)
    List<Map<String, Object>> getUserResults(String email);

    @Query(value = "SELECT * FROM stages " +
            "JOIN users on users.id = stages.user_id " +
            "WHERE user_id = ?1", nativeQuery = true)
    Map<String, Object> getDataById(Integer stageId);


}
