/////*************************************************//
function draw() { 
    
clear()  ; background(0, [10])   ;                               
//////************************************************//
/* Commands discription:

1-slid & image
slid(image name,time 1,time 2,position_x0, position_y0)

 image(name,t1,t2,x0,y0)

2 - animation_1 : animation bas vers haut 
animation_1 (image name,time_1,time_2,n_element,position_x0,position_y0,grossissement)

3- animation_2 : animation  haut vers bas
animation_2 (image name,time_1,time_2,n_element,position_x0,position_y0)

4-apparition(time_1,time_2,velocity)

5-diminution(time_1,time_2,velocity)

6- play(song1,time1);

*/


start_(80);

slid(img1,0,20,0,0);
//apparition(0,10,4);
//diminution(18,20,4);




play(song1,80);
slid(img10,80,125,0,0);
slid(img1,80,125,500,0);


animation_1(img10,80,125,3,60,100,5);
animation_2(img10,80,125,1,10 ,0,3);

//apparition(80,85,2);
//diminution(120,125,2);
//slid(img10,90,130);

//background(0, 0,0,255)   ; 

//slid(img9,90,130,0,0);








steps_();

}











//tint(255-(t-50)*40, 255-(t-50)*40);
//if (t==1) {  //song1.play();}