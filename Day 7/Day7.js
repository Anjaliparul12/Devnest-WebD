// Program 1

var student = {
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 };
 console.log(Object.keys(student));


//  Program 2

var student = {
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 };
 console.log(student);
 delete student.rollno;
 console.log(student);


 //Program 3

 var student = {
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 };
 var count=0;
 for(let item in student){
 count++;
 }
 console.log(count);


//  Program 4

var library = [ 
    { author: 'Bill Gates',title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
    ]; 
    
    for(var i=0;i<library.length;i++)
    {
     var book=library[i].title;
     if(library[i].readingStatus)
     console.log("Read - " + book);
     else
     console.log("Not Read - " + book);
    }

// Program 5

function vol(r,h)
{
return 2*Math.PI*r*h
}
console.log("Volume is - " + vol(7,2).toFixed(4));





