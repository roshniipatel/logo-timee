class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  createText() {
    return `<text font-weight="bold" x="100" y="100" font-size="70" text-anchor="middle" dominant-baseline="central" font-family="monospace" fill="${this.textColor}">${this.text}</text>`
  }

};

// circle class
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  createShape() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`;
  }
};

// square class
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  createShape() {
    return `<rect x="50" height="200" width="200"  fill="${this.shapeColor}"/>`;
  }
};

// triangle class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  createShape() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`;
  }
};

module.exports = { Circle, Square, Triangle };