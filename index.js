// write a program to output you name 

console.log("My name is Rolins")

console.log("Lets Start")
var Rolins = {
  name: "rolins", 
  score : 4
}
highscores =[Rolins]

const { removeAllListeners } = require("process")
var readlineSync = require("readline-sync")

var answer = readlineSync.question("What is your name ?")

console.log("Hello "+answer)

//expt 5  and expt 6 
var age = readlineSync.question("What is your age ? ")

var score = 0

if(age >=25)
{
  console.log("Right Answer")
  score = score + 1
}
else
{
  console.log("Wrong Answer ")
  score = score - 1
}

console.log("The score is " +score)


var hometown = readlineSync.question("Do you live in Goa ? ")

if(hometown == 'Yes')
{
  console.log("Nice you stay in Goa ")
  score = score +1
}
else
{
  console.log("You can always visit ")
}

console.log("The score is " +score)

function add( a,  b)
  {
    return a + b;
  }

console.log("The result of 2 and 3 is " +add(2,3))

//for lop expt 9 

for(var i = 0;i<5;i++)
  {
    console.log("Your name is "+answer + " for the "+ i+1 +" time")
    console.log(i)
  }

var v = readlineSync.question("Enter number of rows ")

for(var i=0;i<=v; i++)
  {

    
    for(var j=0;j<i;j++)
      {
      process.stdout.write("*")
      
      }
    console.log("")
  }


console.log("Break ++++++++++++++++++")

for(var i=0;i < v;i++)
  {
    for (var j=v;j>i;j--)
      {
        process.stdout.write("*")
      }
    console.log("")
  }


// expt 10 

var groceryItems = ["Tea","Soap","Detergent","Milk","Sugar"]

console.log(groceryItems[0] +" First item on the list")

console.log(groceryItems[2] +" Third item on the list")

console.log(groceryItems[4] +" Last item on the list")

for(var i = 0; i < groceryItems.length;i++)
  {
    console.log(groceryItems[i])
  }

var superman ={

  name: "Superman",
  place : "Krypton",
  power : 5000,
  stealth :200,
  costume : "Blue"
  
}

var Spiderman = {

  name : "Spiderman",
  place : "New York",
  power : "2000",
stealth : 800,
    costume:" red"
  
}

console.log(Spiderman.name)

var questionOne = {
  question : "Who is your favourite Superhero ",
  answerr : "Batman"
}
var questionTwo =  {
  question : "Which song is trending",
  answerr : "Memories"
}

var quest = [questionOne,questionTwo]

console.log("Here starts the game ")



  for(var i = 0; i< quest.length;i++)
    {
      
      var ans = readlineSync.question(quest[i].question)

      if(ans === quest[i].answerr)
      {
        score = score + 1
        console.log("Right answer")
      }
      else
      {
        console.log("Wrong Answer")
        
      }
      
    }

console.log("The score is "+score)

if(score >= highscores[0].score)
{
  console.log("You beat the highscore ")
}
else
{
  console.log("You couldn't beat the high score")
}
