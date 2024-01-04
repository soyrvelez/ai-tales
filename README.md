# `AI Tales`
Unlock creativity through the power of AI.

![AI Tales](https://github.com/soyrvelez/ai-tales/blob/main/ai-tales.png?sanitize=true)

## What is it?

This MERN app allows users to create illustrated stories using generative AI technology.

By leveraging the OpenAI API, AI Tales is able to take user input to create an interactive storytelling experience.

AI Tales allows users to:
* Create an account.
* Create characters with custom traits.
* Create short stories based on user prompts.
* Use DALL-E 3 to generate images inspired by these stories.
* Access their user profile for the app.
* Modify their account details.
* Delete their user account.
* Visualize content they have created.
* Explore content generated by other users.


## Installation Instructions
1. Fork and clone this repository.
2. Run `npm install` from your terminal while inside of the project's directory.
3. Set up a `.env` file and add `NEXT_PUBLIC_SERVER_URL` and set it to the URL of your server.
4. Recommended: Do an initial commit and push to your fork.
5. Run your backend server and run `npm run dev`.

### App Wireframes

Go to this [Figma File](https://www.figma.com/file/zB5e5WUy1jtVk99y6afsFr/project-3?type=design&node-id=0%3A1&mode=design&t=ZYFbK5yr6ZOXj9lo-1) to review the app's wireframes.

### User Stories
- As a user I can create an account
- As a user I can create a character and define some of its traits
  - Stretch Goal: Allow users to create multiple characters
  - Stretch Goal: Have AI generate a profile picture for your character
- As a user I can view my character’s profile
- As a user I can edit my character’s traits
- As a user I can delete my character
- As a user I can create a new scene for my character providing input of what I want my character to be doing in the scene.
- As a user I can see a single scene by referencing it’s id
- As a user I can see all the scenes for my character


### Pages

#### Login
![Login Page](https://github.com/soyrvelez/ai-tales/blob/main/login.png?sanitize=true)

The app's user journey begins in a login page where returning users can login or for new users to head to our signup.

#### Signup
![Signup Page](https://github.com/soyrvelez/ai-tales/blob/main/sign-up.png)

The signup page captures a user's information before creating an account for them. Once the user submits the signup form, the following validations occur:
- App checks to see if there are other users using the same email before creating the account.
- Password is encrypted before it's stored in the database.

#### Profile
![User Profile Page](https://github.com/soyrvelez/ai-tales/blob/main/profile.png)

This page displays each user's information, provides them with the tools to edit or delete their account.

#### Character Gallery
![Character Gallery](https://github.com/soyrvelez/ai-tales/blob/main/charactergallery.png?sanitize=true)

This page displays all characters created by the user.

#### Explorer Page
![Explorer Page](https://github.com/soyrvelez/ai-tales/blob/main/explorer.png?sanitize=true)

Social media - like feed that allows users to explore content generated by other users.
