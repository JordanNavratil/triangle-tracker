describe('triangle', function(){
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(3, 3, 10)).to.equal("This is not a triangle.")
  });


it("determines if 3 sides make an equilateral triangle", function() {
  expect(triangle(3, 3, 3)).to.equal("equilateral")
});

it("determines if 3 sides make an isosceles triangle", function() {
   expect(triangle(4, 4, 3)).to.equal("isosceles")
});

it("determines if 3 sides make a scalene triangle", function() {
    expect(triangle(4, 3, 5)).to.equal("scalene")
});
});
