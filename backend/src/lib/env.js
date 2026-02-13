import "dotenv/config";


export const ENV ={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FORM_NAME: process.env.EMAIL_FORM_NAME,
};





// PORT = 3000
// MONGO_URL =mongodb+srv://6suhanisingh9_db_user:dYPRXxHFnQlLfxqw@cluster0.faxtmza.mongodb.net/Darkline_DB?appName=Cluster0

// NODE_ENV=dvelopment

// JWT_SECRET=yourjwtsecret

// RESEND_API_KEY=re_5HKpDk4T_GKnvwtCpEoNGZCW1ebN4TJEx

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="DarkLine"

// CLIENT_URL = http://localhost:5173