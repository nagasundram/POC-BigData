# MongoDB Setup

https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

#Import Dummy Data

##From JSON
` mongoimport --db test --collection users --drop --file users.json `
##From CSV
` mongoimport -d test -c testusers --type csv --file users.csv -f FirstName,LastName,Email `

#Node Server Setup

``` npm install ```

``` npm start ```
