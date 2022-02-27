var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

const sendSms=(message,num)=>{
    req.query({
        "authorization": "j8x19utnRgsYM3WVJ6ievdZO5NKwqmBDFLpzPorTkCEIAHUcfbfUjPm1biGsw6aRpqS83XK4x5egDv2V",
        "sender_id": "TXTIND",
        "message": message,
        "route": "v3",
        "numbers": num
      });
      
      req.headers({
        "cache-control": "no-cache"
      });
      
      
      req.end(function (res) {
        if (res.error) throw new Error(res.error);
      
        console.log(res.body);
      });      
}
module.exports=sendSms;