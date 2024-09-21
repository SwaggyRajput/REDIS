// const redis = require("./redis");
// const { Redis } = require("ioredis");
// const redis = new Redis();
// const { json } = require('@node-redis/json');

// const { initString } =require('./DataStrcutures/String')
// const { initList } =require('./DataStrcutures/List')
// const { initSet} =require('./DataStrcutures/Set')
// const { initJson } =require('./DataStrcutures/Json')

// initString();
// initList():
// initSet()
// initJson()


import { createClient } from 'redis';

const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

await client.json.set('keyyy','$','Val');
const value = await client.json.get('keyyy','$');
console.log(value)
await client.disconnect();
