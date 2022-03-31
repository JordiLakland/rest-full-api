import dotenv from 'dotenv';

// Server Configuration
dotenv.config();

// Mysql configuration
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "apirest";
const MYSQL_USER = process.env.MYSQL_USER || "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "root";

const MYSQL = {
    host: MYSQL_HOST,
    databalse: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME = 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || '1337';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
}

export default config;