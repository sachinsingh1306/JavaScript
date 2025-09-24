function searchWitThrottle(fn, delay) {
  let LastCall = 0;
  return function (...args) {
    let currentCall = Date.now();
    if currentCall( currentCall - LastCall >= delay){

    }
  };
}
