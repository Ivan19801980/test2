let img; // Declare variable 'img'.
let img2;
// first counter i1
let i =1;
let i2=0;
let j0=0;

let t0=0;
/////
let t =1;
let t1 =30,t2 =60;
let song1;
let song2;
//// facteurs of correction for the image streche cor1 & x0,y0 positions.
let x0=-100;
let y0=-100;
let cor1=1.05;


function setup() {
   
      createCanvas(windowWidth, windowHeight);
      frameRate(24); 
  }

function start_(ts){
    if (t0==0){t0=ts;}
}

function steps_(){

    i=i+1;
    i2=i2+1;
if(i2>255){i2=0;j0=j0+1;}


  // affichage de compteur haut a gauche de l'écran

    t=i/24+t0;
  fill(50, 50, 50);
  textSize(60);
  text(img10.height, 0, 100);
  textSize(70);
  text(int(t), 0, 50);
}



