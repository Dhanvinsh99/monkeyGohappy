var monkey, monkey_running, jungle_img, jungle, invisible, rockimg, bananaimg;

var foodGroup, rockGroup;

var count = 0;

function preload(){
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png","Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png" );
  jungle_img = loadImage("jungle.jpg");
  
  rockimg = loadImage("stone.png");
  bananaimg = loadImage("banana.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  jungle = createSprite(0, 0, 800, 500);
  jungle.addImage("jungle", jungle_img);
  jungle.velocityX = -3;
  jungle.x = jungle.width/2;
  
  monkey = createSprite(20, 380, 20, 30);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.08;
  
  invisible = createSprite(0,380, 400, 20)
  invisible.visible = false;
  
  foodGroup = createGroup();
  rockGroup = createGroup();
}

function draw() {
  background(220);
  
  if(jungle.x <= 0){
    jungle.x = jungle.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  spawnStones();
  spawnbananas();
  sizeid();
  
  if(monkey.isTouching(foodGroup)){
    count = count + 2;
    foodGroup.destroyEach();
  }
  
  if(monkey.isTouching(rockGroup)){
    monkey.scale = 0.08;
  }
  monkey.collide(invisible); 
  drawSprites();
  stroke("white");
  textSize(17)
  text("score:"+count, 300, 30);
}

function spawnStones(){
  if(frameCount%80===0){
    var rock = createSprite(380, 380, 30, 20);
    rock.addImage("rock", rockimg)
    rock.scale = 0.08
    rock.velocityX = -5;
    rock.lifetime = 140;
    rock.collide(invisible);
    rockGroup.add(rock)
  }
}


function spawnbananas(){
  var rand = random(175, 225);
  if(frameCount%80===0){
    var banana = createSprite(380, 200, 30, 20);
    banana.addImage("rock", bananaimg);
    banana.scale = 0.08
    banana.velocityX = -5;
    banana.lifetime = 140;
    banana.collide(invisible);
    banana.y = rand;
    foodGroup.add(banana);
  }
}
function sizeid(){
  switch(count){
    case 10: monkey.scale = 0.12;
      break;
    
    case 20: monkey.scale = 0.14;
      break;
    
      case 30:monkey.scale = 0.16;
        break;
        
      case 40: monkey.scale = 0.18;
        break;
        
      default : break;
        
  }
}