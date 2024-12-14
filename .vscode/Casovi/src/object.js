console.log("=======Literal Notation=====")

let hotel = {
    name:"Hotel",
    numberOfRooms: 50,
    hasGym: false ,
    roomTypes:["singel", "double", "suite"],
    printRoomTypes: function() {
        console.log("Type of rooms : single,double,suite");
        
        }
    };
    console.log(hotel);

    console.log(hotel.name);
    hotel.printRoomTypes();

    hotel.numberOfBookedRooms = 7;
    console.log(hotel);
    hotel.canDoExercise = function(){
        return false;
    }
    console.log(hotel);
    
    hotel.numberOfRooms = 45;
    console.log(`Number of rooms : ${hotel.numberOfRooms} `);

    console.log(`has property numOfBookedRooms; ${hotel.hasOwnProperty("numOfBookedRooms")}`);
    delete hotel.numberOfBookedRooms;

    console.log(this);
    


