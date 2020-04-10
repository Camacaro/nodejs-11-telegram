
const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise;
db.connect('mongodb://usertelegrom:usertelegrom123@ds033096.mlab.com:33096/telegrom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('[db] conectada con exito');

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
    // get
    // update
    // delete
}