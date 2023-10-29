
const createUser = function(db , user, res){
    const {name, score} = user;
    
    let message = 'error while creating user';

    db.run(`INSERT INTO users (name, score) VALUES (?, ?)`, [name, score], function(err) {
        if (err) {
            message = err.message;
        } else {
            message = `A row has been inserted with rowid ${this.lastID}`
        }
        console.log(message);
        res.json({message});
      });
    
      console.log("Insert Executed");
    
}

const getScores = function(db, userid, res) {
    let message = 'error while getting user';
    db.all(`SELECT score from users where name=? ORDER BY created_at desc`, [userid], (err, scores) => {
        if (err) {
            message = err.message;
            res.json({message});
        } else {
            scores = scores.flatMap(obj => Object.values(obj));
            res.json({scores});
        }
      });

}

exports.createUser = createUser
exports.getScores = getScores