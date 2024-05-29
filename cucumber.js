const common = [
    'src/tests/features/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require src/tests/steps/*.ts',          // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--format progress', 
  ].join(' ');
  
  module.exports = {
    default: common
  };
  