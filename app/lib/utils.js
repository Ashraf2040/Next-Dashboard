import mongoose from "mongoose";


export const connectTODB = async () => {
    


        try {
            const connection = {}
      if  ( connection.isConnected ) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected= db.connections[0].readyState
        mongoose.isConnected
} catch (error) {

        throw new Error(error)
}
}