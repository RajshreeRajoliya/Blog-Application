import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-u2psc0u-shard-00-00.okxvpyv.mongodb.net:27017,ac-u2psc0u-shard-00-01.okxvpyv.mongodb.net:27017,ac-u2psc0u-shard-00-02.okxvpyv.mongodb.net:27017/?ssl=true&replicaSet=atlas-dc0krk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;