const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';   
const dbName = 'matcha';
const mongo = {MongoClient, url, dbName};
const geolib = require('geolib');

const newNoctification = (to, from, type) => {

    return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
        const db = client.db(mongo.dbName);
        let id;
    
        db.collection("users").findOne({id: id})
        .then((result) => {
            db.collection("user_account").findOneAndUpdate({}, {$inc: {noctifications: 1}})
            .then(result => {
                if (result == null) {
                    result[0] = 1;
                    db.collection("user_account").insertOne({noctifications: 1})
                    .catch(err => reject({error: "requete error"}))
                }
                id = (result) ? result.value.noctifications : 1;
            })
            db.collection("noctifications").insertOne({type: type, id: id, to: to, from: from})
            .then((result) => {client.close();resolve({message: "update succeed"})})
            .catch(err => reject({error: "requete error"}))
        })
        .catch((err) => {console.log(err);client.close();reject({error: "requete error"})});
        });
    })
}

const search = (filter, collection, option= "many") => {

    return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        const db = client.db(dbName);
        let id;
    
        if (option == "many") {
            // db.collection().aggregate
            db.collection(collection).find(filter).toArray()
            // .then(result => {client.close();console.log(err); resolve(result);})
            .then(result => {client.close();resolve(result);})
            .catch((err) => {client.close();console.log(err);client.close();reject({error: "requete error"})});
        } else if (option == "one") {
            db.collection(collection).findOne(filter)
            // .then(result => {client.close();console.log(err); resolve(result);})
            .then(result => {client.close();resolve(result);})
            .catch((err) => {client.close();console.log(err);reject({error: "requete error"})});
        }
    });
    })
}

// mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
//     const db = client.db(mongo.dbName);
//     let id;

//     db.collection("users").insertMany([
//         // {firstname: "oussama", tags: ["a", "b", "f"], age: 20, sexe: "homme", sexualInterest: 'hetero', latitude: 48.543553, longitude: 2.663040, scorePopularite: 60},
//         // {firstname: "a", tags: ["g", "a"], age: 19, sexe: "femme", sexualInterest: 'hetero', latitude: 48.543553, longitude: 2.663040, scorePopularite: 60},
//         // {firstname: "i", tags: ["a", "f"], age: 22,sexe: "femme",  sexualInterest: 'hetero', latitude: 48.587782, longitude: 2.229153, scorePopularite: 20},
//         // {firstname: "c", tags: ["h"], age: 16,sexe: "femme",  sexualInterest: 'hetero', latitude: 48.541066, longitude: 2.653840, scorePopularite: 55},
//         // {firstname: "d", tags: ["a"], age: 50, sexe: "femme", sexualInterest: 'hetero', latitude: 48.539068, longitude: 2.656152, scorePopularite: 70},
//         // {firstname: "e", tags: ["t"], age: 25, sexe: "femme", sexualInterest: 'hetero', latitude: 48.541910, longitude: 2.638951, scorePopularite: 43},
//         // {firstname: "f", tags: ["h"], age: 18, sexe: "femme", sexualInterest: 'hetero', latitude: 48.599544, longitude: 2.146312, scorePopularite: 10},
//         // {firstname: "g", tags: ["a", "b", "f"], age: 23, sexe: "femme", sexualInterest: 'homo', latitude: 48.540233, longitude: 2.661622, scorePopularite: 120},
//         // {firstname: "h", tags: ["g"], age: 24, sexe: "femme", sexualInterest: 'bi', latitude: 48.538585, longitude: 2.660593, scorePopularite: 60},
//     ])
//     });

const distanceProche = (position1, position2, max = 50000) => {
    let distance;

    distance = geolib.getDistance(position1, position2);
    return (distance < max);
}

const matchingTags = (user, result) => {
    let score;

    user.forEach(tag1 => {
        result.find();
        score += 1;
    });
    return (score * 100 / result.length);
}

// const votre = () => {

// // }
// const a = () => {
//     search({firstname: "oussama"}, "users", "one")
//     .then((user) => {
//         let sexualInterest;
//         let sexe;
    
//         switch (user.sexualInterest) {
//             case 'hetero':
//             sexualInterest = ['hetero', 'bi'];
//             sexe = (user.sexe == 'homme') ? ['femme'] : ['homme'];
//             break ;
//             case 'homo':
//             sexualInterest = ['homo', 'bi'];
//             sexe = (user.sexe == 'homme') ? ['homme'] : ['femme'];
//             break ;
//             case 'bi':
//             sexualInterest = ['homo', 'hetero', 'bi'];
//             sexe = ['femme', 'homme'];
//             break ;
//         }
//         search({sexe: {}, sexualInterest: {$in: sexualInterest}, tags: {$in: user.tags}, scorePopularite: {$and: [{$gte: user.scorePopularite - 10}, {$lte: user.scorePopularite + 10}]} }, "users")
//        .then((res) => {
//             let a = res.filter(elem => {
//                 return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: user.latitude, longitude: user.longitude}))
//             })
//             let b = a.filter(elem => {
    //                 return (elem.age < 17 && elem.age > 20)
//             })         
//             let c = a.filter(elem => {
//                 return (elem.scorePopularite < 0 && elem.scorePopularite > 50)
//             })         
//             let d = a.filter(elem => {
//                 return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: user.latitude, longitude: user.longitude}))
//             })         
//             let e = a.filter(elem => {
//                 let found = elem.tags.find((elem) => {
//                     return (elem )
//                 })
//                 return (elem.tags.find())
//             })         
//         })
//     })
//     .catch(err => {console.log(err)})
// }

// search({firstname: "oussama"}, "users", "one")
// .then((user) => {
    //     let sexualInterest;
//     let sexe;

//     switch (user.sexualInterest) {
    //         case 'hetero':
    //         sexualInterest = ['hetero', 'bi'];
//         sexe = (user.sexe == 'homme') ? ['femme'] : ['homme'];
//         break ;
//         case 'homo':
//         sexualInterest = ['homo', 'bi'];
//         sexe = (user.sexe == 'homme') ? ['homme'] : ['femme'];
//         break ;
//         case 'bi':
//         sexualInterest = ['homo', 'hetero', 'bi'];
//         sexe = ['femme', 'homme'];
//         break ;
//     }
//     search({sexe: {$in: sexe}, sexualInterest: {$in: sexualInterest}, tags: {$in: user.tags}, scorePopularite: {$and: [{$gte: user.scorePopularite - 10}, {$lte: user.scorePopularite + 10}]} }, "users")
//    .then((res) => {
    //                let a = res.filter(elem => {
//                    return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: user.latitude, longitude: user.longitude}))
//                 })         
//     })
// })
// .catch(err => {console.log(err)})

const Recommandation = (id, age=null, location=null, scorePopularite=null, tags=null) => {
    return new Promise((resolve, reject) => {
        search({firstname: "oussama"}, "users", "one")
        .then((user) => {
            let sexualInterest;
            let sexe;
        
            switch (user.sexualInterest) {
                case 'hetero':
                sexualInterest = ['hetero', 'bi'];
                sexe = (user.sexe == 'homme') ? ['femme'] : ['homme'];
                break ;
                case 'homo':
                sexualInterest = ['homo', 'bi'];
                sexe = (user.sexe == 'homme') ? ['homme'] : ['femme'];
                break ;
                case 'bi':
                sexualInterest = ['homo', 'hetero', 'bi'];
                sexe = ['femme', 'homme'];
                break ;
            }
            search({sexe: {$in: sexe}, sexualInterest: {$in: sexualInterest}, tags: {$in: user.tags}, $and: [ {scorePopularite: {$gte: user.scorePopularite - 10}}, {scorePopularite: {$lte: user.scorePopularite + 10}}] }, "users")
            .then((res) => {
                       let a;

                       a = res.filter(elem => {
                          return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: user.latitude, longitude: user.longitude}))
                       })
                       if (location) {
                           a = res.filter(elem => {
                            return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: location[0], longitude: location[1]}))
                            })         
                        }
                        if (age) {
                            console.log(age[1]);
                            a = a.filter(elem => {
                                return (elem.age >= age[0] && elem.age <= age[1])
                            })         
                        }
                        if (scorePopularite) {
                            console.log(age[1]);
                            a = a.filter(elem => {
                                return (elem.scorePopularite >= scorePopularite[0] && elem.scorePopularite <= scorePopularite[1])
                            })         
                        }
                        if (tags) {
                            console.log(age[1]);
                            a = a.filter(elem => {
                                let found = elem.tags.find((elem) => {
                                    return (elem == tags)
                                })
                                return (elem.tags.find())
                            })
                        }
                        resolve(a);
                    })
                })
            .catch(err => {reject(err);})
        .catch(err => {reject(err);})
    })
}

const Recherche = (id, age=null, location=null, scorePopularite=null, tags=null) => {
    return new Promise((resolve, reject) => {
        search({id: id}, "users", "one")
        .then((user) => {
            let sexualInterest;
            let sexe;
        
            switch (user.sexualInterest) {
                case 'hetero':
                sexualInterest = ['hetero', 'bi'];
                sexe = (user.sexe == 'homme') ? ['femme'] : ['homme'];
                break ;
                case 'homo':
                sexualInterest = ['homo', 'bi'];
                sexe = (user.sexe == 'homme') ? ['homme'] : ['femme'];
                break ;
                case 'bi':
                sexualInterest = ['homo', 'hetero', 'bi'];
                sexe = ['femme', 'homme'];
                break ;
            }
            search({sexe: {$in: sexe}, sexualInterest: {$in: sexualInterest}, tags: {$in: tags}, $and: [ {scorePopularite: {$gte: user.scorePopularite - 10}}, {scorePopularite: {$lte: user.scorePopularite + 10}}] }, "users")
            .then((res) => {
                       let a;

                       a = res.filter(elem => {
                          return (distanceProche({latitude: elem.latitude, longitude: elem.longitude}, {latitude: user.latitude, longitude: user.longitude}))
                       })
                        resolve(a);
                    })
                })
            .catch(err => {reject(err);})
        .catch(err => {reject(err);})
    })
}
age = null;
location = null;
scorePopularite = null;
tags = "sport";
Recommandation(1, age, location, scorePopularite, tags).then(t => {console.log(t)})

// search({$or : [{sexualInterest: "femelle"}]}, "users");
//   const promise = faireQqc();
module.exports = { newNoctification };