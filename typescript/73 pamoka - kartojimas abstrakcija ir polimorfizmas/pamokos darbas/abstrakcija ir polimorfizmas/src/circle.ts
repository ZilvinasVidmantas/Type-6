import Shape2D from './shape-2d.js';
import Coordinate2D from './coordinate-2d';

class Circle extends Shape2D {
  protected center: Coordinate2D;

  private radius: number;

  public constructor(center: Coordinate2D, radius: number) {
    super();
    this.center = center;
    this.radius = radius;
  }

  public getPerimeter = (): number => {
    const { radius } = this;

    return 2 * Math.PI * radius;
  };

  public getArea = (): number => {
    const { radius } = this;

    return Math.PI * radius ** 2;
  };

  public draw = (context2D: CanvasRenderingContext2D): void => {
    const { center: { x, y }, radius } = this;
    context2D.beginPath();
    context2D.arc(x, y, radius, 0, 2 * Math.PI);
    context2D.stroke();
  };
}

export default Circle;
