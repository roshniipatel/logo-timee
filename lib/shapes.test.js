// exporting from the shapes.js file
const { Circle, Square, Triangle } = require('./shapes');


// testing for circle
describe('Circle', () => {
  test("should give us a circle svg", () => {
    const svg = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="orange" />`
    const circle = new Circle("", "", "orange")
    const result = circle.createShape()

    expect(result).toEqual(svg)
  })
})

// testing for square
describe('Square', () => {
  test("should give us a square svg", () => {
    const svg = `<rect x="50" height="200" width="200" fill="orange" />`
    const square = new Square("", "", "orange")
    const result = square.createShape()

    expect(result).toEqual(svg)
  })
})

// testing for triangle
describe('Triangle', () => {
  test("should give us a triangle svg", () => {
    const svg = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="orange" />`
    const triangle = new Triangle("", "", "orange")
    const result = triangle.createShape()

    expect(result).toEqual(svg)
  })
})