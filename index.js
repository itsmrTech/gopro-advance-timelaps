var axios = require("axios");
var schedule = require("node-schedule");
var j = schedule.scheduleJob('* * * * *', function () {
    axios.get("http://10.5.5.9/gp/gpControl/command/shutter?p=1");
    console.log("took a frame")
});