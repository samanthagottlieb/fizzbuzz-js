describe('fizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })
  
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(9)).toBe(false);
    });
  });

  describe('when playing, play', function() {
    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('given number when a number is not divisible by 3, 5 or 15', function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});