import mongoose from 'mongoose';


(async () => {
    try
    {
        mongoose.connect(`${process.env.MONBODB_URI}`);
    }
    catch (error)
    {
        console.log("ERROR:",error);
        throw error;
    }
}) ()