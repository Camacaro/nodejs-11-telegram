

function addMessage(user, message) {
    
    return new Promise( (resolve, reject) => {

        if( !user || !message ) {
            console.error('[messageController] No hay usuario o mensaje');
            reject( 'Los datos son incorrectos' )
            return;
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        }
    
        console.log(fullMessage);
    } )
}

module.exports = {
    addMessage,
}