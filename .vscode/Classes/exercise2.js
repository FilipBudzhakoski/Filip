
function closerTo100(x, y) {
        if (x != y) {
      
      x1 = Math.abs(x - 100);
     
      y1 = Math.abs(y - 100);
     if(x<0 || y<0){
        return "Please insert positiv number"
     }
      if (x1 < y1) {
          return x;
      }
         if (y1 < x1) {
        return y;
      }
        return 0;
    } else {
           return false;
    }
  }
  
  
  console.log(closerTo100(20, 80));
  console.log(closerTo100(-90, -89));
  console.log(closerTo100(90, 90));
  