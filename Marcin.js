class Vehicle {
    constructor (id) {
        this.id = id;
    }
    getId(){
        return this.id ;
    }
}
const veh1 = new Vehicle(11);

class Car {
    constructor (id, model){
        this.id = id;
        this.model = model;
    }
    getFullName (seperator){
        return this.id + seperator + this.model;
    }
}

const box = new Car (12, 'Opel');
const box1 = new Car( 11, 'fiat');

box1.getFullName("_");

class Car1 extends Vehicle {
    constructor (id, model, year){
        super (id); 
        this.model = model;
        this.year = year;

    }
    getFullName(separator){
        return this.id + separator + this.model;
    }
}

const cat = new Car1 ( 33, 'Polo');

cat.getFullName(",");
cat.getId();

const cat1 = new Car1 ();
cat1.getFullName(",");
cat1.getId();


//////////////react


