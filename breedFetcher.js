const request = require("request");

const fetchBreed = (breedName) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error("Error:", error);
      return;
    }

    const data = JSON.parse(body);
    const breedQuery = data[0];

    if (breedQuery) {
      console.log("Description:", breedQuery.description);
    } else {
      console.log(`Breed '${breedName}' not found.`);
    }
  });
};

// Check if the breed name is provided
if (process.argv.length < 3) {
  console.error("Please provide a breed name.");
  process.exit(1);
}

// Get the breed name
const breedName = process.argv[2];
fetchBreed(breedName);
