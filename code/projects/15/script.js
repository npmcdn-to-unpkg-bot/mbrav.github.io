var worldMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 3, 3, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 3, 3, 3, 3, 3, 3, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 2, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 2, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var pos;
var dir;
var rot;
var plane;

var walkSpeed;
var rotSpeed;
var lastTime;

function setup() {
  createCanvas(800, 600);
  pos = createVector(10, 10);
  dir = createVector(0, 1);
  plane = createVector(1, 0);
  rot = 0;
  walkSpeed = 0.01;
  rotSpeed = 0.01;
}

function drawMap() {
  background(255);
  for (var i = 0; i < worldMap.length; i++) {
    for (var j = 0; j < worldMap[0].length; j++) {
      if (worldMap[i][j] !== 0) {
        fill(0);
        // strokeWeight(3);
        // stroke(0);
        rect(i * 20, j * 20, 20, 20);
      } else {
        fill(255);
        // stroke(0);
        rect(i * 20, j * 20, 20, 20);
      }
    }
  }

  fill(255, 100, 255);
  ellipse(pos.x * 20, pos.y * 20, 20, 20);
  line(pos.x * 20, pos.y * 20, (pos.x + dir.x) * 20, (pos.y + dir.y) * 20);
}

function updatePlayer(dt) {
  dir.x = cos(rot);
  dir.y = -sin(rot);
  plane.x = sin(rot);
  plane.y = cos(rot);

  if (keyIsDown(LEFT_ARROW)) {
    rot += rotSpeed * dt;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rot -= rotSpeed * dt;
  }
  if (keyIsDown(UP_ARROW)) {
    if (worldMap[floor(pos.x + dir.x * walkSpeed * dt)][floor(pos.y)] === 0) {
      pos.x += dir.x * walkSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y + dir.y * walkSpeed * dt)] === 0) {
      pos.y += dir.y * walkSpeed * dt;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (worldMap[floor(pos.x - dir.x * walkSpeed * dt)][floor(pos.y)] === 0) {
      pos.x -= dir.x * walkSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y - dir.y * walkSpeed * dt)] === 0) {
      pos.y -= dir.y * walkSpeed * dt;
    }
  }
}

function raycast() {
  var rayPos = createVector(0,0);
  var rayDir = createVector(0,0);

  //cast rays
  for (var x = 0; x < width; x++) {
    var cameraX = (2 * x / width) - 1;
    rayPos.set(pos.x, pos.y);
    rayDir.set(dir.x + plane.x * cameraX, dir.y + plane.y * cameraX);

    var mapX = floor(rayPos.x);
    var mapY = floor(rayPos.y);

    var sideDistX;
    var sideDistY;

    var scaleX = 1/rayDir.x;
    var scaleY = 1/rayDir.y;
    var deltaDistX = (createVector(1, rayDir.y * scaleX)).mag();
    var deltaDistY = (createVector(1, rayDir.x * scaleY)).mag();

    var wallDist;

    var stepX;
    var stepY;

    var hit = 0;
    var side = 0;

    if (rayDir.x < 0) {
      stepX = -1;
      sideDistX = (rayPos.x - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX + 1 - rayPos.x) * deltaDistX;
    }

    if (rayDir.y < 0) {
      stepY = -1;
      sideDistY = (rayPos.y - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1 - rayPos.y) * deltaDistY;
    }

    //DDA
    while (hit === 0) {
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = 0;
      } else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = 1;
      }
      if (worldMap[mapX][mapY] > 0) {
        hit = 1;
      }
    }

    //calculate the distance to the wall
    if (side === 0) {
      wallDist = abs((mapX - rayPos.x + (1 - stepX) / 2) / rayDir.x);
    } else {
      wallDist = abs((mapY - rayPos.y + (1 - stepY) / 2) / rayDir.y);
    }

    var lineHeight = abs(height/wallDist);
    lineHeight = min(lineHeight, height);

    if (mapX >= 0 && mapY >= 0) {
      switch (worldMap[mapX][mapY]) {
      case 0:
        break;
      case 1:
        stroke(200, 150, 150);
        break;
      case 2:
        stroke(50, 100, 100);
        break;
      case 3:
        stroke(random(255));
        break;
      }
    }

    if (side == 1) {
      switch (worldMap[mapX][mapY]) {
      case 1:
        stroke(200/2, 150/2, 150/2);
        break;
      case 2:
        stroke(50/2, 100/2, 100/2);
        break;
      case 3:
        stroke(150/2, 75/2, 100/2);
        break;
      }
    }

    var startY = height/2 - lineHeight/2;
    line(x, startY, x, startY + lineHeight);
  }
}

function draw() {
  background(255);
  var dt = millis() - lastTime;
  updatePlayer(dt);
  // drawMap();
  raycast();
  lastTime = millis();
}
