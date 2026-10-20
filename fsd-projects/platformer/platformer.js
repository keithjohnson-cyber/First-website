$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(230,250,200,16,"cyan")
createPlatform(700,250,190,16,"cyan")
createPlatform(350,640,200,16,"cyan")
createPlatform(900,500,200,16,"cyan")
createPlatform(800,550,120,16,"cyan")
createPlatform(1100,400,200,16,"cyan")
createPlatform(1000,300,50,16,"cyan")
createFakePlatform(500,200,200,16,"cyan")
createFakePlatform(1300,640,200,16,"black")
createFakePlatform(1200,680,200,16,"black")



    // TODO 3 - Create Collectables
createCollectable("grace",1200,350,1.0,0.4)
createCollectable("diamond",1300,670,)
createCollectable("diamond",530,100)
createCollectable("diamond",300,200)
createCollectable("diamond", 100,450)


    
    // TODO 4 - Create Cannons
createCannon("right",200,1000)
createCannon("top",1200,2000)
createCannon("bottom",1290,1000)
createCannon("bottom",50,700)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
