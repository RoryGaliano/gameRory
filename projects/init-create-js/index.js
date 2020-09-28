/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  
  const
    canvas = document.getElementById('canvas'),
    stage = new createjs.Stage(canvas);
  
  // TODO 6: Set the framerate of the Ticker
  
  createjs.Ticker.framerate = 60;
  

  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //
  const
    radius = 25,
    bg = new createjs.Shape(),
    circle1 = new createjs.Shape();
    circle2 = new createjs.Shape();
    circle3 = new createjs.Shape();
    
  // CREATE A BACKGROUND //
  bg.graphics.beginFill('#CCC').drawRect(0, 0, canvas.width, canvas.height);
    
  // CREATE A CIRCLE //
  circle1.graphics.beginFill('blue').drawCircle(0, 0, radius);
  circle1.x = canvas.width / 2;
  circle1.y = canvas.height / 2;

  circle2.graphics.beginFill('red').drawCircle(0, 0, radius);
  circle2.x = canvas.width / 4;
  circle2.y = canvas.height / 4;

  circle3.graphics.beginFill('green').drawCircle(0, 0, radius);
  circle3.x = canvas.width / 4 * 3;
  circle3.y = canvas.height / 4 * 3;

  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(bg, circle1, circle2, circle3);


  // TODO 8: Listen to the 'tick' event  //
  let tickerHandler = createjs.Ticker.on('tick', onTick);
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
      update(event)
  }
  

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event) {
      stage.update();
  }
  

}(window, window.createjs));
