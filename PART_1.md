## 1. What is a URL shortening system?

```
The URL shortening system is a service that allows when a user enters a very long address to take that address and convert it into a shorter address that will only aim to redirect to a long address.
```

## 2. What's the main value? Who needs such a system and why?

```
The main advantage is that the user does not have to copy a long URL address, but copies and shares a shorter version.
Some sites are limited to characters, which is important for social networks and commerce sites.
```

## 3. Describe The main mechanism of work and system components.

```
The URL shortening system works mainly by sending a long URL from the front-end part of the application, i.e. the client, through a form.
Then the server takes that URL and creates a shortcode that is stored in the database.
At the same time, when a link with a generated short code is requested, the server finds a longer URL in the database and redirects to that URL.
```

## 4. What do you think are the main challenges in implementing and running the system

```
The key challenges for such systems are the management of a large amount of data, the database must be well structured, data abuse should be prevented and consistency should be ensured for the generated ID-s.
```

## 5. Try to suggest some ideas for advanced features.

```
Advanced things with such systems can be well-crafted analytics, how user clicks are tracked and the addresses entered are checked whether they are correct or not.
```
