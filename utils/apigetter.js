const { readFileSync } = require('fs');

class APIKeyError extends Error {}

function readAPIKey() {
  const api = readFileSync('api.key').toString();

  if(!api.length || api === 'INSERT_HERE_YOUR_API_KEY') {
    throw new APIKeyError("Invalid API key! Please insert your API key to 'api.key'");
  }

  return api;
}

module.exports.readAPIKey = readAPIKey;
