mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [
      { role: 'readWrite', db: "$MONGO_INITDB_DATABASE" }
    ]
  })
EOF

PORT= 4000


  MONGO_USERNAME=admin
  MONGO_PASSWORD=secret
  MONGO_HOST=mongo
  MONGO_PORT=27017
  MONGO_DATABASE=task
  MONGO_INITDB_DATABASE=task