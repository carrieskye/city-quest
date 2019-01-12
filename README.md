# CityQuest

## Setup
To get started clone this repository and the submodules, for git > 2.13 you can do:<br>
`git clone --recurse-submodules -j8 https://github.com/ucll-carey/city-quest.git`

## Running
### Locally without docker
When developing the City Quest application, it might be easier to run all microservices directly (without docker).

You will need mongodb running locally at the default port.

In order to run all services run in the city quest project following:<br>
`npm start`

Any of the services can also be manually started:
```
# frontend
cd frontend
npm start

# backend
cd backend
SPRING_PROFILES_ACTIVE=local gradle bootRun

# image service
cd image-service
SPRING_PROFILES_ACTIVE=local gradle bootRun

# ucll-recommendation-engine (make sure we're using java 1.8)
cd ucll-recommendation-engine
SPRING_PROFILES_ACTIVE=local JAVA_HOME=`/usr/libexec/java_home -v 1.8` gradle bootRun
```
This will start the services at next urls:

- Frontend [http://localhost:3000](http://localhost:3000)
- Backend [http://localhost:8080](http://localhost:8080/games) ([where](http://localhost:8080/games/debug) looks for ucll-recommendation-engine)
- Image-service [http://localhost:8081](http://localhost:8081/leuven)
- ucll-recommendation-engine [http://localhost:8082](http://localhost:8082/recommendation/recommend/larry)

### With docker
To check how it's running on the server you can use `docker-compose up`

This will start the services at next urls:

- Frontend [http://localhost:8080](http://localhost:8080)
- Backend [http://localhost:8080/cityquest/](http://localhost:8080/cityquest/games) ([where](http://localhost:8080/cityquest/games/debug) looks for ucll-recommendation-engine)
- Image-service [http://localhost:8080/imageservice](http://localhost:8080/imageservice/leuven)
- ucll-recommendation-engine [http://localhost:8080/recommendation/](http://localhost:8080/recommendation/recommend/larry)
- Consul [http://localhost:8500/ui/](http://localhost:8500/ui/)
- Mongodb [mvertes/alpine-mongo](https://hub.docker.com/r/mvertes/alpine-mongo/)
- Registrator [docs](http://gliderlabs.github.io/registrator/latest/)
- Traefik [docs](https://docs.traefik.io/)

## Architecture
CityQuest consists of 4 custom services:
- frontend (VueJS application that is served with nginx)
- backend  (Spring boot API)
- image-service (Spring boot API to retreive an image url for a city)
- ucll-recommendation-engine (A generic recommendation engine)

## Statistics
11.05 minutes to build all images from stratch on 2,3GHz Intel Core i5, SSD (mainly due to gradle and npm dependencies)

1.386GB diskspace for building all 20 images (8 active when running, 954.4MB reclaimable)
