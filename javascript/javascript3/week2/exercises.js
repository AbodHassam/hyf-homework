function notThisFunctionName(millisecondsToResolve) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millisecondsToResolve)
    }, 3000);
  })
}

notThisFunctionName(3000)
  .then(() => {
    setTimeout(() => {
      console.log('I am called asynchronously');
    }, 3000);
  })
