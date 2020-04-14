
const Model = require('./model')

function addChat(chat) {
    const myChat = new Model(chat)
    return myChat.save();
}

function listChats(userid) {
    return new Promise( (resolve, reject) => {
        let filter = {}

        if(userid) {
            filter = {
                users: userid,
            }
        }

        Model.find(filter)
        .populate('users')
        .exec( (err, populated) => {
            
            if(err) {
                reject(err)
                return;
            }

            resolve(populated)
        } )
    } )
}



module.exports = {
    add: addChat,
    list: listChats
}