//inverted Values


function invert(array) {
//    return -array ;
    return array.map( x => x === 0 ? x : -x);
}

describe("Invert array values", function(){
  it("Basic Tests", function(){
    Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    Test.assertDeepEquals(invert([]), []);
    Test.assertDeepEquals(invert([0]), [0]);
  });
});
