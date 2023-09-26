function minimumChange(coins) {
  const sortedCoins = coins.sort((a, b) => a - b);
  let change = 0;
  if (sortedCoins.length === 0) {
    return 1;
  }

  for (let coin of sortedCoins) {
    if (coin > change + 1) break;
    change = change + coin;
  }
  return change + 1;
}

module.exports = minimumChange;
