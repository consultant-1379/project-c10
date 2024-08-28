package com.example.Team5.CloudMatrixTool.controller;

import com.example.Team5.CloudMatrixTool.model.Stages;
import com.example.Team5.CloudMatrixTool.model.UserStages;
import com.example.Team5.CloudMatrixTool.model.Users;
import com.example.Team5.CloudMatrixTool.repository.StagesRepository;
import com.example.Team5.CloudMatrixTool.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/results")
public class UserController {

    @Autowired
    StagesRepository stagesRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/GetUser")
    public List<Map<String, Object>> getUser(@RequestParam("email") String email) {
        return userRepository.getUserResults(email);
    }

    @PostMapping(value = "/add")
    public Map<String, Object> persist(@RequestBody final UserStages userStages) {
        Users user = new Users(userStages.getEmail(), userStages.getFirstName(),
                userStages.getLastName(), userStages.getCompanyName(), userStages.getResult());
        userRepository.save(user);

        Stages stages = new Stages(user.getId(), userStages.getCulture(), userStages.getService(),
                userStages.getTeam(), userStages.getProcess(), userStages.getArchitecture(),
                userStages.getMaintenance(), userStages.getDelivery(), userStages.getProvisioning(),
                userStages.getInfrastructure(), LocalDateTime.now());
        stagesRepository.save(stages);

        return userRepository.getDataById(user.getId());
    }
}