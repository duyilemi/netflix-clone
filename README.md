# Netflix Clone

website [Netflix Clone](https://netflix-clone-d64be.web.app/)


## Description

A full-stack website where customers can pay a monthly subscription fee to access site's premium features

Accepting payments online can seem like a daunting task, with considerations such as security, conversion rates and tax, there is a lot to consider.
In this project, we'll use firebase stripe extension to simplify the process of taking subscription payments online and how we can exclusively provide paying customers access to premium content.


## Getting Started

Before we get started integrating Stripe into our application, you'll need to set up a Stripe account for yourself and set up your stripe business with valid information including a business name, if you don't have one already.

Once you've done that, we'll navigate to the Run Subscription Payments With Stripe Firebase Extension page.

Firebase Extensions are pre-packaged solutions that help you implement specific features within Firebase much more quickly and easily.

This extension syncs customers' subscription status with your Cloud Firestore, and adds metadata to users inside your Firebase Authentication, so that you can easily tell who is a paying customer and who is still on the free tier; all within Firebase.

This way, we'll be able to show premium content exclusively to our paying customers.

One thing to note before we install this extension: To use Cloud functions (which are part of this extension), requires the Blaze plan, which is the pay-as-you-go plan of Firebase.

It's unlikely that you'll incur any cost more than a few cents (or maybe dollars) unless you have a significant user base, but you should always set-up budgets and budget alerts to make sure you don't blow the bank.

To install the extension, click the Install In Console button.

### Built with

* ReactJs - A JavaScript library for building user interfaces
* Redux - A predictable state container for JavaScript apps
* TMDB - The Movie database API
* Firebase - an app development platform
* Google Authetication
* Stripe

### Prerequisites

* Authentication in Firebase
* Firestore Database in Firebase
* Stripe Account, and a subscription product to go with it
* Synchronised products with Stripe and our Firestore Database
* Set up a way of accepting subscription payments with Stripe
* Synchronised customer and subscription data between Stripe and Firebase
* Added custom claims to Firebase users to determine whether they are free or premium customers


### `npm install`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

