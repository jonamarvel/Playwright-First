import { envConstants } from "../constants/envConstants";
import applicationData from "../tests/testdata/appData.json";

type appData = {
    adminUserName:string;
    adminPassword:string;
}
export class FrmaeworkHelper{
//To load the testdata based on which environment

//Whenever we have static method - 
static loadTestData(envName:envConstants): appData{

    return applicationData[envName];//To refer the data from json file, we can also refer like --> applicationData.envName

}
}