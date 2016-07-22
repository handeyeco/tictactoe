/* jshint esversion: 6 */
/* jshint expr: true */

import { expect, should } from 'chai';
import computerMove from '../src/scripts/computerMove';

describe("Computer Moves (computerMove)", () => {
  /////////////////////
  // FIRST MOVE
  /////////////////////
  describe("Computer makes first move", () => {

    it("makes first move as X", () => {
      const state = {
        board: [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        computerIs: 1
      };

      expect(computerMove(state)).to.equal(
        {board: [
            [1,0,0],
            [0,0,0],
            [0,0,0]
        ]}
      );
    });

    it("makes first move as O (center)", () => {
      const state = {
        board: [
          [1,0,0],
          [0,0,0],
          [0,0,0]
        ],
        computerIs: 2
      };

      expect(computerMove(state)).to.equal(
        {board: [
            [1,0,0],
            [0,2,0],
            [0,0,0]
        ]}
      );
    });

    it("makes first move as O (corner)", () => {
      const state = {
        board: [
          [0,0,0],
          [0,1,0],
          [0,0,0]
        ],
        computerIs: 2
      };

      expect(computerMove(state)).to.equal(
        {board: [
            [2,0,0],
            [0,1,0],
            [0,0,0]
        ]}
      );
    });

  });

  /////////////////////
  // BLOCK USER
  /////////////////////
  describe("Computer blocks user", () => {

    describe("Computer blocks single line", () => {

      it("blocks on the horizontal");

      it("blocks on the vertical");

      it("blocks on the diagonal");

    });

    describe("Computer blocks middle and end of line", () => {

      it("blocks middle of line");

      it("blocks end of line");

    });

    describe("Computer blocks with two blocking options", () => {

      it("blocks either horizontal or vertical");

    });

  });

  /////////////////////
  // OFFENSE
  /////////////////////
  describe("Computer plays offensively", () => {

    describe("Computer tries to win lines", () => {

      it("tries to win horizontally");

      it("tries to win vertically");

      it("tries to win diagonally");

    });

    describe("Computer tries to make lines", () => {

      it("tries to make lines");

    });

  });

});
