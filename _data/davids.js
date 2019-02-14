var csv = require('csvjson');
var axios = require('axios');

var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYLfsjrQbFTiIctfxgJwFt_Bvnrv0jLmBbr3wcATDf1lzRcHePnQ_fKVeFMms0T3pZB8t-OwtzyKG2/pub?output=csv';

module.exports = async function f() {

    let dataObj = await axios.get(url).then(console.log("[11ty] In come the Davids..."));

    return csv.toObject(dataObj.data)

}