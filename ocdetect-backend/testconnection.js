import dbConnect from './lib/dbConnect';
async function testConnection() {
    await dbConnect();
}

testConnection().catch(console.error);
