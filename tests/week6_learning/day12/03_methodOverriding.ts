//Methods overriding --> Methods with similar name in different class
//Parent Class
class BaseClass{
    show(){
        console.log("This show method is from Base class");
        
    }
}

//Child class (extending from base class)
class DerivedClass extends BaseClass{
    show(){
     
        console.log("This show method is from Derived class");   
    }
}

const derObj = new DerivedClass();
derObj.show();
