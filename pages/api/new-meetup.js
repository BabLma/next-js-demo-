/*
TODOS
api/new-meetup
POST /api/new-meetup 
*/

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  //getting an request
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    //storing an data in database mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://Saman:nepal123@cluster0.o3wjp.mongodb.net/meetupDataBase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetupDataBase");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    //close the databse connection onece done
    client.close();

    // using response object to send back a response
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
