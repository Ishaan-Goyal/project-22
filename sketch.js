var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage = loadImage("images/fairyImage1.png","images/fairyImage2.png")
	SOUND = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	


    fairy = createSprite(130,520)
	fairy.addAnimation("fairyFly",fairyImage);
    fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  

  //write code to stop star in the hand of fairy
   if(star.y > 470 && starBody.position.y>490){
	Matter.Body.setStatic(starBody,true); 

}


SOUND.loop();
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if(keyDown("left_arrow")){
		fairy.x = fairy.x-20
	}

	if(keyDown("right_arrow")){
		fairy.x = fairy.x+20
	}

	if (keyWentDown(DOWN_ARROW)) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	//writw code to move fairy left and right
	
}
