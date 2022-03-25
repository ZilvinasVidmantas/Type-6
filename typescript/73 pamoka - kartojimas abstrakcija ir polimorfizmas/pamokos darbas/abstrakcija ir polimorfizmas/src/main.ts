import Circle from './circle.js';
import Shape2D from './shape-2d.js';
import Rectangle from './rectangle.js';

const createRandomColor = (): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const shapes: Shape2D[] = [
  new Rectangle({ x: 50, y: 50 }, 500, 200),
  new Rectangle({ x: 600, y: 200 }, 300, 300),
  new Circle({ x: 300, y: 355 }, 40),
  new Circle({ x: 100, y: 355 }, 70),
];

console.log('Figūrų perimetrai');
// 16, 24, 25.13, 37.69
shapes.forEach((shape) => console.log(shape.getPerimeter()));
console.log('Figūrų plotai');
// 16, 36, 50.26, 113,09
shapes.forEach((shape) => console.log(shape.getArea()));

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const context2D = canvas.getContext('2d') as CanvasRenderingContext2D;

context2D.lineWidth = 5;

shapes.forEach((shape) => {
  context2D.strokeStyle = createRandomColor();
  shape.draw(context2D);
});
