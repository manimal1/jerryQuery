describe('Fibonacci calculator', function() {
    var fibonacciCalculator;
    var song;

    beforeEach(function() {
      fibonacciCalculator = new Fibonacci();
    });

    it('should cover small numbers', function() {
      expect(fibonacciCalculator.compute(0)).toBe(1);
      expect(fibonacciCalculator.compute(1)).toBe(1);
    });

    it('should cover bigger numbers', function() {
      expect(fibonacciCalculator.compute(27)).toBe(317811);
    });

    it('should cover negative numbers', function() {
      expect(function() {
        fibonacciCalculator.compute(-1);
      }).toThrowError('Number must be positive');
    });

    it('should cover invalid values', function() {
      expect(function() {
        fibonacciCalculator.compute('the answer to life in the universe and everything');
      }).toThrowError('Parameter must be a number');
    });


    // describe("when song has been paused", function() {
    //   beforeEach(function() {
    //     player.play(song);
    //     player.pause();
    //   });

    //   it("should indicate that the song is currently paused", function() {
    //     expect(player.isPlaying).toBeFalsy();

    //     // demonstrates use of 'not' with a custom matcher
    //     expect(player).not.toBePlaying(song);
    //   });

    //   it("should be possible to resume", function() {
    //     player.resume();
    //     expect(player.isPlaying).toBeTruthy();
    //     expect(player.currentlyPlayingSong).toEqual(song);
    //   });
    // });

    // // demonstrates use of spies to intercept and test method calls
    // it("tells the current song if the user has made it a favorite", function() {
    //   spyOn(song, 'persistFavoriteStatus');

    //   player.play(song);
    //   player.makeFavorite();

    //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    // });

    // //demonstrates use of expected exceptions
    // describe("#resume", function() {
    //   it("should throw an exception if song is already playing", function() {
    //     player.play(song);

    //     expect(function() {
    //       player.resume();
    //     }).toThrowError("song is already playing");
    //   });
    // });
});
