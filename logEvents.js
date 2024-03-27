
const { format } = require("data-fns");
const {v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async(message)=>{
    const dataTime =`${format(new Data(), 'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dataTime}\t${uuid()}\${message}`;
    console.log(logItem);

    try{
        await fsPromises.appendFile(path.join(__dirname,'logs' ,'eventLog.txt'),logItem);
    }catch (err){
        console.log(err);
    }
}

module.exports =logEvents

