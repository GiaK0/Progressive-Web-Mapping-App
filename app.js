if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      // Registration successful
      console.log('Registration successful. Scope ist ' + reg.scope);
    }).catch(function(error) {
      // Registration failed
      console.log('Registration failed with ' + error);
    });
  };