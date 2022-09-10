function animation_1 (name,time_1,time_2,n_element,position_x0,position_y0,g) {
    if(t > time_1 && t< time_2)        { 
        // x0   0   100
        // y0   0   100
      let s1= 0; 
      let s2= 0; 
      let s3= 0; 
      if (t== time_1){ s1= random(360);s2= random(360);s3= random(360);}
      let xp = (position_x0*windowWidth/100);
      let yp=windowHeight*(position_y0/100);
  
      if (n_element>0){ image(name,xp-50*cos((i+s1)/80)     , yp-i-200+50*sin(2*(i)/80),name.width/g,name.height /g);}
      if (n_element>1){ image(name,xp-200-150*cos((i+s2)/80), yp-i-100+50*sin((i)/80),name.width/g,name.height /g);}
      if (n_element>2){ image(name,xp-100-100*cos((i+s3)/80), yp-i-150+50*sin(3*(i)/80),name.width/g,name.height /g);}
  
      
  
    }
  }



  function animation_2 (name,time_1,time_2,n_element,position_x0,position_y0,g) {
    if(t > time_1 && t< time_2)        { 
        // x0   0   100
        // y0   0   100
      let s1= 0; 
      let s2= 0; 
      let s3= 0; 
      if (t== time_1){ s1= random(360);s2= random(360);s3= random(360);}
      let xp = (position_x0*windowWidth/100);
      let yp=windowHeight*(position_y0/100);
  
      if (n_element>0){ image(name,xp-50*cos((i+s1)/80)     , yp+i-200+50*sin(2*(i)/80),name.width/g,name.height /g);}
      if (n_element>1){ image(name,xp-200-150*cos((i+s2)/80), yp+i-100+50*sin((i)/80),name.width/g,name.height /g);}
      if (n_element>2){ image(name,xp-100-100*cos((i+s3)/80), yp+i-150+50*sin(3*(i)/80),name.width/g,name.height /g);}
  
      
  
    }
  }




  function diminution(time_1,time_2,velocity){

    if(t==time_1){i2=0}
    if(t > time_1 && t< time_2) {

      background(0, 0,0,i2*velocity)   ;  

    }
    if(t == time_2) {

      background(0, 0,0,0)   ;  

    }

  }


  function apparition(time_1,time_2,velocity){

    if(t==time_1){i2=0}
    if(t > time_1 && t< time_2) {

      background(0, 0,0,255-i2*velocity)   ;  

    }
    if(t == time_2) {

      background(0, 0,0,0)   ;  

    }

  }