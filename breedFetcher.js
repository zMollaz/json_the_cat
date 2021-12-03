const request = require('request');
const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback("Opss !! that's not a cat breed", null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription,
};