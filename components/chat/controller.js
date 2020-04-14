
const store = require('./store')

function listChats(userid) {
    return store.list(userid)
}

function addChat( users ) {

    if( !users || !Array.isArray(users) ) {
        return Promise.reject('Invalid user list')
    }

    const chat = {
        users
    }

    return store.add(chat)
}

module.exports = {
    listChats,
    addChat,
}