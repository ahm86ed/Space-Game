import Matter, { Sleeping } from "matter-js";
import Box from "./components/Box";
import Constants from "./Constants";
import Images from "./Images";


const randomBetween =(min,max) =>{
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = ()=> {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;

  if (events.length) {
    Sleeping.set(entities.Rocket.body, false);
    for (let i = 0; i < events.length; i++) {
   
      if (events[i].type === "move-left") {
        Matter.Body.setVelocity(entities.Rocket.body, { x: -2, y: 0 });
      }
      if (events[i].type === "move-right") {
        Matter.Body.setVelocity(entities.Rocket.body, { x: 2, y: 0 });
      }
    }
  }

  //******************** */
  Matter.Body.setVelocity(entities.c1.body, { x: 0, y: 5 });
  Matter.Body.setVelocity(entities.c2.body, { x: 0, y: 5 });
//********************** */

  Matter.Engine.update(engine, time.delta);

  let x = entities.Planet.body.position.x;
  let y = entities.Planet.body.position.y;

  /*touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
  
    });*/

  Matter.Engine.update(engine, time.delta);

  Sleeping.set(entities.BoundaryB.body,false);
    Matter.Events.on(engine, "collisionStart", (event) => {
      var pairs = event.pairs;
      var objA = pairs[0].bodyA;
      var objB = pairs[0].bodyB;
      var objALabel = pairs[0].bodyA.label;
      var objBLabel = pairs[0].bodyB.label;
      

      if (objALabel === "Planet" && objBLabel === "BoundaryB") {
        Matter.Body.setVelocity(entities.Planet.body, {
          x: 0,
          y: 0,
        });

        if(!objB.isSleeping){
          dispatch({type:"updateScore"});
        }
        Sleeping.set(objB,true);

        Matter.Body.setPosition(entities.Planet.body, {
          x: randomBetween(25,Constants.WINDOW_WIDTH-25),
          y: randomBetween(Constants.WINDOW_HEIGHT/3,Constants.WINDOW_HEIGHT/8),
        });
        
      }

      if (objALabel === "Satellite" && objBLabel === "BoundaryB") {
        Matter.Body.setVelocity(entities.Satellite.body, {
          x: 0,
          y: 0,
        });

        if(!objB.isSleeping){
          dispatch({type:"updateScore"});
        }
        Sleeping.set(objB,true);

        Matter.Body.setPosition(entities.Satellite.body, {
          x: randomBetween(25,Constants.WINDOW_WIDTH-25),
          y: randomBetween(Constants.WINDOW_HEIGHT/3,Constants.WINDOW_HEIGHT/8),
        });
        
      }

      if (objALabel === "Rock" && objBLabel === "BoundaryB") {
        Matter.Body.setVelocity(entities.Rock.body, {
          x: 0,
          y: 0,
        });

        if(!objB.isSleeping){
          dispatch({type:"updateScore"});
        }
        Sleeping.set(objB,true);

        Matter.Body.setPosition(entities.Rock.body, {
          x: randomBetween(25,Constants.WINDOW_WIDTH-25),
          y: randomBetween(Constants.WINDOW_HEIGHT/3,Constants.WINDOW_HEIGHT/8),
        });
        
      }

//************************************************* */

      if (objALabel === "c1" && objBLabel === "BoundaryB") {

        Matter.Body.setPosition(entities.c1.body, {
          x: Constants.SCREEN_WIDTH/1.05,
          y: Constants.SCREEN_HEIGHT/6.5
        });
        
      }

      if (objALabel === "c1" && objBLabel === "Rocket") {

        Matter.Body.setPosition(entities.c1.body, {
          x: Constants.SCREEN_WIDTH/1.05,
          y: Constants.SCREEN_HEIGHT/6.5
        });
        
      }

      if (objALabel === "c1" && objBLabel === "Rock") {

        Matter.Body.setPosition(entities.Rock.body, {
          x:0,
          y: 0,
          });

        Matter.Body.setPosition(entities.c1.body, {
          x: Constants.SCREEN_WIDTH/1.05,
          y: Constants.SCREEN_HEIGHT/6.5
        });
        
      }
      if (objALabel === "c1" && objBLabel === "Planet") {

       Matter.Body.setPosition(entities.Planet.body, {
        x: 0,
        y: 0,
        });

        Matter.Body.setPosition(entities.c1.body, {
          x: Constants.SCREEN_WIDTH/1.05,
          y: Constants.SCREEN_HEIGHT/6.5
        });
        
      }
      if (objALabel === "c1" && objBLabel === "Satellite") {
        Matter.Body.setVelocity(entities.Satellite.body, {
          x: 0,
          y: 0,
          });
        Matter.Body.setPosition(entities.c1.body, {
          x: Constants.SCREEN_WIDTH/1.05,
          y: Constants.SCREEN_HEIGHT/6.5
        });
        
      }
//******************************************** */
if (objALabel === "c2" && objBLabel === "BoundaryB") {

  Matter.Body.setPosition(entities.c2.body, {
    x: Constants.SCREEN_WIDTH/17,
    y: Constants.SCREEN_HEIGHT/6.5
  });
  
}
if (objALabel === "c2" && objBLabel === "Rocket") {

  Matter.Body.setPosition(entities.c2.body, {
    x: Constants.SCREEN_WIDTH/17,
    y: Constants.SCREEN_HEIGHT/6.5
  });
  
}

if (objALabel === "c2" && objBLabel === "Rock") {

  Matter.Body.setPosition(entities.Rock.body, {
    x:0,
    y: 0,
    });

  Matter.Body.setPosition(entities.c2.body, {
    x: Constants.SCREEN_WIDTH/17,
    y: Constants.SCREEN_HEIGHT/6.5
  });
  
}
if (objALabel === "c2" && objBLabel === "Planet") {

 Matter.Body.setPosition(entities.Planet.body, {
  x: 0,
  y: 0,
  });

  Matter.Body.setPosition(entities.c2.body, {
    x: Constants.SCREEN_WIDTH/17,
    y: Constants.SCREEN_HEIGHT/6.5
  });
  
}
if (objALabel === "c2" && objBLabel === "Satellite") {
  Matter.Body.setVelocity(entities.Satellite.body, {
    x: 0,
    y: 0,
    });
  Matter.Body.setPosition(entities.c2.body, {
    x: Constants.SCREEN_WIDTH/17,
    y: Constants.SCREEN_HEIGHT/6.5
  });
  
}
      

//********************************* */

      if (objALabel === "Rocket" && objBLabel === "Planet") {
        entities.Rocket.extraOptions.image = Images.Boom;
        dispatch({type:"gameOver"}) ;
        
      }

      if (objALabel === "Rocket" && objBLabel === "Satellite") {
        entities.Rocket.extraOptions.image = Images.Boom;

        dispatch({type:"gameOver"}) ;
      }

      if (objALabel === "Rocket" && objBLabel === "Rock") {
        entities.Rocket.extraOptions.image = Images.Boom;

       dispatch({type:"gameOver"}) ;
      }

    });


    Matter.Engine.update(engine, time.delta);
  
    

  return entities;
};

export default Physics;
