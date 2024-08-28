package com.example.Team5.CloudMatrixTool;

import com.example.Team5.CloudMatrixTool.controller.UserController;
import com.example.Team5.CloudMatrixTool.model.Stages;
import com.example.Team5.CloudMatrixTool.model.UserStages;
import com.example.Team5.CloudMatrixTool.model.Users;
import com.example.Team5.CloudMatrixTool.repository.StagesRepository;
import com.example.Team5.CloudMatrixTool.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.mock;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RepositoriesTests {


    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StagesRepository stagesRepository;

    private UserStages userStages;



    @Before
    public void setUp(){

        userStages = new UserStages("m@m.com", "ildar","khat","eric","agile",
                4, 4, 3, 2, 1, 3, 3, 3,4);

        userController = mock(UserController.class);

    }

    @Test
    public void verifyRepositoriesReturnCorrectSizedStructures() {
        Users user = new Users(userStages.getEmail(), userStages.getFirstName(), userStages.getLastName(), userStages.getCompanyName(), userStages.getResult());
        userRepository.save(user);
        Stages stages = new Stages(user.getId(), userStages.getCulture(), userStages.getService(),
                userStages.getTeam(), userStages.getProcess(), userStages.getArchitecture(),
                userStages.getMaintenance(), userStages.getDelivery(), userStages.getProvisioning(),
                userStages.getInfrastructure(), LocalDateTime.now());
        stagesRepository.save(stages);


        List<Map<String, Object>> result = userRepository.getUserResults(user.getEmail());
        assertEquals(1, result.size());

        Map<String, Object> result1 = userRepository.getDataById(user.getId());
        assertEquals(17, result1.keySet().size());
    }

}

