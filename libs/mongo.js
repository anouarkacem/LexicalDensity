const MongoClient = require('mongodb').MongoClient

module.exports = {
    insert: function (word, cb) {
        MongoClient.connect('mongodb://localhost:27017/lexicaldensity', (err, client) => {
            if (err) res.status(500).send(err)

            var db = client.db('lexicaldensity');
            db.collection('nonlexical').insertOne({
                word: word
            }).then((result) => {
                cb(null, result);
            }).catch((err) => {
                cb(err, null);
            })
        })
    },
    get: function (cb) {
        MongoClient.connect('mongodb://localhost:27017/lexicaldensity', (err, client) => {
            if (err) res.status(500).send(err)

            var db = client.db('lexicaldensity');
            db.collection('nonlexical').find().toArray(function (err, result) {
                if (err) throw cb(err, null)

                cb(null, result)
            })
        })
    }
}