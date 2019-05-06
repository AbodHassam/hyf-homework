const mysql = require('mysql');
let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
/* app.use(bodyParser.urlencoded({
    extended : true
})); */

let db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
    //port: 3000
});

db.connect((err) => {
    if (!err)
        console.log('DB connection succeded!!!');

    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

//Return an array of all usernames.
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM user', (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        };


    })
});

//Retrieve full user information.
app.get('/api/users/:id', (req, res) => {
    db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err)
            res.send(rows)
        else
            console.log(err);


    })
});

//List all podcasts of a user.
app.get('/api/users/:id/podcasts', (req, res) => {
    db.query('SELECT user.name, user.email, user.phone, podcast.title, podcast.episodes \
    FROM user \
    JOIN user_podcast ON user.id = user_podcast.user_id \
    JOIN podcast ON podcast.id = user_podcast.podcast_id \
    WHERE user.id = ?;', [req.params.id], (err, rows) => {
            if (!err)
                res.send(rows)
            else
                console.log(err);


        })
});

//Delete a user.
app.delete('/api/users/:id', (req, res) => {
    db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err)
            res.send('The user has been Deleted.')
        else
            console.log(err);


    })
});

//Delete a user's podcast.
app.delete('/api/users/:id/podcasts/:podId', (req, res) => {
    db.query('DELETE FROM user_podcast WHERE user_id = ? AND podcast_id = ?',
        [req.params.id, req.params.podId], (err, rows) => {
            if (!err)
                res.send("User's podcast has been Deleted.")
            else
                console.log(err);


        })
});

//Create a new user.
app.post('/api/users', (req, res) => {
    db.query('INSERT INTO user (name , email , phone) VALUE (?,?,?)',
        [req.body.name, req.body.email, req.body.phone], (err, rows) => {
            if (!err)
                //res.end(JSON.stringify(rows))
                res.send('A new user has been inserted ')
            else
                console.log(err);


        })
});

//Create a new podcast for the given user.
app.post('/api/users/:id/podcasts', (req, res) => {
    db.query('INSERT INTO user_podcast (user_id ,podcast_id) values (?,?)',
        [req.params.id, req.body.podcast_id], (err, rows) => {
            if (!err)
                //res.end(JSON.stringify(rows))
                res.send('A new podcast has been inserted for the given user')
            else
                console.log(err);


        })
});

//Modify user information..
app.put('/api/users', (req, res) => {
    db.query('UPDATE user SET name = ? , email = ? , phone = ? WHERE id = ?',
        [req.body.name, req.body.email, req.body.phone, req.body.id], (err, rows) => {
            if (!err)
                //res.end(JSON.stringify(rows))
                res.send('User information has been updated')
            else
                console.log(err);


        })
});

//Allow modifying the title of a podcast.
app.put('/api/users/:id/podcasts/:podId', (req, res) => {
    db.query('UPDATE podcast SET  title = ? WHERE id = ?',
        [ req.body.title,req.params.podId ], (err, rows) => {
            if (!err)
                //res.end(JSON.stringify(rows))
                res.send('Podcast title  has been updated')
            else
                console.log(err);


        })
});

//Allow modifying the title of a podcast.
/* app.put('/api/users/:id/podcasts/:podId', (req, res) => {
    db.query('UPDATE user_podcast SET  podcast_id = ? WHERE user_id = ? AND podcast_id = ?',
        [ req.body.podcast_id,req.params.id,req.params.podId ], (err, rows) => {
            if (!err)
                //res.end(JSON.stringify(rows))
                res.send("User's podcast has been updated")
            else
                console.log(err);


        })
}); */


app.listen(port, () => console.log(`The server is running at port : ${port}`));
