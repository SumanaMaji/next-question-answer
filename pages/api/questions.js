import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("flashcards");
        switch(req.method)
        {
            case "GET":
       const trips = await db
           .collection("questions")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(trips);
       break;
        }
   } catch (e) {
       console.error(e);
   }
};