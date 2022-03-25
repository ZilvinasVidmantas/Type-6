import Circle from './circle.js';
import Shape2D from './shape-2d.js';
import Square from './square.js';

const shapes: Shape2D[] = [
  new Square({ x: 0, y: 0 }, { x: 4, y: 4 }),
  new Square({ x: 0, y: 0 }, { x: 6, y: 6 }),
  new Circle({ x: 0, y: 0 }, 4),
  new Circle({ x: -2, y: -2 }, 6),
];

console.log('Figūrų perimetrai');
// 16, 24, 25.13, 37.69
shapes.forEach((shape) => console.log(shape.getPerimeter()));
console.log('Figūrų plotai');
// 16, 36, 50.26, 113,09
shapes.forEach((shape) => console.log(shape.getArea()));
