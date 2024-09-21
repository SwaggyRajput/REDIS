// const { Redis } = require("redis");
// const redis = new Redis();


import { createClient } from 'redis';

const redis = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

async function initJson(){

    
    // const res1 = await redis.json.set("bike", "$", "Hyperion");
    // console.log(res1); // OK
    
    // const res2 = await redis.json.get("bike", "$");
    // console.log(res2); // Hyperion
    
    // const res3 = await redis.json.type("bike", "$");
    // console.log(res3); //  [ 'string' ]
    
    
    // const res4 = await redis.json.strLen("bike", "$");
    // console.log(res4) //  [8]
    
    // const res5 = await redis.json.strAppend("bike", " (Enduro bikes)");
    // console.log(res5) //  23
    
    // const res6 = await redis.json.get("bike", "$");
    // console.log(res6) //  ['"Hyperion"" (Enduro bikes)"']
    
    
    // const res7 = await redis.json.set("crashes", "$", 0);
    // console.log(res7) //  OK
    
    // const res8 = await redis.json.numIncrBy("crashes", "$", 1);
    // console.log(res8) //  [1]
    
    // const res9 = await redis.json.numIncrBy("crashes", "$", 1.5);
    // console.log(res9) //  [2.5]
    
    // const res10 = await redis.json.numIncrBy("crashes", "$", -0.75);
    // console.log(res10) //  [1.75]
    
    
    // const res11 = await redis.json.set("newbike", "$", ["Deimos", {"crashes": 0 }, null]);
    // console.log(res11); //  OK
    
    // const res12 = await redis.json.get("newbike", "$");
    // console.log(res12); //  [ 'Deimos', { crashes: 0 }, null ]
    // res12.map((data)=>console.log(data))
    
    // const res13 = await redis.json.get("newbike", "$[1].crashes");
    // console.log(res13); //  [ 'Deimos', { crashes: 0 }, null ]
    
    // const res14 = await redis.json.del("newbike", "$.[-1]");
    // console.log(res14); //  [1]
    
    // const res15 = await redis.json.get("newbike", "$");
    // console.log(res15); //  [ 'Deimos', { crashes: 0 } ]
    
    
    // const res16 = await redis.json.set("riders", "$", []);
    // console.log(res16); //  OK
    
    // const res17 = await redis.json.arrAppend("riders", "$", "Norem");
    // console.log(res17); //  [1]
    
    // const res18 = await redis.json.get("riders", "$");
    // console.log(res18); //  [ 'Norem' ]
    
    // const res19 = await redis.json.arrInsert("riders", "$", 1, "Prickett", "Royse", "Castilla");
    // console.log(res19); //  [4]
    
    // const res20 = await redis.json.get("riders", "$");
    // console.log(res20); //  [ 'Norem', 'Prickett', 'Royse', 'Castilla' ]
    
    // const res21 = await redis.json.arrTrim("riders", "$", 1, 1);
    // console.log(res21); //  [1]
    
    // const res22 = await redis.json.get("riders", "$");
    // console.log(res22); //  [ 'Prickett' ]
    
    // const res23 = await redis.json.arrPop("riders", "$");
    // console.log(res23); //  [ 'Prickett' ]
    
    // const res24 = await redis.json.arrPop("riders", "$");
    // console.log(res24); //  [null]
    
    
    // const res25 = await redis.json.set(
    //   "bike:1", "$", {
    //     "model": "Deimos",
    //     "brand": "Ergonom",
    //     "price": 4972
    //   }
    // );
    // console.log(res25); //  OK
    
    // const res26 = await redis.json.objLen("bike:1", "$");
    // console.log(res26); //  [3]
    
    // const res27 = await redis.json.objKeys("bike:1", "$");
    // console.log(res27); //  [['model', 'brand', 'price']]
    
    
    // const inventoryJSON = {
    //   "inventory": {
    //     "mountain_bikes": [{
    //         "id": "bike:1",
    //         "model": "Phoebe",
    //         "description": "This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there\u2019s room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.",
    //         "price": 1920,
    //         "specs": {
    //           "material": "carbon",
    //           "weight": 13.1
    //         },
    //         "colors": ["black", "silver"],
    //       },
    //       {
    //         "id": "bike:2",
    //         "model": "Quaoar",
    //         "description": "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait redis. All in all it's an impressive package for the price, making it very competitive.",
    //         "price": 2072,
    //         "specs": {
    //           "material": "aluminium",
    //           "weight": 7.9
    //         },
    //         "colors": ["black", "white"],
    //       },
    //       {
    //         "id": "bike:3",
    //         "model": "Weywot",
    //         "description": "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get.",
    //         "price": 3264,
    //         "specs": {
    //           "material": "alloy",
    //           "weight": 13.8
    //         },
    //       },
    //     ],
    //     "commuter_bikes": [{
    //         "id": "bike:4",
    //         "model": "Salacia",
    //         "description": "This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, this is a bike which doesn\u2019t break the bank and delivers craved performance.  It\u2019s for the rider who wants both efficiency and capability.",
    //         "price": 1475,
    //         "specs": {
    //           "material": "aluminium",
    //           "weight": 16.6
    //         },
    //         "colors": ["black", "silver"],
    //       },
    //       {
    //         "id": "bike:5",
    //         "model": "Mimas",
    //         "description": "A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.",
    //         "price": 3941,
    //         "specs": {
    //           "material": "alloy",
    //           "weight": 11.6
    //         },
    //       },
    //     ],
    //   }
    // };
    
    // const res28 = await redis.json.set("bikes:inventory", "$", inventoryJSON);
    // console.log(res28); //  OK
    
    // const res29 = await redis.json.get("bikes:inventory", {
    //   path: "$.inventory.*"
    // });
    // console.log(res29);
    /*
    [
      [
        {
          id: 'bike:1',
          model: 'Phoebe',
          description: 'This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there’s room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.',
          price: 1920,
          specs: [Object],
          colors: [Array]
        },
        {
          id: 'bike:2',
          model: 'Quaoar',
          description: "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait redis. All in all it's an impressive package for the price, making it very competitive.",
          price: 2072,
          specs: [Object],
          colors: [Array]
        },
        {
          id: 'bike:3',
          model: 'Weywot',
          description: "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get.",
          price: 3264,
          specs: [Object]
        }
      ],
      [
        {
          id: 'bike:4',
          model: 'Salacia',
          description: 'This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano’s, this is a bike which doesn’t break the bank and delivers craved performance.  It’s for the rider who wants both efficiency and capability.',
          price: 1475,
          specs: [Object],
          colors: [Array]
        },
        {
          id: 'bike:5',
          model: 'Mimas',
          description: 'A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.',
          price: 3941,
          specs: [Object]
        }
      ]
    ]
    */
    
    // const res30 = await redis.json.get("bikes:inventory", {
    //   path: "$.inventory.mountain_bikes[*].model"
    // });
    // console.log(res30); //  ['Phoebe', 'Quaoar', 'Weywot']
    
    // const res31 = await redis.json.get("bikes:inventory", {
    //   path: '$.inventory["mountain_bikes"][*].model'
    // });
    // console.log(res31); //  ['Phoebe', 'Quaoar', 'Weywot']
    
    // const res32 = await redis.json.get("bikes:inventory", {
    //   path: "$..mountain_bikes[*].model"
    // });
    // console.log(res32); //  ['Phoebe', 'Quaoar', 'Weywot']
    
    
    // const res33 = await redis.json.get("bikes:inventory", {
    //   path: "$..model"
    // });
    // console.log(res33); //  ['Phoebe', 'Quaoar', 'Weywot', 'Salacia', 'Mimas']
    
    
    // const res34 = await redis.json.get("bikes:inventory", {
    //   path: "$..mountain_bikes[0:2].model"
    // });
    // console.log(res34); //  ['Phoebe', 'Quaoar']
    
    
    // const res35 = await redis.json.get("bikes:inventory", {
    //   path: "$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]"
    // });
    // console.log(res35);
    /*
    [
      {
        id: 'bike:2',
        model: 'Quaoar',
        description: "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait redis. All in all it's an impressive package for the price, making it very competitive.",
        price: 2072,
        specs: { material: 'aluminium', weight: 7.9 },
        colors: [ 'black', 'white' ]
      }
    ]
    */
    
    //  names of bikes made from an alloy
    // const res36 = await redis.json.get("bikes:inventory", {
    //   path: "$..[?(@.specs.material == 'alloy')].model"
    // });
    // console.log(res36); //  ['Weywot', 'Mimas']
    
    // const res37 = await redis.json.get("bikes:inventory", {
    //   path: "$..[?(@.specs.material =~ '(?i)al')].model"
    // });
    // console.log(res37); //  ['Quaoar', 'Weywot', 'Salacia', 'Mimas']
    
    
    // const res37a = await redis.json.set(
    //   'bikes:inventory', 
    //   '$.inventory.mountain_bikes[0].regex_pat', 
    //   '(?i)al'
    // );
    
    // const res37b = await redis.json.set(
    //   'bikes:inventory', 
    //   '$.inventory.mountain_bikes[1].regex_pat', 
    //   '(?i)al'
    // );
    
    // const res37c = await redis.json.set(
    //   'bikes:inventory', 
    //   '$.inventory.mountain_bikes[2].regex_pat', 
    //   '(?i)al'
    // );
    
    // const res37d = await redis.json.get(
    //   'bikes:inventory',
    //   '$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model'
    // );
    // console.log(res37d); // ['Quaoar', 'Weywot']
    
    // const res38 = await redis.json.get("bikes:inventory", {
    //   path: "$..price"
    // });
    // console.log(res38);  //  [1920, 2072, 3264, 1475, 3941]
    
    // const res39 = await redis.json.numIncrBy("bikes:inventory", "$..price", -100);
    // console.log(res39);  //  [1820, 1972, 3164, 1375, 3841]
    
    // const res40 = await redis.json.numIncrBy("bikes:inventory", "$..price", 100);
    // console.log(res40);  //  [1920, 2072, 3264, 1475, 3941]
    
    
    // const res40a = await redis.json.set(
    //   'bikes:inventory', 
    //   '$.inventory.*[?(@.price<2000)].price', 
    //   1500
    // );
    
    // // Get all prices from the inventory
    // const res40b = await redis.json.get(
    //   'bikes:inventory',
    //   '$..price'
    // );
    // console.log(res40b); // [1500, 2072, 3264, 1500, 3941]
    
    // const res41 = await redis.json.arrAppend(
    //     "bikes:inventory", "$.inventory.*[?(@.price<2000)].colors", "pink"
    // );
    // console.log(res41);  //  [3, 3]
    
    // const res42 = await redis.json.get("bikes:inventory", {
    //   path: "$..[*].colors"
    // });
    // console.log(res42);  //  [['black', 'silver', 'pink'], ['black', 'white'], ['black', 'silver', 'pink']]
    
    

}

initJson()