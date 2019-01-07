const concurrently = require('concurrently');
concurrently([
      // Install frontend packages and Run frontend
      {
            name: 'frontend ',
            prefixColor: 'green',
            command: 'cd frontend && npm install &&  npm start'
      },
      // run backend
      {
            name: 'backend  ',
            prefixColor: 'blue',
            command: 'cd backend && SPRING_PROFILES_ACTIVE=local gradle bootRun'
      },
      // run image service
      {
            name: 'image    ',
            prefixColor: 'red',
            command: 'cd image-service && SPRING_PROFILES_ACTIVE=local gradle bootRun'
      },
      // run ucll-recommendation-engine (make sure we're using java 1.8)
      {
            name: 'recommend',
            prefixColor: 'cyan',
            command: 'cd ucll-recommendation-engine && SPRING_PROFILES_ACTIVE=local JAVA_HOME=`/usr/libexec/java_home -v 1.8` gradle bootRun'
      },
], {
      prefix: 'name',
      restartTries: 0,
});
