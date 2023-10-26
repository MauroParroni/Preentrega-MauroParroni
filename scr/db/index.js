import * as sQLite from 'expo-sqlite'

const db = sQLite.openDatabase('sessions.db')

export const init = () =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction(tx =>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS sesion (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            () => resolve(),
            (_, error) =>{
                reject(error)
            })
        })
    })
    return promise
}

export const insertSessions = ({localId, email, token}) =>{
    const promise = new Promise((resolve, reject) =>{
       db.transaction(tx =>{
        tx.executeSql('INSERT INTO sesion (localId, email, token) VALUES(?, ?,?)',
        [localId, email,token],
        (_, result) => resolve(result),
        (_, error) => reject(error))
       })
    })
    return promise
}

export const fetchSessions = () =>{
    const promise = new Promise((resolve, reject) =>{
       db.transaction(tx =>{
        tx.executeSql('select * FROM sesion',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error))
       })
    })
    return promise
}
export const deleteSessions = () =>{
    const promise = new Promise((resolve, reject) =>{
       db.transaction(tx =>{
        tx.executeSql('DELETE FROM sesion',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error))
       })
    })
    return promise
}