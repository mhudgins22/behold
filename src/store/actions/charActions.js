import * as actionTypes from './actionTypes';

export const saveCharBasics = (basicCharInfo) => { //Needs fixing
  console.log("hi matt");
  return {
    type: actionTypes.SAVE_CHAR_BASICS,
    basicInfo: basicCharInfo
  }
}
