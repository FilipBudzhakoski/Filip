let firstName: string = "John";
let lastName: string = "Doe";
let middleName: string = "Something";

let age: number = 30;
let price: number = 19.99;
let negativeNumber: number = -5;

let binary: number = 0b1010; // binary representation of 10

// boolean
let isActive: boolean = true;
let isDisabled: boolean = false;

// null and undefined
let emptyValue: null = null; // explicitly set to null  
let notAssigned: undefined = undefined; // explicitly set to undefined
let uninitialized: undefined; // implicitly set to undefined

//js vs ts type
let jsString: string = "Hello"; // JavaScript string
let tsString: string = "Hello"; // TypeScript string
let jsNumber: number = 42; // JavaScript number 
let tsNumber: number = 42; // TypeScript number
let jsBoolean: boolean = true; // JavaScript boolean
let tsBoolean: boolean = true; // TypeScript boolean
let jsArray: any[] = [1, "two", true]; // JavaScript array with mixed types
let tsArray: (number | string | boolean)[] = [1, "two", true]; // TypeScript array with mixed types
let jsObject: { [key: string]: any } = { name: "John", age: 30 }; // JavaScript object with dynamic keys and values
let tsObject: { name: string; age: number } = { name: "John", age: 30 }; // TypeScript object with specific keys and types
let jsFunction: Function = function (x: number, y: number) { return x + y; }; // JavaScript function
let tsFunction: (x: number, y: number) => number = function (x: number, y: number) { return x + y; }; // TypeScript function with specific parameter and return types
let jsAny: any = "Hello"; // JavaScript variable with any type
let tsAny: any = "Hello"; // TypeScript variable with any type
let jsVoid: void = undefined; // JavaScript variable with void type
let tsVoid: void = undefined; // TypeScript variable with void type
let jsNever: never = (() => { throw new Error("This function never returns"); })(); // JavaScript variable with never type
let tsNever: never = (() => { throw new Error("This function never returns"); })(); // TypeScript variable with never type
let jsSymbol: symbol = Symbol("unique"); // JavaScript variable with symbol type
let tsSymbol: symbol = Symbol("unique"); // TypeScript variable with symbol type
let jsBigInt: bigint = BigInt(12345678901234567890); // JavaScript variable with bigint type
let tsBigInt: bigint = BigInt(12345678901234567890); // TypeScript variable with bigint type
let jsObjectLiteral: { [key: string]: any } = { name: "John", age: 30 }; // JavaScript object literal with dynamic keys and values
let tsObjectLiteral: { name: string; age: number } = { name: "John", age: 30 }; // TypeScript object literal with specific keys and types
let jsArrayLiteral: any[] = [1, "two", true]; // JavaScript array literal with mixed types
let tsArrayLiteral: (number | string | boolean)[] = [1, "two", true]; // TypeScript array literal with mixed types
let jsTuple: [number, string] = [1, "two"]; // JavaScript tuple with mixed types
let tsTuple: [number, string] = [1, "two"]; // TypeScript tuple with mixed types
let jsEnum: { [key: string]: number } = { RED: 0, GREEN: 1, BLUE: 2 }; // JavaScript enum-like object
let tsEnum: { RED: number; GREEN: number; BLUE: number } = { RED: 0, GREEN: 1, BLUE: 2 }; // TypeScript enum-like object
let jsFunctionType: (x: number, y: number) => number = function (x: number, y: number) { return x + y; }; // JavaScript function type

//special types
let specialString: string = "Hello, world!"; // string type
let specialNumber: number = 42; // number type
let dateOfBirth: Date = new Date("1990-01-01"); // Date type
let specialArray: number[] = [1, 2, 3]; // array of numbers 
let dateOfBirth any = new Date("1990-01-01"); // Date type