


//scripts.js, Eddie Raskin, 11/8/2019
//
export function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
  debugger;
}
//
Triangle.prototype.isTriangle = function() {
  if ( (this.sideA + this.sideB > this.sideC) && (this.sideA + this.sideC > this.sideB) && (this.sideB + this.sideC > this.sideA) ) {
    console.log("is triangle");
    return true;
  }
  else {
    console.log("is not triangle");
    return false;
  }
};

Triangle.prototype.whichTrinangle = function() {

  if (this.sideA === this.sideB && this.sideA ===this.sideC && this.sideB === this.sideC)
    return "Equilateral";

  else if (this.sideA != this.sideB && this.sideA !=this.sideC && this.sideB != this.sideC)
    return "Scalene";

  else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
    return "Isoceles";
};
