abstract class Shape2D {
  public abstract getPerimeter(): number;
  public abstract getArea(): number;
  public abstract draw(context2D: CanvasRenderingContext2D): void;
}

export default Shape2D;
