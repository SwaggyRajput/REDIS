export const initList=async function () {


    //Queue 
        /*
        const res1 = await redis.lpush('bikes:repairs', 'bike:1');
        console.log(res1);  // 1
    
        const res2 = await redis.lpush('bikes:repairs', 'bike:2');
        console.log(res2);  // 2
    
        const res3 = await redis.rpop('bikes:repairs');
        console.log(res3);  // bike:1
    
        const res4 = await redis.rpop('bikes:repairs');
        console.log(res4);  // bike:2
    */
    
        //Stack
        /*
        const res5 = await redis.lpush('bikes:repairs', 'bike:1');
        console.log(res5);  // 1
    
        const res6 = await redis.lpush('bikes:repairs', 'bike:2');
        console.log(res6); // 2
    
        const res7 = await redis.lpop('bikes:repairs');
        console.log(res7);  // bike:2
    
        const res8 = await redis.lpop('bikes:repairs');
        console.log(res8);  // bike:1
        */
    
        //Length of List
        /*
        const res9 = await redis.llen('bikes:repairs');
        console.log(res9); // 0
        */
    
        //Move a list
        /*
        const res10 = await redis.lpush('bikes:repairs', 'bike:1');
        console.log(res10);  // 1
    
        const res11 = await redis.lpush('bikes:repairs', 'bike:2');
        console.log(res11);  // 2
    
        const res12 = await redis.lmove('bikes:repairs', 'bikes:finished', 'LEFT', 'LEFT');
        console.log(res12);  // 'bike:2'
    
        */
    
        //Range of List
        /*
        const res13 = await redis.lrange('bikes:repairs', 0, -1);
        console.log(res13);  // ['bike:1']
    
        const res14 = await redis.lrange('bikes:finished', 0, -1);
        console.log(res14);  // ['bike:2']
        */
    
        //Right Push in list
        /*
        const res15 = await redis.rpush('bikes:repairs', 'bike:1');
        console.log(res15);  // 1
    
        const res19 = await redis.rpush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
        console.log(res19);  // 3
        */
    
    
        //Left Push in List
        /*
        const res17 = await redis.lpush('bikes:repairs', 'bike:important_bike');
        console.log(res17);  // 3
    
        const res20 = await redis.lpush(
        'bikes:repairs', ['bike:important_bike', 'bike:very_important_bike']
        );
        console.log(res20);  // 5
        */
    
        ////Range of List
        /*
        const res18 = await redis.lrange('bikes:repairs', 0, -1);
        console.log(res18);  // ['bike:important_bike', 'bike:1', 'bike:2']
        */
    
        //Blocking Commands
        /*
        const res32 = await redis.brpop('bikes:repairs', 1);
        console.log(res32);  // { key: 'bikes:repairs', element: 'bike:2' }
        */
    
        //Delete a key
        /*
        const res35 = await redis.del('new_bikes');
        console.log(res35); // 0
        */
    
        //Type of Key
        /*
        const res38 = await redis.type('new_bikes');
        console.log(res38);  // 'string'
        */
    
        //Check Existence of Key
        /*
        const res44 = await redis.exists('bikes:repairs');
        console.log(res44);  // 0
        */
    
    
    }