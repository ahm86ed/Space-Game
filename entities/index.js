import Box from "../components/Box";
import { Dimensions } from "react-native";
import Boundary from "../components/Boundary";
import Matter from "matter-js";
import Constants from "../Constants";
import Images from "../Images";
import Circle from "../components/Circle";
import { circle } from "react-native/Libraries/Animated/Easing";

export default (gameWorld) => {

  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.008;


  return {

    physics: { engine, world },

    c1: Circle(world, "",{ x:Constants.WINDOW_WIDTH/1.05, y: Constants.WINDOW_HEIGHT/6.5}, 10, {label:"c1" , image:Images.StarM}),
    c2: Circle(world, "",{ x:Constants.WINDOW_WIDTH/17, y: Constants.WINDOW_HEIGHT/6.5}, 10, {label:"c2" , image:Images.StarM}),

    Rocket: Box(
      world,
      "",
      { x:Constants.WINDOW_WIDTH/2, y: Constants.WINDOW_HEIGHT/1.25 },
      { width: 45, height: 70 },
      { isStatic: false, image: Images.Rocket ,label: "Rocket" }),
  
      
    Planet: Box(
      world,
      "",
      { x:Constants.WINDOW_WIDTH/1.8, y: Constants.WINDOW_HEIGHT/7 },
      { width: 40, height: 40 },
      { isStatic: false,image: Images.planet , label: "Planet" }),
  
  
    Satellite: Box(
      world,
      "",
      { x:Constants.WINDOW_WIDTH/2.5, y: Constants.WINDOW_HEIGHT/4 },
      { width: 40, height: 40 },
      { isStatic: false,image:Images.Sat  , label: "Satellite" }),
  
  
    Rock: Box(
      world,
      "",
      { x:Constants.WINDOW_WIDTH/1.2, y: Constants.WINDOW_HEIGHT/6 },
      { width: 40, height: 40 }, 
      { isStatic: false,image: Images.Rock , label: "Rock" }),

    BoundaryB: Boundary(
      world,
      "orange", 
      { x:Constants.WINDOW_WIDTH/2, y: Constants.WINDOW_HEIGHT/1.12 }, 
      { width:Constants.WINDOW_WIDTH , height: 10 }, 
      { isStatic: true ,label:"BoundaryB" }),
  
  
    BoundaryL: Boundary(
      world,
      "orange", 
      { x:0, y: Constants.SCREEN_WIDTH}, 
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5  }, 
      { isStatic: true, label:"BoundaryL"}),
  
  
    BoundaryR: Boundary(
      world,
      "orange",
      { x:Constants.SCREEN_WIDTH, y:Constants.SCREEN_WIDTH}, 
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 }, 
      { isStatic: true,label:"BoundaryR" }),
  
      
    BoundaryT: Boundary(
      world,
      "orange",
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 20, width: Constants.WINDOW_WIDTH },{label:"BoundaryT"}
    ),

  };
};