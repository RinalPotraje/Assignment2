let person={
    name:"John",
    age:"30",
    city:"New York"

};

delete person["age"];
person.job="Engineer";
person.city="San Francisco";

console.log(person.name +"\n"+ person.age +"\n"+ person.city +"\n"+ person.job);


