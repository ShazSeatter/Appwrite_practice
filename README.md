# Authentication practice 

Practice using Vite/React and Appwrite to learn about authentication 

Logins and authentication is used is most web applications so I wanted to learn and practice what the code entailed to do this process

### Tutorial from: https://www.youtube.com/watch?v=pGNxoIoLt_Y&ab_channel=DennisIvy 

I used starter boiler code provided by Dennis Ivy that had the front end built already so that there could be a focus on learning the code to integrate Appwrite and authenticate a user 

### Learning points

- More practice with react routers (found this challenging to understanding previous, this gave better insight into how react-router-dom works and its uses, especially using useNavigation and creating private routes to only be accessed one a user has signed in successfully)

- Used createContext for the first time - this was used for user authentication component, using this in react allowed me to generate all the logic and functions for user login in and registration and I could have access to these functions by exporting a function called useContext and pass in the component that contained all the functions  

- Form handling

- Persisting data to Appwrite to save new registered users and keep users still logged in even when the page is refreshed

- Log out user by deleting current session

