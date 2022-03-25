import Shape2D from './shape-2d.js';
import Coordinate2D from './coordinate-2d';

class Square extends Shape2D {
  protected points: [Coordinate2D, Coordinate2D, Coordinate2D, Coordinate2D];

  /*
    D              C
      +-----------+
      |           |
      |           |
      |           |
      |           |
      +-----------+
    A               B
  */
  public constructor(A: Coordinate2D, C: Coordinate2D) {
    super();

    const B: Coordinate2D = { x: C.x, y: A.y };
    const D: Coordinate2D = { x: A.x, y: C.y };

    this.points = [A, B, C, D];
  }

  private get edge(): number {
    const [A, B] = this.points;
    const edgeLength = Math.abs(A.x - B.x);

    return edgeLength;
  }

  public getPerimeter = (): number => 4 * this.edge;

  public getArea = (): number => this.edge ** 2;
}

export default Square;
