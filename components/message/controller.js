
const store = require('./store')

function addMessage(chat, user, message) {
    
    return new Promise( (resolve, reject) => {

        if( !chat || !user || !message ) {
            console.error('[messageController] No hay usuario o mensaje');
            reject( 'Los datos son incorrectos' )
            return;
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage)
        resolve(fullMessage);
    } )
}

function getMessages( filterUser ) {
    return new Promise( (resolve, reject) => {
        resolve(store.list(filterUser))
    } )
}

function updateMessage(id, message) {
    return new Promise( async (resolve, reject) => {
        
        if( !id || !message ) {
            reject('Invalid data')
            return;
        }

        const result = await store.updateText(id, message)

        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise( (resolve, reject) => {
        
        if( !id ) {
            reject('Parametro id invalido')
            return
        }

        store.remove(id)
        .then( () => resolve())
        .catch(e => reject(e))
    } )
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}