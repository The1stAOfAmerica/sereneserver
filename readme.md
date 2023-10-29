To run the server run the following int the terminal

```
npm run start
```

how to access the APIs
You can use postman or curl

Get Scores
```
curl --location 'http://localhost:3000/scores?userid=admin1%40gmail.com'
```

Create User

```
curl --location 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data '{
   "name" : "admin",
   "score" : 21
}'
```