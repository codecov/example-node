describe("simple", function(){
  it("should return true", function(){
    expect(math(1)).to.equal(true);
  });
  it("should return false", function(){
    expect(math(0)).to.equal(false);
  });
});
