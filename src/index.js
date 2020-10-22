module.exports = function reverse (n) {
  if (n === undefined) return;

  return parseInt(n
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                  );
}
