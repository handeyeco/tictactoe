/* jshint esversion: 6 */
/* jshint expr: true */

import { expect, should } from 'chai';
import makeBoardArr from '../src/scripts/makeBoardArr.js';
import isGameOver from '../src/scripts/isGameOver.js';

describe('Check Game Over (isGameOver)', () => {

  describe('Checks if game is over', () => {

    it('works for when game is won for x', () => {
      const state = {
        board: [
          [1,1,1],
          [0,0,0],
          [0,0,0]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(1);

    });

    it('works for when game is won for y', () => {
      const state = {
        board: [
          [2,2,2],
          [0,0,0],
          [0,0,0]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(2);

    });

    it('works for when game is a tie', () => {
      const state = {
        board: [
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(3);

    });
  });

  describe('Can check in all directions', () => {

    it('works for when game is won horizontally', () => {
      const state = {
        board: [
          [1,1,1],
          [0,0,0],
          [0,0,0]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(1);

    });

    it('works for when game is won vertically', () => {
      const state = {
        board: [
          [2,0,0],
          [2,0,0],
          [2,0,0]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(2);

    });

    it('works for when game is won diagonally', () => {
      const state = {
        board: [
          [1,0,0],
          [0,1,0],
          [0,0,1]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(1);

    });
  });

  describe('Does not return false positive', () => {

    it('returns 0 on empty board', () => {
      const state = {
        board: [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(0);

    });

    it('returns 0 on sparse board', () => {
      const state = {
        board: [
          [2,1,0],
          [0,0,0],
          [0,2,1]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(0);

    });

    it('returns 0 on a near win', () => {
      const state = {
        board: [
          [2,2,0],
          [2,2,1],
          [0,1,1]
        ]
      };
      const boardArr = makeBoardArr(state);

      expect(isGameOver(state, boardArr)).to.equal(0);

    });
  });
});
