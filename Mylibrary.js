function isTouching(movingobj,fixedobj){
    if (movingobj.x - fixedobj.x < fixedobj.width/2 + movingobj.width/2
      && fixedobj.x - movingobj.x < fixedobj.width/2 + movingobj.width/2
      && movingobj.y - fixedobj.y < fixedobj.height/2 + movingobj.height/2
      && fixedobj.y - movingobj.y < fixedobj.height/2 + movingobj.height/2) {
    return true
  }
  else {
  return false
  }
  }