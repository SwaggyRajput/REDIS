------------------------------REDIS ------------------------------------------------------
# Redis can be used as a database, cache, streaming engine, message broker, and more.
# It is a NoSQL database, meaning it does not use the traditional table-based relational model.



-------------------------------REDIS IMAGE ON DOCKER------------------------------------------------------
To get started with Redis Stack using Docker, you first need to select a Docker image:

# redis/redis-stack contains both Redis Stack server and Redis Insight. This container is best for local development because you can use the embedded Redis Insight to visualize your data.

To start Redis Stack server using the redis-stack-server image, run the following command in your terminal:
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest

# redis/redis-stack-server provides Redis Stack server only. This container is best for production deployment.

To start a Redis Stack container using the redis-stack image, run the following command in your terminal:
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

#The docker run command above also exposes Redis Insight on port 8001. You can use Redis Insight by pointing your browser to localhost:8001.
docker ps #TO check running docker containers
docker exec -it <container_id> bash #To execute container or enter in container
redis-cli #To run redis commands as terminal connects with redis server

------------------------------REDIS STRINGS------------------------------------------------------
#Redis strings store sequences of bytes, including text, serialized objects, and binary arrays.
# set name Harsh # set <key> <value>
# set age 18
get name # get <key>
set user:1 Harsh #set <key>:<id> value || redis groups key in user
get user:1 #get <key>:<id> value
set name Harsh nx #set if key doesn't exist
set user:1 Harsh xx #set if key exists
mget user:1 user:2 #multiple get operation
mset user:1 Harsh user:2 Rahul # set multiple keys
msetnx user:1 Harsh user:2 Rahul #set multiple keys if all keys don
set count 0 #set counter to 0
incr count # increment counter by 1
incrby count 2 # increment counter by 2
decr count # decrement counter by 1
decrby count 2 # decrement counter by 2


------------------------------REDIS LIST------------------------------------------------------


Redis lists are linked lists of string values. Redis lists are frequently used to:

# mplement stacks and queues.
#Build queue management for background worker systems.
#Basic commands--->
LPUSH   #adds a new element to the head of a list;  # lpush message Hey
RPUSH # adds to the tail.  # rpush message Hii
LPOP    #removes and returns an element from the head of a list; RPOP   does the same but from the tails of a list.
LLEN    #returns the length of a list.
LMOVE   #atomically moves elements from one list to another.
LRANGE  #extracts a range of elements from a list. # lrange message 0 2
LTRIM   #reduces a list to the specified range of elements. # ltrim messsage 0 1

#Blocking commands--->
Lists support several blocking commands. For example:
BLPOP   #removes and returns an element from the head of a list. If the list is empty, the command blocks until an element becomes available or until the specified timeout is reached.
BLMOVE  #atomically moves elements from a source list to a target list. If the source list is empty, the command will block until a new element becomes available.

NOTE--->LPUSH+RPOP #QUEUE
NOTE-->LPUSH+LOP #STACK


------------------------------REDIS SET------------------------------------------------------

A Redis set is an unordered collection of unique strings (members). You can use Redis sets to efficiently:

#Track unique items (e.g., track all unique IP addresses accessing a given blog post).
#Represent relations (e.g., the set of all users with a given role).
#Perform common set operations such as intersection, unions, and differences.
#Basic commands--->
SADD #adds a new member to a set.
SREM #removes the specified member from the set.
SISMEMBER #tests a string for set membership.
SINTER #returns the set of members that two or more sets have in common (i.e., the intersection).
SCARD #returns the size (a.k.a. cardinality) of a set.


------------------------------REDIS JSON------------------------------------------------------
json.set  #set a json object
json.get  #get a json object
json.strlen 
json.strappend
json.numincrby
json.nummultby
json.arrtrim
json.arrinsert
json.del
json.arrpop
json.objlen
json.objkeys

