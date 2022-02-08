//step 1: You define your variables from .env file
require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const {
    createAlchemyWeb3
} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);