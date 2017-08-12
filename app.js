$(()=>{
  var scene = $(".scene");
  var elements = $(".element");

  var elem1 = elements[0];

  // get data from html
  var x = elem1.dataset.x;
  var y = elem1.dataset.y;
  var z = elem1.dataset.z;
  var speed = elem1.dataset.speed;

  // set basic position of elem1
  $(elem1).css("background-color" , "rgb(185, 5, 90)");
  $(elem1).css("left" , x+"px");
  $(elem1).css("top" , y+"px");

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
