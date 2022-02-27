const nodemailer = require('nodemailer');
const {google}=require('googleapis');
// const { oauth2 } = require('googleapis/build/src/apis/oauth2');
// for code
// https://nodemailer.com/smtp/oauth2/

const REFRESH_TOKEN="1//04ZgsjpTFJQM0CgYIARAAGAQSNwF-L9IrxOahLkN2rURzF1evD3Kl-m6h_nz-1SyoYSq6boEJVFzVhbZRrDQVTyupHz1UBBPnQSs";
const SECRET_KEY="AA5jnESpnZrK5rLW_A4eHgxB";
const CLIENT_ID="385304884429-260dqt7rrok9devueksk7df8ldo9k86q.apps.googleusercontent.com";
const REDIRECT_URL="https://developers.google.com/oauthplayground";

const oauth=new google.auth.OAuth2(CLIENT_ID,SECRET_KEY,REDIRECT_URL);
oauth.setCredentials({refresh_token:REFRESH_TOKEN});

async function sendEmail(){
    try {
        const ACCESS_TOKEN= await oauth.getAccessToken();
        let transportar=nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"oauth2",
                user:"mspatil551@gmail.com",
                clientId:CLIENT_ID,
                clientSecret:SECRET_KEY,
                accessToken:ACCESS_TOKEN,
                refreshToken:REFRESH_TOKEN
            }
        })
        let option={
            from:"🙄🤩💘💖💝<mspatil551@gmail.com>",
            to:"mspatil551@gmail.com",
            subject:"hii this mahesh here",
            message:"hii this is mahesh here"
        }
        let res=transportar.sendMail(option);

    } catch (error) {
        console.log("errror found");
    }
}
sendEmail().then((res)=>{
    console.log("email send");
}).catch(()=>{
    console.log("kahi tari problem ahe ");
})