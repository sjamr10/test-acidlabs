const redis = require("redis"),
  client = redis.createClient({host: 'redis'});

client.on("error", function (err) {
  console.log("Error " + err);
});

const setData = async (country, city, temperature) => {
  client.hmset(country, 'city', city, 'temperature', temperature);
}

const getData = async (country) => {
  return new Promise((resolve, reject) => {
    client.hgetall(country, (err, data) => {
      return resolve(data);
    });
  });
}

module.exports = {
  setData,
  getData,
};
