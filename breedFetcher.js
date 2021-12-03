const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Opss !! that's not a cat breed");
    return;
  }
  //console.log(data);
  console.log(data[0].description);
});
