//Create variables here
var food=0
function preload()
{
	//load images here
  dogSad=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 600);
  
  database=firebase.database()

    database.ref("food").on("value",readPosition)

    milk1= new Food()

    dog=createSprite(700,400,50,50)
     dog.addImage(dogSad)
     dog.scale=0.2
  
}


function draw() {  
  background("green")
  drawSprites();
  //add styles here
 
  if(food===0){
    dog.addImage(dogHappy)
    dog.scale=0.2
  }

  milk1.buttons()
  milk1.milkImg()
  
}

function readPosition(data){

  food=data.val()
}

function writeStock(data){

  database.ref("/").set({
    food:data
  })
}

