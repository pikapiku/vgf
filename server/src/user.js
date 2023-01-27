const { getData } = require('./dataStore')

function isRiotIdValid(riotId) {
    return true
}

function isDiscordIdValid(discordId) {
    return true
}

function isUser(authUserId) {
    return true
}

function userCreate(discordId, riotId,pronouns, choice, description) {
    //  error checking
    if (!(isRiotIdValid(riotId) && isDiscordIdValid(discordId))) {
        return {error: 'error'}
    }

    let store = getData()
    let { users } = store
    
    let authUserId =  users.length + 1;  // assign new id 

    // add new user to dataStore
    users.push({
        authUserId,
        pronouns,
        choice,
        description,
    })

    return {
        authUserId //return new users id as an object
    }
}

function userDelete(authUserId) {
    let store = getData()  // grab dataStore
    let { users } = store

    //error checking
    if (!isUser(authUserId)) { 
        return {error: 'error'}
    }
     
    return {}; 
}

function userAdd(authUserId) {

    //error checking
    if (!isUser(authUserId)) { 
        return {error: 'error'}
    }
     


    return {}; 
}

function userLeave(authUserId) {

    //error checking
    if (!isUser(authUserId)) { 
        return {error: 'error'}
    }
     

    
    return {}; 
}


module.exports = {
    userCreate, 
    userAdd, 
    userDelete, 
    userLeave
}