const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
      .filter((el) => {
        if (typeof el === 'string' || el instanceof String) return el;
      })
      .map((el) => el.trim().toUpperCase())
      .sort()
      .reduce((acc, cur) => acc.concat(cur[0]), '')
    : false
  ;
}

module.exports = {
  createDreamTeam
};
