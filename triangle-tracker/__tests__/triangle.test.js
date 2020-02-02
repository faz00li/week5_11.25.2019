import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  var reusableTriangle;

  beforeEach( () => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('should show how reusableTriangle works', () => {
    console.log(reusableTriangle);
  });

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.sideA).toEqual(2);
    expect(triangle.sideB).toEqual(4);
    expect(triangle.sideC).toEqual(5);
  });

  test('should correctly detemine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle (3,9,22);
    expect(notTriangle.isTriangle()).toEqual(false);
  });

  test('should correctly determine wheter three lenths are a triangle', () => {
    var triangle = new Triangle (10,11,20);
    expect(triangle.isTriangle()).toEqual(true);
  });

  test('should correctly identify which type of triangle... scalene', () => {
    var triangle = new Triangle(2,3,4);
    expect(triangle.whichTrinangle()).toEqual('Scalene');
  });

  test('should correctly identify which type of triangle... isoceles', () => {
    var triangle = new Triangle(8,8,15);
    expect(triangle.whichTrinangle()).toEqual('Isoceles');
  });

  test('should correctly identify which type of triangle... equilateral', () => {

    expect(reusableTriangle.whichTrinangle()).toEqual('Equilateral');
  });



});
