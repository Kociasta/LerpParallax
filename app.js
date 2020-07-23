// TODO
//   try to distribute dots evenly
//   detect text and place dots on the path (SVG?)


$(()=>{
  const scene = $(".scene");
  let currentMousePosition = {
    x: 657,
    y: 278
  };

  function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
  }

  const height = scene.height();
  const width = scene.width();

  // generate elems
  function generateElems(howManyElems) {
    for(let i = 0; i < howManyElems; i++) {
      const randomX = getRandomInt(0, width);
      const randomY = getRandomInt(0, height);
      const randomZ = getRandomInt(1, 4);
      const randomSpeed = Math.random();
      const newElement = $(`<div class="element" data-x="${randomX}" data-y="${randomY}" data-speed="${randomSpeed}" data-z="${randomZ}"></div>`)
      scene.append(newElement)
    }
  }
  generateElems(150);
  const elements = $(".element");
  // set event on mousemove
  scene.on("mousemove" , onMousemove);

  // ------------------functions---------------------

  function onMousemove(event){
    // typeof event.clientX/Y  is number
    currentMousePosition.x = event.clientX;
    currentMousePosition.y = event.clientY;
    // console.log('currentMousePosition :>> ', currentMousePosition);
  }
  // linear interpolation
  function lerp(oldPosition, newPosition, t){
    return newPosition * t + (1 - t) * oldPosition;
  };
  // it ensure that calculation will be done after mouse event end
  function loop(){
    // every element is calculated separately
    $(elements).each((i , elem)=>{
      // get focal point from index.html (in dataset) , parse it
      let focalPoint = {
        x: parseInt(elem.dataset.x, 10),
        y: parseInt(elem.dataset.y, 10)
      };

      // compute the distance between focal point and mouse pointer
      let displacement = {
        x: currentMousePosition.x - focalPoint.x,
        y: currentMousePosition.y - focalPoint.y
      };

      // need speed as fraction --> parseFloat instead of parseInt
      let powerOfParalax = parseFloat(elem.dataset.speed);
      let maxD = {
        x: displacement.x * powerOfParalax,
        y: displacement.y * powerOfParalax
      };

      // position that element want to obtain
      let target = {
        x: focalPoint.x + maxD.x,
        y: focalPoint.y + maxD.y
      };

      // position of the element NOW
      let currentElementPosition = {
        x: parseInt($(elem).css("left")),
        y: parseInt($(elem).css("top"))
      };

      // "future" new element position (tends to target)
      let newElementPosition = {
        x: lerp(currentElementPosition.x, target.x, 0.1),
        y: lerp(currentElementPosition.y, target.y, 0.1)
      };

      // setting new position to the element
      $(elem).css("left", newElementPosition.x + "px");
      $(elem).css("top", newElementPosition.y + "px");

    });

    requestAnimationFrame(loop);

  }

  loop();





});
