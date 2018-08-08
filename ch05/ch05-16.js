var diary = (function(){
  var key = 12345;
  var secrets = 'sitting for 8 hrs/day straight considered harmful';

  function privateUnlock(keyAttempt){
    if(key===keyAttempt){
      console.log('unlocked');
      this.open = true;
    }else{
      console.log('no');
    }
  };

  function privateTryLock(keyAttempt){
    privateUnlock.call(this, keyAttempt);
  };

  function privateRead(){
    if(this.open){
      console.log(secrets);
    }else{
      console.log('no');
    }
  }

  return {
    open: false,
    read: privateRead,
    tryLock: privateTryLock
  };

})();
