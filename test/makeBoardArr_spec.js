/* jshint esversion: 6 */
/* jshint expr: true */

import { expect, should } from 'chai';
import makeBoardArr from '../src/scripts/makeBoardArr.js';

describe("Board Array (boardArr) converts state to an array", () => {
  it("works on an empty board", () => {
    const state = {
      board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    };

    expect(makeBoardArr(state)).to.deep.equal( [ [0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0] ] );
  });

  it("works on a full board", () => {
    const state = {
      board: [
        [2,2,2],
        [1,1,1],
        [2,2,2]
      ]
    };

    expect(makeBoardArr(state)).to.deep.equal( [ [2,2,2],[1,1,1],[2,2,2],[2,1,2],[2,1,2],[2,1,2],[2,1,2],[2,1,2] ] );
  });

});
