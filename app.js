$(()=>{
  var scene = $(".scene");
  var elements = $(".element");

  var square1 = elements[0];

  // get data from html
  var x = square1.dataset.x;
  var y = square1.dataset.y;
  var z = square1.dataset.z;
  var speed = square1.dataset.speed;

  // set basic position of square1
  $(square1).css("background-color" , "rgb(185, 5, 90)");
  $(square1).css("left" , x+"px");
  $(square1).css("top" , y+"px");

  // set event on mousemove
  scene.on("mousemove" , onMousemove);

  // ---------------------------------------
  var currentMousePositionX;
  var currentMousePositionY;

  function onMousemove(event){
    currentMousePositionX = event.clientX;
    currentMousePositionY = event.clientY;
  }






});
