/* jshint esversion: 6 */
/* jshint expr: true */

import { expect, should } from 'chai';
import isGameOver from '../src/scripts/isGameOver.js';

describe('Check Game Over (isGameOver)', () => {

  describe('Checks if game is over', () => {

    it('works for when game is won for x', () => {
      let state = {
        board: [
          [1,1,1],
          [0,0,0],
          [0,0,0]
        ]
      };

      expect(isGameOver(state)).to.equal(1);

    });

    it('works for when game is won for y', () => {
      let state = {
        board: [
          [2,2,2],
          [0,0,0],
          [0,0,0]
        ]
      };

      expect(isGameOver(state)).to.equal(2);

    });

    it('works for when game is a tie', () => {
      let state = {
        board: [
          [2,1,1],
          [1,2,2],
          [2,1,1]
        ]
      };

      expect(isGameOver(state)).to.equal(3);

    });
  });

  describe('Can check in all directions', () => {

    it('works for when game is won horizontally', () => {
      let state = {
        board: [
          [1,1,1],
          [0,0,0],
          [0,0,0]
        ]
      };

      expect(isGameOver(state)).to.equal(1);

    });

    it('works for when game is won vertically', () => {
      let state = {
        board: [
          [2,0,0],
          [2,0,0],
          [2,0,0]
        ]
      };

      expect(isGameOver(state)).to.equal(2);

    });

    it('works for when game is won diagonally', () => {
      let state = {
        board: [
          [1,0,0],
          [0,1,0],
          [0,0,1]
        ]
      };

      expect(isGameOver(state)).to.equal(1);

    });
  });

  describe('Does not return false positive', () => {

    it('returns 0 on empty board', () => {
      let state = {
        board: [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ]
      };

      expect(isGameOver(state)).to.equal(0);

    });

    it('returns 0 on sparse board', () => {
      let state = {
        board: [
          [2,1,0],
          [0,0,0],
          [0,2,1]
        ]
      };

      expect(isGameOver(state)).to.equal(0);

    });

    it('returns 0 on a near win', () => {
      let state = {
        board: [
          [2,2,0],
          [2,2,1],
          [0,1,1]
        ]
      };

      expect(isGameOver(state)).to.equal(0);

    });
  });
});
