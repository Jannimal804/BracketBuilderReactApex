import axios from "axios";

export default {
    getFromGeo: function(search){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc`)
    }
}