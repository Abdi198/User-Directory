const axios = require("axios");

export default{
getRandomPeople: function() {
    return axios.get("https://randomuser.me/api/?results=100")
}
};