import Shape2D from './shape-2d.js';
import Coordinate2D from './coordinate-2d';

class Rectangle extends Shape2D {
  private height: number;

  private width: number;

  protected points: [Coordinate2D, Coordinate2D, Coordinate2D, Coordinate2D];

  /*
    D                         C
      +---------------------+
      |                     |
      |                     |
      |                     |
      |                     |
      +---------------------+
    A                        B
  */
  public constructor(A: Coordinate2D, width: number, height: number) {
    super();

    this.width = width;
    this.height = height;

    const B: Coordinate2D = { x: A.x + width, y: A.y };
    const C: Coordinate2D = { x: A.x + width, y: A.y + height };
    const D: Coordinate2D = { x: A.x, y: A.y + height };

    this.points = [A, B, C, D];
  }

  public getPerimeter = (): number => 2 * this.height + 2 * this.width;

  public getArea = (): number => this.width * this.height;

  // eslint-disable-next-line class-methods-use-this
  public draw = (context2D: CanvasRenderingContext2D): void => {
    const { width, height } = this;
    const [{ x, y }] = this.points;
    context2D.beginPath();
    context2D.rect(x, y, width, height);
    context2D.stroke();
  };
}

export default Rectangle;
