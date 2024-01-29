# Geo points exercise 

This is a sample for a Domain Driven Design (DDD) approach of a simple business problem. Written in TypeScript for an Express server with Node.js.

# Summary

#### Possible Improvements
#### Layers 
#### Run the application 
#### Request samples 


# Possible Improvements

- Using a Node.js framework to allow built-in dependency injection and a better separation of concerns based on “depend on abstractions not implementation” principle. Note that I use Interfaces for Infrastructure layer.

- Using a Node.js framework to allow built-in routing capabilities. 

- Improve error handling. 


# Layers 

- API
- Application
- Domain
- Infrastructure
- Helpers



# Run the application 

- Clone git repo

- Run `npm i`

- Run `npm build`

- Run `npm start`


# Request samples 

- `POST - /api/pointsOfInterest`


```
{
   "username": "boris",
   "company" : "PHYSARO",
   "coordinates" : {
       "latitude" : 2,
       "longitude" : 10
   }
}
```

- `POST - /api/getDistance`

```
[
    {
    "username": "boris",
    "company" : "PHYSARO",
    "coordinates" : {
        "latitude" : -44.2321,
        "longitude" : 101.21312312
        }
    },
    {
    "username": "boris",
    "company" : "PHYSARO",
    "coordinates" : {
        "latitude" : 78.12312312,
        "longitude" : 10.123123
        }
    }
]
```
