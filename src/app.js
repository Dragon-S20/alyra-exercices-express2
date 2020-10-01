import express from 'express'
const app = express()

const PORT = 7777
const IP_LOCAL = '192.168.0.102'
const LOG_FILE = 'access-log.txt'

/*const LOGGER = async (req, res, next) => {
    try {
        const date = new Date()
        const log = `${date.toUTCString()} ${req.method} "${
            req.originalUrl
        }" from ${req.ip} ${req.headers['user-agent']}\n`
        await fs.appendFile(LOG_FILE, log, 'utf-8')
    } catch (e) {
        console.error(`Error: can't write in ${LOG_FILE}`)
    } finally {
        next()
    }
}*/

app.get('/', (req, res) => {
    res.send('Exercices express partie 2')
})

/*Ajouter une route /get_current_time qui retournera à l'utilisateur la date du serveur sur lequel s'exécute app.js */
const CURRENT_TIME = (req, res, next) => {
    const date = new Date()
    const log = `${date.toUTCString()} ${req.method}`
    res.send(log)
    next()
}

app.use('/get_current_time', CURRENT_TIME)

/*Ajouter une route /how_pass_data qui retourne à l'utilisateur un message qui lui explique comment on passe des données d'un handler/middleware à un autre sur express */
const HOW_PASS_DATA = (req, res, next) => {
    res.send(
        `<p>Pour passer des données d'un handler/middleware à un autre sur express clic sur le <a href="https://www.google.com">lien</a></p>`
    )
    next()
}

app.use('/how_pass_data', HOW_PASS_DATA)

app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log(`Example app listening at http://localhost:${PORT}`)
})

//

/*app.get('/get_current_time', (req,res) =< {

})
*/
