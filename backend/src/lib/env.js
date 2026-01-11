import dotenv from 'dotenv';

dotenv.config();

const ENV = {
    api_key:process.env.API_key,
    port:process.env.port
}

export default ENV;