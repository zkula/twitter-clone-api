const axios = require("axios");

const URL = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
  get(q, count) {
    return axios.get(URL, {
      params: {
        q: q,
        count: count,
        tweet_mode: "extended",
        include_entities: true,
      },
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    });
  }
}

module.exports = Twitter;
