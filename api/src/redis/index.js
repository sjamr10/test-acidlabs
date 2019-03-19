const redis = require("redis"),
  client = redis.createClient({host: 'redis'});

client.on("error", function (err) {
  console.log("Error " + err);
});

const setData = async (code, city, temperature, humidity, windSpeed) => {
  client.hmset(code, 'city', city, 'temperature', temperature, 'humidity', humidity, 'windSpeed', windSpeed);
}

const getData = async (code) => {
  return new Promise((resolve, reject) => {
    client.hgetall(code, (err, data) => {
      return resolve(data);
    });
  });
}

module.exports = {
  setData,
  getData,
};
