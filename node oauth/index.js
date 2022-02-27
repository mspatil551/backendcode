const express = require('express');
const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;

const app=express();
const port=3000;
// cliend_Id 238345960989-u77f8vafchbousbdkdgrnh0p71b528r7.apps.googleusercontent.com
// cliend secret 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 
passport.use(new GoogleStrategy({
    clientID:'238345960989-u77f8vafchbousbdkdgrnh0p71b528r7.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/google'
},(accessToken,refreshToken,profile,done)=>{
    console.log(profile);
    console.log(done);
    done("your log in");
}))
app.get('',(req,res)=>{res.send("hello world")})
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email'],
}) );
app.get('/google',passport.authenticate('google') );
app.listen(port,console.log(`server running on the http://localhost:${port}`));