let isPrime = false;

for (let num = 2; num <= 100; num++) {
  isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
