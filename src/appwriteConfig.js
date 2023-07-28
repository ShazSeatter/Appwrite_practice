import { Client, Account } from 'appwrite';

// new client object - access point to appwrite project
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64c3a46636ab706a6b77'); // project ID 


export const account = new Account(client); // auth, register, etc users 

export default client;