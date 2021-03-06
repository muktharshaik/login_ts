"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'admin-sheik';
var MONGO_PASSWORD = process.env.MONGO_USERNAME || 'jnt3KtgndC2bFpv9';
var MONGO_HOST = process.env.MONGO_URL || "stp-data.bmhdg.mongodb.net/gameChange";
var MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: "mongodb://" + MONGO_USERNAME + ":" + MONGO_PASSWORD + "@" + MONGO_HOST
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 3005;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mongo: MONGO,
    server: SERVER
};
exports.default = config;
