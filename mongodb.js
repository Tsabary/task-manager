// THIS IS NOT BEING USED. LEFT IT BEHIND FOR EDUCATIONAL PURPOSES. //


const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) return console.log("Unabe to connect to database");

        const db = client.db(databaseName);

        db.collection("tasks").insertMany(
            [{
                    description: "Take dog for a walk",
                    completed: true
                },
                {
                    description: "Workout",
                    completed: true
                },
                {
                    description: "Kill bill",
                    completed: false
                }
            ],
            (err, res) => {
                if (err) return console.log("Unable to insert user");

                console.log(res.ops);
            }
        );
    }
);