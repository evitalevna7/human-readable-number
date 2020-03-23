module.exports = function toReadable (number) {
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (number >= 0 && number < 10) {
    return units[number];
  }
  if (number >= 10 && number < 20) {
    return teens[number - 10];
  }
  if (number >= 20 && number < 100) {
    if (number % 10 !== 0) {
      return `${dozens[Math.floor(number / 10 - 2)]} ${units[number % 10]}`;
    } else {
      return `${dozens[Math.floor(number / 10 - 2)]}`;
    }
}
  if (number >= 100) {
    if (number % 100 === 0) {
        return `${units[Math.trunc(number/100)]} hundred`;
    }
    if (number - (Math.trunc(number / 100) * 100) >= 20) {
        if (number % 10 === 0) {
          return `${units[Math.trunc(number/100)]} hundred ${dozens[Math.trunc(number / 10) % 10 - 2]}`;
        } else {
          return `${units[Math.trunc(number/100)]} hundred ${dozens[Math.trunc(number / 10) % 10 - 2]} ${units[Math.trunc(number%10)]}`;
          }
    }
    if (number - (Math.trunc(number / 100) * 100) >= 10 && number - (Math.trunc(number / 100) * 100) < 20) {
      return `${units[Math.trunc(number/100)]} hundred ${teens[number%100 - 10]}`;
    }
    if (number - (Math.trunc(number / 100) * 100) < 10) {
      return `${units[Math.trunc(number/100)]} hundred ${units[Math.trunc(number%10)]}`;
    }
  }
}