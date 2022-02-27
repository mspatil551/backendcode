const schedule=require("node-schedule");
schedule.scheduleJob('*/1 * * * * *',()=>{
    console.log('The answer to life, the universe, and everything!');
  });