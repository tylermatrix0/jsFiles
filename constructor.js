//Essential Design Pattern Book
// Dot syntax


//Set properties
newObject.someKey = "Hello World";

// Get properties
var value = newObject.someKey;

//2. Square bracket syntax

//Get properties
newObject["someKey"] = "Hello World";

//Get Properties
var value = newObject["someKey"];

//3. Object.defineProperty
Object.defineProperty( newObject, "someKey", {
	value: "for more control of the property;s behavior",
	writable: true,
	enumerable: true,
	configurable: true
});

//Shorthand

var defineProp = function ( obj, key, config ){
	var config = {
		value: value,
		writable: true, 
		enumerable: true,
		configurable: true
	};
	Object.defineProperty(obj key, config );
};

//To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );

//Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hadBeard", false );

console.log(person);
//Outputs: object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

//4. Object.defineProperties

//Set properties
Object.defineProperties( newObject, {

	"someKey": {
		value: "Hello World",
		writable: true
	},
	"anotherKey": {
		value: "Foo bar",
		writable: false
	}
	
});

//Getting properties for 3 and 4 can be done using any of the options in 1 and 2.






// usage

// create a race car driver that inherits from the person object
var driver = Object.create( person );

//Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

//Get an inherited property (1981)
console.log( driver.dateOfBirth );

//Get the property we set (100mph)
console.log( driver.topSpeed );



----------------------------------------------------------

function Car( model, year, miles ) {

	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = funciton () {
		return this.model + " has done " + this.miles + " miles";
	};
}

// Usage

// we can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// and then open our browser console to view the 
//output of the toString() method being called on these objects
console.log( civic.toString() );
console.log( mondel.toString() );

//This makes inheritance difficult.



----------
//Constructor with Prototypes
function Car( model, year, miles ) {
	this.model = model;
	this.year = year;
	this.miles = miles;

}


//Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redifining the prototype object
Car.prototype.toString = function () {
	return this.model + " has done " + this.miles + " miles";
};

//Usage:
 var civic = new Car( "Honda Civic", 2009, 20000 );
 var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

 console.log( civic.toString() );
 console.log( mondeo.toString() );



 --------------------------------------------
 //Module Pattern
 var myObjectLiteral = {
 
    variableKey: variableValue,
 
    functionKey: function () {
      
    }
};



var myModule = {
 
  myProperty: "someValue",
 
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },
 
  // override the current configuration
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};
 
// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();
 
// Outputs: Caching is: enabled
myModule.reportMyConfig();
 
// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
 
// Outputs: Caching is: disabled
myModule.reportMyConfig();