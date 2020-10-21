# Name That Pup! - HRLA React Review
Created by Josh Hertz on October 20th, 2020

# INSTRUCTIONS

----
## How to get started
1. Fork and clone down this [repo](https://github.com/JkHz/namethatpup)

2. Open a terminal window and run `npm install` to install dependencies.

3. Next, run `npm start` to start your server. In a separate terminal, use `npm run build` to start Webpack which will watch and auto-transpile your files. **Make sure both of these terminal windows remain open and running**

4. Open a browser window and navigate to `localhost:3000`.

----
## Overview of this repo

* For this project, we'll be practicing our React skills to create a simple app which renders images of dogs to the screen and allows users to give each one a name.

## Checklist of Features to Complete

### Step 1: Connect your React app to the browser

* Render `App.jsx` to our `index.html`.

----
### Step 2: Start writing out `App.jsx` component

* Create **App** as a *stateful/class* component.
* Create a property of state to store an array of pup objects to be rendered to the screen.

----
### Step 3: Create `PupList.jsx` and `PupListEntry.jsx` components

* Create **PupList** and **PupListEntry** as *functional* components, using the provided comments within each file as a guide.

> Leave this hard-coded for now; we will refactor momentarily.

* Render **PupList** within **App**, and **PupListEntry** within **PupList**

----
### Step 4: Check your work

* Make sure you are able to see the hard-coded **PupList** and **PupListEntry** in your browser.

----
### Step 5: Refactor `PupList.jsx` and `PupListEntry.jsx` for variable data

*  **PupList** should render one **PupListEntry** for each pup in the array in **App**'s state

* **PupListEntry** components should be able to conditionally render the pup's image based on what is passed down to it via `props`. Examine the shape of `examplePupData.js` to determine how to do this.

----
### Step 6: Check your work

* Set **App**'s state to a real array of pups, by importing and using `examplePupData.js`
* You should see a rendered list of 5 pups images displayed.

----
### Step 7: Build functionality for user input

* Refactor **PupListEntry** to be a *stateful/class* component. Add a state property which will store the user input and render it to the screen.

<<<<<<< HEAD
* Add a [Form](https://reactjs.org/docs/forms.html) within **PupListEntry** to allow users to input a name for each pup. Remember to provide a place for the name to render ib tge screen.
=======
* Add a Form (*URL*) within **PupListEntry** to allow users to input a name for each pup. Remember to provide a place for the name to render to the screen.
>>>>>>> 698702f9a4e43e4529d6ca65d490f82682f55326

*  When completed, user input should be updated immediately after being typed into the input field.

**OPTIONAL** Add a Submit button that will only update the name after being clicked. You may need to add another state property to handle this.


### Bonus Step: Replace dummy data with real data

* Use the provided function in /lib/getPups.js to issue a GET request to the [Dog API](https://dog.ceo/dog-api/)

* Replace the examplePupData with the data received from the API call.

* When completed, a page refresh should render 5 new pup images.
