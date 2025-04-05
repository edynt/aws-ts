import app from './src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to MySQL database');
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1); // Exit the app if DB connection fails
  }
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
const NODE_ENV = process.env.NODE_ENV;


app.listen(PORT, async () => {
    console.log(`Server ${NODE_ENV} running on ${HOST}:${PORT}`);
    await connectToDatabase();
});