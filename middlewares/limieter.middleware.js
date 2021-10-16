const redis = require('redis')
const {RateLimiterRedis} = require('rate-limiter-flexible')

// Create a redis client
const redisOpts = {
    host : process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    enable_offline_queue: process.env.REDIS_ENABLE_OFFLINE_QUEUE
}
const redisClient = redis.createClient(redisOpts)

// instantiate a new rate limiter
const limiterOpts = {
    storeClient: redisClient,
    keyPrefix: 'middleware',
    points: 10, // request by an IP for duration below
    duration: 1
}
const rateLimiter = new RateLimiterRedis(limiterOpts)


// Create a new rate limiter middleware
const limiterMiddleware = (req, res, next)=> {
    rateLimiter.consume(req.ip).then(()=> { next()})
                .catch(()=> { res.status(429).send("Too many request")})
}

// export 
module.exports = limiterMiddleware