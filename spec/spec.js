var app = require('../app/js/common.js');

describe("app", function() {
	/*first test*/
  it("pow(1,100) = 1", function() {
  	//prepare
  	var result;
  	//act
  	result = app.pow(1,100);
  	//assert
    expect(result).toEqual(1);
  });

	/*second test*/
  it("pow(3,3) = 27", function() {
  	//prepare
  	var result;
  	//act
  	result = app.pow(3,3);
  	//assert
    expect(result).toEqual(27);
  });

	/*second test*/
  it("pow(3,2) = 9", function() {
  	//prepare
  	var result;
  	//act
  	result = app.pow(3,2);
  	//assert
    expect(result).toEqual(9);
  });
});

