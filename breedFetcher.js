const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error.message, null);
    } else {
      try {
        const data = JSON.parse(body);
        const firstBreed = data[0];

        if (firstBreed) {
          callback(null, firstBreed.description);
        } else {
          callback(`Breed '${breedName}' not found.`, null);
        }
      } catch (parseError) {
        callback(parseError.message, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
