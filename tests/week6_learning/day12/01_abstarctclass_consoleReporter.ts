import { TestReporter } from "./01_abstractclass_testReporter";

//Implementation Class
class consoleReporter extends TestReporter{
    start(): void {
        console.log("Test reporting is started.");
    }
    reportTest(testName: String, result: string): void {
        console.log(`Test : ${testName}, Result :${result}`);
    }
    end(): void {
        console.log("Test reporting is ended.");
    }

}

const reporter = new consoleReporter();
reporter.start();
reporter.reportTest("Login Testcase", "Passed");
reporter.reportTest("Signup Testcase", "Failed");
reporter.end();