class Food{

 constructor(){
     this.milkImage=loadImage("images/milk.png")
 }



    buttons(){

      this.button1 = createButton("feed the dog")
      this.button1.position(700,80)

     this.button2=createButton("add milk ")
     this.button2.position(800,80)
     
     if(food>0){
     this.button1.mousePressed(()=>{
       food--
       writeStock(food)
     
      })
     }
      
       this.button2.mousePressed(()=>{
          food++
          writeStock(food)
       })


    }


    milkImg(){
      
      var newX=0
     for(var i=0; i< food; i++){
      image(this.milkImage,newX,200,50,50)
       newX=newX+50
     }


    }
}