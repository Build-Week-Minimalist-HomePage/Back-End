<h1 align="center">Welcome to Minimalist-HomePage Back End</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MmittT-yellow.svg" />
  </a>
</p>

# Back-End

 While having Google as your homepage may be a sensible choice, why not spice it up a little bit? The Minimalist Homepage is exactly what you'd imagine it is: stylish, functional, minimalist and modern. Choose from a set of themes (light, dark, etc) and from a number of widgets (TBD). And of course, the Google search bar will be there too. 

 In this repo, you will find the backend portion of the application.

 Hosted on [Heroku](https://bw-homepage.herokuapp.com/), the RESTful API was built with technologies such as Node.js, Express, and knex.

### 🏠 [Homepage](https://github.com/Build-Week-Minimalist-HomePage/Back-End/blob/master/README.md)
### 📲 [App Page](https://minimalist-homepage.netlify.com)
### 📄 [API Docs](#)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Testing

```sh
npm run test
```

# Auth part

## Register new user

[] POST ==> https://bw-homepage.herokuapp.com/api/auth/register 

```json
{
	"username": "user777",
	"password": "pass123"
}
```

response:

```json
{
    "id": 2,
    "username": "user123",
    "password": "$2a$10$zCFAQgiiL5j7na37wy1xPuRu/XptnRwDzT2/avdiKsG4xSL02FLnC"
}
```

## Login

[] POST ==> https://bw-homepage.herokuapp.com/api/auth/login 

```json
{
	"username": "user777",
	"password": "pass123"
}
```

response:

```json
{
    "message": "Welcome user123!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxMjMiLCJzdWJqZWN0IjoyLCJpYXQiOjE1NzE3OTYzOTQsImV4cCI6MTU3MTgwMzU5NH0.hGnOshaS23mVdufm2jxpjGHkPB83FI3vppTVPwqyMxk"
}
```

## GET list of users {with token}

[] GET ==> http://localhost:5500/api/auth/users

response:

```json
[
    {
        "id": 1,
        "username": "admin",
        "password": "pass"
    },
    {
        "id": 2,
        "username": "user123",
        "password": "$2a$10$zCFAQgiiL5j7na37wy1xPuRu/XptnRwDzT2/avdiKsG4xSL02FLnC"
    }
]
```


# Internal part

## Notes

**GET list of notes {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/notes

**GET note by id {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/notes/:id

**Get note by id for user {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/notes/user/:id

**Add new note {with token}**

[] POST ==> http://bw-homepage.herokuapp.com/api/notes/

```json
{
    "user_id": 1,
    "note": "Some note"
}
```

**Edit note {with token}**

[] PUT ==> http://bw-homepage.herokuapp.com/api/notes/:id

```json
{
    "user_id": 2,
    "note": "Some new note"
}
```

**Delete note {with token}**

[] DELETE ==> http://bw-homepage.herokuapp.com/api/notes/:id



## links

**GET list of links {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/links

**GET link by id {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/links/:id

**Get link by id for user {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/links/user/:id

**Add new link {with token}**

[] POST ==> http://bw-homepage.herokuapp.com/api/links/

```json
{
    "user_id": 1,
    "link_name": "Test",
    "link_url": "https://maps.yahoo.com "
}
```

**Edit link {with token}**

[] PUT ==> http://bw-homepage.herokuapp.com/api/links/:id

```json
{
    "user_id": 3,
    "link_name": "Some new link",
    "link_url": "https://yahoo.com"
}
```

**Delete link {with token}**

[] DELETE ==> http://bw-homepage.herokuapp.com/api/links/:id




## Config

**GET list of configs {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/config

**GET config by id {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/config/:id

**Get config by id for user {with token}**

[] GET ==> http://bw-homepage.herokuapp.com/api/config/user/:id

**Add new config {with token}**

[] POST ==> http://bw-homepage.herokuapp.com/api/config/

```json
    {
        "user_id": 3,
        "theme": "dark",
        "layout": "first",
        "pluginOption1": "op1",
        "pluginOption2": "op2",
        "pluginOption3": "op3",
        "pluginOption4": "op4"
    }
```

**Edit config {with token}**

[] PUT ==> http://bw-homepage.herokuapp.com/api/config/:id

```json
    {
        "user_id": 2,
        "theme": "light",
        "layout": "second",
        "pluginOption1": "op12",
        "pluginOption2": "op23",
        "pluginOption3": "op34",
        "pluginOption4": "op45"
    }
```

**Delete config {with token}**

[] DELETE ==> http://bw-homepage.herokuapp.com/api/config/:id
