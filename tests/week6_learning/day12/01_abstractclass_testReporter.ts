
export abstract class TestReporter{
    //Without any implementation just add abstract methods

    //Abstract method to start
    abstract start(): void
    //Abstract method to report a test result
    abstract reportTest(testName:String, result: string) : void
    //Abstract metho to end
    abstract end(): void
    
    //Partial abstration can have implementation method as well
    reportStatus() : void{

    }
}