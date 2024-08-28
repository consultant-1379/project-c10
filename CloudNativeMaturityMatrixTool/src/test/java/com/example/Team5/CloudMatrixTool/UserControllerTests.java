package com.example.Team5.CloudMatrixTool;


import com.example.Team5.CloudMatrixTool.model.Stages;
import com.example.Team5.CloudMatrixTool.model.UserStages;
import com.example.Team5.CloudMatrixTool.model.Users;
import com.example.Team5.CloudMatrixTool.repository.StagesRepository;
import com.example.Team5.CloudMatrixTool.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc()
public class UserControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private StagesRepository stagesRepository;

    private Map<String, Object> map = new HashMap<String, Object>();

    @Test
    public void verifyGet_getUser() throws Exception{
        Map<String, Object> map = new HashMap<String, Object>();
        List<Map<String,Object>> result = Arrays.asList(map);
        String email = "ildar.k@lol";

        given(userRepository.getUserResults(email)).willReturn(result);

        mvc.perform(get("/api/results/GetUser").param("email", email)).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)));
    }


    @Test
    public void verifyPost_Persist() throws Exception{
        UserStages userStages = new UserStages("m@m.com", "ildar","khat","eric","agile",
                40, 40, 30, 25, 15, 30, 35, 35,40);

        Users mockUser = mock(Users.class);
        when(userRepository.save(mockUser)).thenReturn(mockUser);
        Stages stages = mock(Stages.class);
        when(stagesRepository.save(stages)).thenReturn(stages);


        given(userRepository.getDataById(mockUser.getId())).willReturn(map);

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE,false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson=ow.writeValueAsString(userStages);

        mvc.perform(post("/api/results/add").contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)).andExpect(status().isOk());


    }

}
