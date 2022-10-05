cd into SoftwareClientFinder

If you want the authentication stuff to work, just follow the setup steps to build a project from scratch.
Or, if you know what you're doing, add the .env.local file or whatever, then have at it.
Make a firebase account with google auth to have google auth.

run: npm install
run: npm run dev

in another terminal,
run: run cypress:open

cypress is used to test individual components or whatever.

setup from scratch:
```gherkin
Scenario You want to create a project to handle authentication for users.

Given you have your project name [YourNextApp]

Then you `mkdir` your directory [YourNextApp]
`mkdir YourNextApp`

When you `cd` into [YourNextApp]
`cd YourNextApp`

Then you should see c:/...../[YourNextApp]

#######################################

Given you wish to install the project with npm 

Then you should run mkdir `node_modules`

Then you can run `npm install next-auth`

Then you should see a `package.json` file and whatever else

#######################################

Given you want a robust default project

And download the files from `https://github.com/nextauthjs/next-auth-example`

And copy and paste the reference `package.json` and `tsconfig.json (because it's ts)` into your working directory.

And copy and paste the reference `components` and `pages` into your working directory

Then you should have the files in your working directory

#######################################

Given you want to launch the project for a dry run

And you run `npm run dev`

Then you should see the project running on `localhost:3000`

#######################################

Given you want to setup your specific 0auth provider

And you have your 0auth credentials [ClientID] and [Client-Secret]

And in the `./pages/api/auth/nextauth.ts` file, set the provider details
IE: 
    GoogleProvider({
      clientId: process.env.GITHUB_ID [this],
      clientSecret: process.env.GITHUB_SECRET [and this],
    })

    ##make sure that the env variables are what they should be. Like their names.

Then you should be able to access `[domain]/api/auth/signin` and GoogleProvider should have a working user flow.

#######################################

Scenario Setting up database adapter to populate with user auth on signin

Given you are using firebase

And you need to add a firebase adapter

And you run `npm install next-auth @next-auth/firebase-adapter`

And you add `import { FirestoreAdapter } from "@next-auth/firebase-adapter"` to your `./pages/api/auth/[...nextauth].ts` file

And you add 

  //set these values explicitly for now
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // Optional emulator config (see below for options)
    emulator: {},})

to the `NextAuthOptions` object

And you set your firebase database rules to

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write
    }
  }
}

Then your user auth flow should populate the firebase db successfully


#authorized domains
http://localhost:3000

#redirect urls
http://localhost:3000/api/auth/callback/google

make sure everything is http. Not https.

you should have an env file like

NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ID= [your google id]
GOOGLE_SECRET=[your google secret]
FIREBASE_API_KEY=[api key]
FIREBASE_AUTH_DOMAIN=[yours]tekonomicshelp.firebaseapp.com
FIREBASE_PROJECT_ID=[yours]tekonomicshelp
FIREBASE_STORAGE_BUCKET=[yours]tekonomicshelp.appspot.com
FIREBASE_MESSAGING_SENDER_ID=[message sender id]
FIREBASE_APP_ID=[app id]
```
