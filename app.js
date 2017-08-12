$(()=>{
  var scene = $(".scene");
  var elements = $(".element");
  var currentMousePositionX=0 ;
  var currentMousePositionY=0 ;

    // set event on mousemove
  scene.on("mousemove" , onMousemove);

  // ------------------functions---------------------

  function onMousemove(event){
    // typeof event.clientX/Y  is number
    currentMousePositionX = event.clientX;
    currentMousePositionY = event.clientY;
  }
  // linear interpolation
  function lerp(oldPosition, newPosition, t){
    return newPosition*t+(1-t)*oldPosition;
  };
  // it ensure that calculation will be done after mouse event end
  function loop(){
    // every element is calculated separately
    $(elements).each((i , elem)=>{
      let orgX = parseInt(elem.dataset.x , 10);
      let orgY = parseInt(elem.dataset.y , 10);

      let dX = currentMousePositionX - orgX;
      let dY = currentMousePositionY - orgY;

      let speed = parseFloat(elem.dataset.speed) ;
      let dX2= dX*speed;
      let dY2= dY*speed;

      let targetX = orgX + dX2;
      let targetY = orgY + dY2;

      let currX = parseInt($(elem).css("left"));
      let currY = parseInt($(elem).css("top"));

      let newX = lerp(currX , targetX , 0.1);
      let newY = lerp(currY , targetY , 0.1);


      $(elem).css("left" , newX+"px");
      $(elem).css("top" , newY+"px");

    });


    requestAnimationFrame(loop);


  }

  loop();





});
