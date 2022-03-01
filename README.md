# Project Name:
Attend 
​

## Description
Attend is an application where you can easily save and prioritize any type of events you want to attend. It’s your events wishlist and collection of upcoming events that will help you organize your weekends, months and year.

​

## User Interactions

- ***sign-up*** as a user I want to be able to sign up for the app quickly without complications and without providing too much data 
- ***log-in*** as a user I want to be able to log into the app so I can view and check my events
- ***log-out*** as a user I want to be able to log out from the app once I'm done using it so that nobody can see my account
- ***homepage*** as a user I want to see my events list right after I log in and be able to access their details or update them quickly
- ***add an event*** as a user I want to be able to create a event quickly without enter too much data at first
- ***find an event*** as a user I want to be able to find a event that meets my criteria
- ***edit an event*** as a user I want to be able to update previously added events once I have more info about them or just more time 
- ***delete an event*** as a user I want to be able to delete an event I'm no longer interested in


## Models
Event model
```
{
    name: String, 
    img: String,
    category: Enum[Festival, Business, Sports, Health, Cultural)
    date: Date;
    city: String,
    ticketPrice: Number, 
    ticketPurchased: Enum[Yes, No]
    priority: Enum[Top Priority, Must Go, Maybe, If Nothing Better To Do] 
    eventHour: Number;
    organizedBy: String,
    notes: String, 
   
}
```
User model
```
{
    name: String,
    email: String,
    hashedPassword: String,
    city: String,
}
```
## Routes
​
| Name            | Method | Endpoint                      | Description                                            | Body                | Redirects       |
| --------------- | ------ | ----------------------------- | ------------------------------------------------       |-------------------- | --------------- |
| Home            | GET    | /                             | See the main page                                      |                      |                 |
| Log in form     | GET    | /login                        | See the form to log in                                 |                      |                 |
| Log in          | POST   | /login                        | Log in the user                                        | {mail, password}     | /               |
| Sign Up form    | GET    | /signup                       | See the form to sign up                                |                      |                 |
| Sign Up         | POST   | /signup                       | Sign up a user                                         |  {mail, password}    | /profile        |
| Log out         | GET    | /logout                       | Log out a user                                         |                      | /               |
| Home/ delete    | GET    | /event                        | See user's events collection                           |                      |                 |
| Event           | GET    | /:eventid                     | Read events's information                              |                      |                 |
| Search form     | GET    |                               |                                                        |                      |
| Search          | POST   |                               |                                                        |                      |
| Event add form  | GET    | /event/new                    | See form to upload a new event                         |                      |                 |
| Event add       | POST   | /event/new                    | Upload an event to user's collection                   |                      | /events/eventid |
| Event edit form | GET    | /events/:eventid/edit         | See edit form with events preloaded information        |                      |                 |
| Event edit      | POST   | /events/:eventid/edit         | Add events new information                             |                      | /events/eventid  
| Event delete    | POST   | /events/:eventid/delete       | Delete events from user's collection                   |                      | /events  




This repository is the REST API for the [frontend repository XXX](link). It allows users to...

### setup .env

you need to setup the `.env` like `.env.sample`
​

### Install the app

```
npm install
```

​

### Run the app

```
npm run start
```

​

## Links

- [Slides]()
- [Frontend repository]()
- [Deployed version]()
