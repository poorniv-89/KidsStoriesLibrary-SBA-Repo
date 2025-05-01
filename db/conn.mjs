//imports
import mongoose from "mongoose";
import dotenv from 'dotenv';

//setups
dotenv.config();
const connectionStr = process.env.mongoURI;

//function to connect to MongDB via mongoose
async function connectDB()
{
    try{
    await mongoose.connect(connectionStr);
    console.log('connected to MongDB...');
    }
    catch(e)
    {
        console.error(e);
    }
}
//function to do database level validation

export async function createAuthorValidation(){
    const db = mongoose.connection.db;

    await db.command({
        collMod:"authors",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "bio", "stories", "birthDate"],
                properties: {
                  name: {
                    bsonType: "string",
                  },
                  bio: {
                    bsonType: "string",
                  },
                  stories: {
                    bsonType: "array",
                    items: {
                      bsonType: "string"
                    }
                  },
                  birthDate: {
                    bsonType: "string",
                    description: "BirthDate must be a valid date"
                  }
                }
              }
            },
            validationAction: "error"
            
    });
    console.log("Author collection validation set!");
}
export default connectDB;