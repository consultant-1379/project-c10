package com.example.Team5.CloudMatrixTool;


import com.example.Team5.CloudMatrixTool.model.UserStages;
import com.example.Team5.CloudMatrixTool.model.Users;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CloudMatrixToolApplicationTests {


	private UserStages userStages = new UserStages("ildar@mail.com", "ildar","khat","ericsson","agile",
			40, 40, 35, 25, 10, 30, 35, 30,40);
	private Users user = new Users("ildar@mail","ildar","khat","ericsson","agile");

	@Test
	public void verifyUsersGetters(){
		assertEquals("ildar@mail", user.getEmail());
	}

	@Test
	public void verifyUserStagesGetEmail() {
		assertEquals("ildar@mail.com", userStages.getEmail());
	}

	@Test
	public void verifyUserStagesGetFirstName(){
		assertEquals("ildar", userStages.getFirstName());
	}

	@Test
	public void verifyUserStageGetLastName(){
		assertEquals("khat", userStages.getLastName());
	}

	@Test
	public void verifyUserStageGetCompanyName(){
		assertEquals("ericsson", userStages.getCompanyName());
	}

	@Test
	public void verifyUserStagesGetResult(){
		assertEquals("agile", userStages.getResult());
	}

	@Test
	public void verifyUserStagesGetCulture(){
		assertEquals(new Integer(40), userStages.getCulture());
	}

	@Test
	public void verifyUserStageGetService(){
		assertEquals(new Integer(40), userStages.getService());
	}

	@Test
	public void verifyUserStagesGetTeam(){
		assertEquals(new Integer(35), userStages.getTeam());
	}

	@Test
	public void verifyUserStagesGetProcess(){
		assertEquals(new Integer(25), userStages.getProcess());
	}

	@Test
	public void verifyUserStageGetArchitecture(){
		assertEquals(new Integer(10), userStages.getArchitecture());
	}

	@Test
	public void verifyUserStagesGetMaintenance(){
		assertEquals(new Integer(30), userStages.getMaintenance());
	}

	@Test
	public void verifyUserStagesGetDelivery(){
		assertEquals(new Integer(35), userStages.getDelivery());
	}

	@Test
	public void verifyUserStagesGetProvisioning(){
		assertEquals(new Integer(30), userStages.getProvisioning());
	}

	@Test
	public void verifyUserStagesGetInfrastructure(){
		assertEquals(new Integer(40), userStages.getInfrastructure());
	}
}
