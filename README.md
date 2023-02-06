# **_League Hub - Project Portfolio 5 - Advanced Front End (React)_**

League Hub is an online resource for people around the world to easily access and view information about the popular game League of Legends. In it's current iteration, users can search, filter and view Champions associated with the game and consume information about that champion. A user will be able to upvote a champion if they wish to do so and also leave a comment about that champion for everyone to see. Staff members of the League Hub will be responsible for content control and will be able to create, edit and delete champions as well as having the ability to delete inappropriate comments by users. Overall, the goal of this project is to provide a comprehensive and accessible source of information for League of Legends enthusiasts.

You can view the live site here - <a href="https://ci-league-hub.herokuapp.com/" target="_blank" rel="noopener">League Hub</a>

![League Hub responsive design](/src/assets/readme_images/responsive-preview.png)

# Contents

- [**Objective**](#objective)
- [**User Experience UX**](#user-experience-ux)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design Prototype](#design-prototype)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)
  - [Typography](#typography)
  - [Colour Scheme](#colour-scheme)
  - [Project Management](#project-management)
- [**Existing Features**](#existing-features)
  - [Informative Splash Page](#informative-splash-page)
  - [Responsive Navigation Bar](#responsive-navigation-bar)
  - [Search Bar](#search-bar)
  - [Role Icons](#role-icons)
  - [Champion Card](#champion-card)
  - [Account Creation](#account-creation)
  - [Profile Page](#profile-page)
  - [Page Not Found](#page-not-found)
  - [Champion Create](#champion-create)
  - [Champion Edit](#champion-edit)
  - [Champion Delete](#champion-delete)
  - [Champion Information Page](#champion-information-page)
  - [Comments](#comments)
  - [Upvoting](#upvoting)
  - [Leaderboard](#leaderboard)
  - [Notifications](#notifications)
- [**Future Features**](#future-features)
  - [Future Feature 1](#future-feature-1)
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)
- [**Deployment To Heroku**](#deployment-to-heroku)
- [**Cloning This Project**](#cloning-and-setting-up-this-project)
- [**Credits**](#credits)
  - [**Content**](#content)
  - [**Media**](#media)
- [**Acknowledgments**](#acknowledgements)

# Objective

For my fifth and final project, I intend to create an online resource for League of Legends enthusiasts where they can glean information about the champions, interact with the community, vote for their favourite champions and more. The main objective is to demonstrate a proficient understanding in creating a website that uses React JS for the front end and Django REST framework for the backend whilst adhering to agile methodologies, showcasing a strong focus on design and providing a positive user experience.

[Back to top](#contents)

# User Experience (UX)

## Project Goals

1 - Build a project to help users gain knowledge about League of Legends <br>
2 - Ensure the project is fully responsive to cater for all user device screen sizes <br>
3 - Design an intuitive layout that promotes a positive user experience <br>
4 - Implement a theme that compliments the project <br>
5 - Allow users to quickly search for a champion <br>
6 - Allow users to filter champions by role <br>
7 - Give the users the ability to upvote and remove the upvote on a champion <br>
8 - Give the users the ability to view a champion leaderboard <br>
9 - Give the users the ability to create/edit and delete a comment on a champion <br>
10 - Allow staff members to be able to manage the website <br>
11 - Ensure users don't have access to staff member features <br>
12 - Require users to have an account to access additional features <br>

## User Stories

| User type            | User story                                                                                                                           | Project Goal  | State   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------- |
| As a logged out user | I can create a new account via the sign up page which can be accessed via the navigation bar                                         | 1, 3, 11 12   | &check; |
| As a logged out user | I can view all champion cards that when clicked will navigate me to the champion page which displays information about that champion | 1, 2, 3, 4    | &check; |
| As a logged out user | I can see all the champion cards on the champion select page                                                                         | 1, 2, 3, 4    | &check; |
| As a logged out user | I can filter my search when looking for a champion                                                                                   | 2, 3, 4, 5, 6 | &check; |
| As a logged out user | I can view all comments left by users on a champion page but not be able to comment until I have created an account                  | 3, 12         | &check; |
| As a logged out user | I should be able to log into the website when I have created a valid account                                                         | 11, 12        | &check; |
| As a logged in user  | I can upvote a champion if I wish to do so                                                                                           | 7, 12         | &check; |
| As a logged in user  | I can view the champion upvote leaderboard to see how all the champions are ranked against each other                                | 8, 12         | &check; |
| As a logged in user  | I can leave a comment about a champion on the champion page                                                                          | 9, 12         | &check; |
| As a logged in user  | I can delete a comment that I have created on the champions page                                                                     | 9, 12         | &check; |
| As a logged in user  | I should be able to log out of the website                                                                                           | 3, 12         | &check; |
| As a logged in user  | I should be able to remove my upvote from a champion if I wish to do so                                                              | 7, 12         | &check; |
| As a logged in user  | I can update my profile information such as my first name, last name and avatar image                                                | 12            | &check; |
| As a logged in user  | I can view my profile page that displays information about my profile                                                                | 3, 12         | &check; |
| As a staff member    | I must have the ability to update the champions information so I can provide the most up to date information for consumers           | 10, 11        | &check; |
| As a staff member    | I must have the ability to delete a champion if necessary                                                                            | 10, 11        | &check; |
| As a staff member    | I must have the ability to be able to delete any inappropriate comments submitted by users                                           | 10, 11        | &check; |

<br />

[Back to top](#contents)

## Design Prototype

When I decided that I wanted to create this project, as I've used [Figma](https://www.figma.com/) in my previous projects, I felt comfortable enough to start designing my project using this tool. As you can see in the image below, I created 3 pages, the home page, the main champion page which stores all the information and then an icons page where I can store the icons for quick reference. Because of these 3 pages, I was able to quickly created pages for the website that followed this exact theme.

![Figma Design](/src/assets/readme_images/figma-design.png)

<br />

[Back to top](#contents)

## Components

This project was created using React which allows for the re-use of components throughout the application. A react component is able to perform a multitude of operations such as render elements on a page, display data, handle events/user interactions, communicate to other components via props and much more.<br /><br />

I've created a React Component Tree diagram for the League Hub so we can easily see the hierarchical order of each component, also known as a parent/child relationship

<br />

![Component Tree](/src/assets/readme_images/component-tree.png)

## Design Choices

- ### Typography

  The fonts chosen for this project have been a combination of both DM Sans for informative/long text and then I used Bungee for the names, headlines and titles. Different font sizes have been used throughout the website where appropriate. All fonts will fall back to sans-serif if the DM Sans or Bungee fonts can't be loaded.

- ### Colour Scheme

  The colour scheme that I decided to use consisted of rich black, light french beige, raisin black and white. This colour scheme gives off a very League of Legends style feeling which promotes a positive user experience.

  ![Colour Theme](/src/assets/readme_images/colour-theme.png)

  <br />

## Project Management

- ### GitHub Project Board

  To manage this project I utilised the GitHub project management features. I created a Kanban board so I could organise and manage my issues/tasks for the project and maintain a solid understanding of what is required to complete the project <br />

  Furthermore, when adding my user stories, I decided to take advantage of the milestone feature and I added my EPICS there so I could manage the basic user stories required for release

  ![Project Board](/src/assets/readme_images/league-hub-project-board.png)

  <br>

  ![Milestones](/src/assets/readme_images/league-hub-milestones.png)

## Existing Features

- ### Informative Splash Page

  - Description. <br />

  ![Splash Page](/src/assets/readme_images/splash-page-1.png)

  <br />

- ### Responsive Navigation Bar

  - Description. <br />

  ![Nav Bar 1](/src/assets/readme_images/nav-bar-1.png)

  ![Nav Bar 2](/src/assets/readme_images/nav-bar-2.png)

  ![Nav Bar 3](/src/assets/readme_images/nav-bar-3.png)

  ![Nav Bar 4](/src/assets/readme_images/nav-bar-4.png)

  <br />

- ### Search Bar

  - Description. <br />

  ![Search Bar 1](/src/assets/readme_images/search-bar-1.png)

  ![Search Bar 2](/src/assets/readme_images/search-bar-2.png)

  ![Search Bar 3](/src/assets/readme_images/search-bar-3.png)

  <br />

- ### Role Icons

  - Description. <br />

  ![Role Icons 1](/src/assets/readme_images/role-icons-1.png)

  ![Role Icons 2](/src/assets/readme_images/role-icons-2.png)

  ![Role Icons 3](/src/assets/readme_images/role-icons-3.png)

  ![Role Icons 4](/src/assets/readme_images/role-icons-4.png)

  ![Role Icons 5](/src/assets/readme_images/role-icons-5.png)

  ![Role Icons 6](/src/assets/readme_images/role-icons-6.png)

  <br />

- ### Champion Card

  - Description. <br />

  ![Champion Card](/src/assets/readme_images/champ-card-1.png)

  <br />

- ### Account Creation

  - Description. <br />

  ![Account Creation 1](/src/assets/readme_images/account-creation-1.png)

  ![Account Creation 2](/src/assets/readme_images/account-creation-2.png)

  <br />

- ### Profile Page

  - Description. <br />

  ![Profile Page 1](/src/assets/readme_images/profile-page-1.png)

  ![Profile Page 2](/src/assets/readme_images/profile-page-2.png)

  ![Profile Page 3](/src/assets/readme_images/profile-page-3.png)

  <br />

- ### Page Not Found

  - Description. <br />

  Image to be added

  <br />

- ### Champion Create

  - Description. <br />

  ![Champion Create 1](/src/assets/readme_images/champion-create-1.png)

  ![Champion Create 2](/src/assets/readme_images/champion-create-2.png)

  <br />

- ### Champion Edit

  - Description. <br />

  ![Champion Edit 1](/src/assets/readme_images/champion-edit-1.png)

  ![Champion Edit 2](/src/assets/readme_images/champion-edit-2.png)

  <br />

- ### Champion Delete

  - Description. <br />

  ![Champion Delete 1](/src/assets/readme_images/champion-delete-1.png)

  ![Champion Delete 2](/src/assets/readme_images/champion-delete-2.png)

  <br />

- ### Champion Information Page

  - Description. <br />

  ![Champion Info Page 1](/src/assets/readme_images/champion-page-1.png)

  ![Champion Info Page 2](/src/assets/readme_images/champion-page-2.png)

  ![Champion Info Page 3](/src/assets/readme_images/champion-page-3.png)

  ![Champion Info Page 4](/src/assets/readme_images/champion-page-4.png)

  ![Champion Info Page 5](/src/assets/readme_images/champion-page-5.png)

  ![Champion Info Page 6](/src/assets/readme_images/champion-page-6.png)

  <br />

- ### Comments

  - Description. <br />

  ![Comment 1](/src/assets/readme_images/comment-feature-1.png)

  ![Comment 2](/src/assets/readme_images/comment-feature-2.png)

  <br />

- ### Upvoting

  - Description. <br />

  ![Upvoting 1](/src/assets/readme_images/upvote-feature-1.png)

  ![Upvoting 2](/src/assets/readme_images/upvote-feature-2.png)

  ![Upvoting 3](/src/assets/readme_images/upvote-feature-3.png)

  <br />

- ### Leaderboard

  - Description. <br />

  ![Leaderboard](/src/assets/readme_images/leaderboard-1.png)

  <br />

- ### Notifications

  - Description. <br />

  ![Notification 1](/src/assets/readme_images/notification-1.png)
  ![Notification 2](/src/assets/readme_images/notification-2.png)
  ![Notification 3](/src/assets/readme_images/notification-3.png)

  <br />

[Back to top](#contents)

- ## Future Features

- ### Future Feature 1

  - Future Feature 1

# Technologies Used

## Languages

- [JavaScript](https://www.javascript.com/) - A dynamic programming language that's used for web development
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - A markup language used for structuring and presenting content
- [CSS3](https://en.wikipedia.org/wiki/CSS) - A style sheet language used for describing the presentation of a document

## Libraries and Frameworks

- [React](https://reactjs.org/) - Advanced front-end JavaScript library for building user interfaces
- [Bootstrap](https://getbootstrap.com/) - Popular CSS Framework for developing responsive and mobile-first websites
- [Font Awesome](https://fontawesome.com/) - A font and icon toolkit based on CSS
- [Google Fonts](https://fonts.google.com/) - A library of 1482 open source font families and APIs for convenient use via CSS

## NPM Packages / Dependencies

- [axios](https://www.npmjs.com/package/axios) - HTTP client for making network requests.
- [jwt-decode](https://jwt.io/) - Library for decoding JWT tokens.
- [react-bootstrap](https://react-bootstrap.github.io/) - React components for using Bootstrap with React.
- [react-dom](https://reactjs.org/docs/react-dom.html) - React library for rendering components on the DOM
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Component for implementing infinite scrolling in React.
- [react-modal](https://www.npmjs.com/package/react-modal) - Library for creating modal dialogs in React.
- [react-notifications](https://www.npmjs.com/package/react-notifications) - Library for displaying notifications in React.
- [react-paginate](https://www.npmjs.com/package/react-paginate) - Library for creating pagination controls in React.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Library for routing in single-page applications.
- [react-scripts](https://www.npmjs.com/package/react-scripts) - Scripts for creating and building React projects with Create React App.
- [web-vitals](https://web.dev/vitals/) - Library for measuring web performance metrics.

## Other Tools

- [a11y](https://color.a11y.com/Contrast/) - Used to test the contrast and accessibility.
- [Favicon](https://favicon.io/) - Used to create the favicon.
- [VSCode](https://code.visualstudio.com/) - Used to create and edit the website.
- [GitHub](https://github.com/) - Used to host and deploy the website as well as manage the project.
- [GitBash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>) - Terminal used to push changes to the GitHub repository.
- [removebg](https://www.remove.bg/) - Used to remove background images.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to test responsiveness and debug.
- [Responsive Design Checker](https://www.responsivedesignchecker.com/) - Used to test responsiveness.
- [Figma](https://www.figma.com/) - Used to create mock-up designs.
- [Heroku](https://dashboard.heroku.com) - Used to deploy the website
- [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code
- [Microsoft Paint](https://en.wikipedia.org/wiki/Microsoft_Paint) - Used to create/edit images for the website

[Back to top](#contents)

# Testing

- ## Code Validation

  ![JSX Compiler](/src/assets/readme_images/jsx-compiler.png)

- ## Lighthouse Testing

  ![Lighthouse Desktop](/src/assets/readme_images/lighthouse-desktop.png)

  <br>

  ![Lighthouse Mobile](/src/assets/readme_images/lighthouse-mobile.png)

  Performance to be improved

- ## Accessibility Testing

  - I put the website through the [a11y](https://color.a11y.com/Contrast/) to test if there was any conflicting contrast issues with the colours selected but found no errors

  ![a11y](/src/assets/readme_images/a11y.png)

  <br /><br />

- ## Responsiveness Testing

  - Responsive testing [Responsive Design Checker](https://www.responsivedesignchecker.com/).<br /><br />

- ## Manual Testing Pages

| Page             | Expected Result                                                                                                   | Pass/Fail |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |
| Splash           | Loading the website renders the splash page                                                                       | Pass      |
| Splash           | The navigation and the footer components don't load                                                               | Pass      |
| Splash           | The feature icons display the relavent tooltip when the user hovers over one                                      | Pass      |
| Splash           | Hovering over the continue button turns the button gold                                                           | Pass      |
| Splash           | Clicking the continue button navigates the user to the home page                                                  | Pass      |
| Home             | The navigation bar is displayed to the user and all functionality works as per the navigation manual tests        | Pass      |
| Home             | The role icons are displayed to the user and all functionality works as per the role icon manual tests            | Pass      |
| Home             | The champion cards are displayed to the user and all functionality works as per the role icon manual tests        | Pass      |
| Champion Page    | The correct champion image is displayed to the user                                                               | Pass      |
| Champion Page    | The correct champion name is displayed to the user                                                                | Pass      |
| Champion Page    | The correct champion alias is displayed to the user                                                               | Pass      |
| Champion Page    | The edit champion icon is only displayed to staff members only                                                    | Pass      |
| Champion Page    | Clicking the edit champion icon loads the ChampionEdit component with the correct data                            | Pass      |
| Champion Page    | The delete champion icon is only displayed to staff members only                                                  | Pass      |
| Champion Page    | Clicking the delete champion icon loads a modal to the user                                                       | Pass      |
| Champion Page    | Clicking "delete" when the delete modal pops up deletes the champion and returns the user to the home page        | Pass      |
| Champion Page    | Clicking "cancel" when the delete modal pops up cancels the modal and returns the user to the Champion page       | Pass      |
| Champion Page    | The correct champion lore is displayed to the user                                                                | Pass      |
| Champion Page    | The correct passive ability image is displayed to the user                                                        | Pass      |
| Champion Page    | The correct passive ability name is displayed to the user                                                         | Pass      |
| Champion Page    | The correct passive ability description is displayed to the user when they hover over the passive ability image   | Pass      |
| Champion Page    | The correct ability 1 image is displayed to the user                                                              | Pass      |
| Champion Page    | The correct ability 1 name is displayed to the user                                                               | Pass      |
| Champion Page    | The correct ability 1 description is displayed to the user when they hover over the ability 1 image               | Pass      |
| Champion Page    | The correct ability 2 image is displayed to the user                                                              | Pass      |
| Champion Page    | The correct ability 2 name is displayed to the user                                                               | Pass      |
| Champion Page    | The correct ability 2 description is displayed to the user when they hover over the ability 2 image               | Pass      |
| Champion Page    | The correct ability 3 image is displayed to the user                                                              | Pass      |
| Champion Page    | The correct ability 3 name is displayed to the user                                                               | Pass      |
| Champion Page    | The correct ability 3 description is displayed to the user when they hover over the ability 3 image               | Pass      |
| Champion Page    | The correct ultimate ability image is displayed to the user                                                       | Pass      |
| Champion Page    | The correct ultimate ability name is displayed to the user                                                        | Pass      |
| Champion Page    | The correct ultimate ability description is displayed to the user when they hover over the ultimate ability image | Pass      |
| Champion Page    | The correct champion class image is displayed to the user                                                         | Pass      |
| Champion Page    | The correct champion class text is displayed to the user                                                          | Pass      |
| Champion Page    | The correct champion range image is displayed to the user                                                         | Pass      |
| Champion Page    | The correct champion range text is displayed to the user                                                          | Pass      |
| Champion Page    | The correct champion difficulty image is displayed to the user                                                    | Pass      |
| Champion Page    | The correct champion difficulty text is displayed to the user                                                     | Pass      |
| Champion Page    | The upvoting functionality works as per the upvoting manual tests                                                 | Pass      |
| Champion Page    | The comments are displayed to the user and all functionality works as per the comments manual tests               | Pass      |
| Sign In Page     | Clicking the username input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign In Page     | Clicking the password input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign In Page     | Clicking the sign in button will sign the user in if correct credentials have been entered                        | Pass      |
| Sign In Page     | Clicking the sign in button will not sign the user in if incorrect credentials have been entered                  | Pass      |
| Sign In Page     | Clicking the "sign up" text will navigate the user to the sign up page                                            | Pass      |
| Sign Up Page     | Clicking the username input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign Up Page     | Clicking the password input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign Up Page     | Clicking the confirm password input box allows the user to input alphanumeric characters                          | Pass      |
| Sign Up Page     | Clicking the sign up button will sign the user up if correct credentials have been entered                        | Pass      |
| Sign Up Page     | Clicking the "sign in" text will navigate the user to the sign in page                                            | Pass      |
| Profile Page     | Clicking the profile avatar image will allow the user to select a new image for their profile avatar              | Pass      |
| Profile Page     | Selecting a new image for the profile avatar will render the save button                                          | Pass      |
| Profile Page     | Clicking the save button on the profile avatar will deal with the image update request to the API                 | Pass      |
| Profile Page     | Clicking the edit button will allow the user to edit the first name and last name input fields                    | Pass      |
| Profile Page     | Changing the value of the first name or last name renders the save button                                         | Pass      |
| Profile Page     | Clicking the save button will deal with the update request to the API                                             | Pass      |
| Leaderboard Page | The first 10 most upvoted champions are rendered to the user                                                      | Pass      |
| Leaderboard Page | Hovering over a row in the leaderboard turns the row gold                                                         | Pass      |
| Leaderboard Page | Clicking the pagination button renders the next correct 10 champions to the user                                  | Pass      |
| Champion Create  | The champion create page renders all the relevant input fields for a staff member to create a champion            | Pass      |
| Champion Create  | All the champion create input fields perform the correct functionality (text, dropdown, image)                    | Pass      |
| Champion Create  | Clicking the create button sends the create request to the API                                                    | Pass      |
| Champion Edit    | The champion edit page renders all the relevant input fields for a staff member to edit a champion                | Pass      |
| Champion Edit    | All the champion edit input fields perform the correct functionality (text, dropdown, image)                      | Pass      |
| Champion Edit    | Clicking the update button sends the edit request to the API                                                      | Pass      |

- ## Manual Testing Features

| Feature       | Expected Result                                                                                                                                                 | Pass/Fail |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Navigation    | The logo appears on the left hand side                                                                                                                          | Pass      |
| Navigation    | The logo redirects the user to the /home page when clicked                                                                                                      | Pass      |
| Navigation    | The search bar is positioned in the middle of the navigation bar                                                                                                | Pass      |
| Navigation    | The avatar icon appears on the right hand side                                                                                                                  | Pass      |
| Navigation    | When the user is logged out, the golden head and shoulders avatar is rendered                                                                                   | Pass      |
| Navigation    | When the user is logged in, the users profile avatar is rendered                                                                                                | Pass      |
| Navigation    | When the user is logged out, clicking the avatar opens a dropdown menu with "Sign In" and "Sign Up" options                                                     | Pass      |
| Navigation    | If a logged out users clicks "Sign Up" it redirects the user to the /signup page                                                                                | Pass      |
| Navigation    | If a logged out users clicks "Sign In" it redirects the user to the /signin page                                                                                | Pass      |
| Navigation    | When the user is logged in, clicking the avatar opens a dropdown menu with "Home", "Profile", "Leaderboard" and "Log Out" options                               | Pass      |
| Navigation    | If a logged in users clicks "Home" it redirects the user to the /home page                                                                                      | Pass      |
| Navigation    | If a logged in users clicks "Profile" it redirects the user to the /profile/{profile_id} page                                                                   | Pass      |
| Navigation    | If a logged in users clicks "Leaderboard" it redirects the user to the /leaderboard page                                                                        | Pass      |
| Navigation    | If a logged in users clicks "Log Out" it redirects the user to the /home page and logs the user out                                                             | Pass      |
| Navigation    | When a staff is logged in, clicking the avatar opens a dropdown menu with "Home", "Profile", "Leaderboard", "Create" and "Log Out" options                      | Pass      |
| Navigation    | If a staff member clicks "Create", it redirects the staff member to the /create page                                                                            | Pass      |
| Navigation    | If a non-staff member tries to visit the /create url, it will redirect them to the /home page                                                                   | Pass      |
| Navigation    | As a non-staff member, the staff crown icon should not appear next to their name in the dropdown menu                                                           | Pass      |
| Navigation    | As a staff member, the staff crown icon should appear next to their name in the dropdown menu                                                                   | Pass      |
| Search Bar    | When a user types an alphanumeric character/word in the search bar, the API filters the request as per the text entered                                         | Pass      |
| Search Bar    | When a user types an alphanumeric character/word in the search bar, if there are not results then "no champions found..." text is displayed                     | Pass      |
| Role Icon     | Hovering over the top icon applies a golden glow to the icon and a tooltip that says "Filter by top role"                                                       | Pass      |
| Role Icon     | Hovering over the jungle icon applies a golden glow to the icon and a tooltip that says "Filter by jungle role"                                                 | Pass      |
| Role Icon     | Hovering over the middle icon applies a golden glow to the icon and a tooltip that says "Filter by mid role"                                                    | Pass      |
| Role Icon     | Hovering over the adc icon applies a golden glow to the icon and a tooltip that says "Filter by adc role"                                                       | Pass      |
| Role Icon     | Hovering over the support icon applies a golden glow to the icon and a tooltip that says "Filter by support role"                                               | Pass      |
| Role Icon     | Clicking the top role icon applies the golden glow and filters the champion cards by the top role                                                               | Pass      |
| Role Icon     | Clicking the jungle role icon applies the golden glow and filters the champion cards by the jungle role                                                         | Pass      |
| Role Icon     | Clicking the middle role icon applies the golden glow and filters the champion cards by the middle role                                                         | Pass      |
| Role Icon     | Clicking the adc role icon applies the golden glow and filters the champion cards by the adc role                                                               | Pass      |
| Role Icon     | Clicking the support role icon applies the golden glow and filters the champion cards by the support role                                                       | Pass      |
| Role Icon     | Clicking any of the role icons again after the filter has been applied will remove the filter and all champions will be displayed                               | Pass      |
| Champion Card | The champion card contains the champion image                                                                                                                   | Pass      |
| Champion Card | The champion card contains the champion name                                                                                                                    | Pass      |
| Champion Card | Clicking the champion card will render the /champion/{id} page that contains all the data about that champion                                                   | Pass      |
| Upvoting      | As a logged out user, clicking the upvote icon does not upvote the champion                                                                                     | Pass      |
| Upvoting      | As a logged out user, hovering over the upvote icon shows a tooltip that says "Log in to cast your vote!"                                                       | Pass      |
| Upvoting      | As a logged out user, the upvote text to the left says "Do you like this champion? Make sure to log in so you can cast your vote!"                              | Pass      |
| Upvoting      | As a logged in user, clicking the upvote icon upvotes the champion and increases the upvote_count by 1                                                          | Pass      |
| Upvoting      | As a logged in user, clicking the downvote icon downvotes the champion and decreases the upvote_count by 1                                                      | Pass      |
| Upvoting      | As a logged in user that hasn't upvoted, hovering over the upvote icon shows a tooltip that says "Click to upvote this champion!"                               | Pass      |
| Upvoting      | As a logged in user that has upvoted, hovering over the downvote icon shows a tooltip that says "Click to downvote this champion"                               | Fail      |
| Upvoting      | As a logged in user that hasn't upvoted, the text to the left says "Do you like this champion? Make sure you up-vote it by clicking the arrow if you do!"       | Pass      |
| Upvoting      | As a logged in user that has upvoted, the text to the left says "Great! You have successfully upvoted for {champ_name} Make sure to check out the leaderboard!" | Pass      |

 <br />

- ## Browser Compatibility

  - All the above manual tests have been completed in the following desktop browsers
    - Google Chrome
    - Microsoft Edge
    - Firefox
    - Safari

  <br />

[Back to top](#contents)

- ## Bugs Fixed

  ### Upvoting/Downvoting

  - When developing the project, I stumbled upon a bug that perplexed me for a few days. When I was writing the logic to allow users to upvote a champion and then downvote a champion, I created 2 methods to handle this logic. What I had done initially was set the champion data to the current values but changed the upvotes_count value to be "upvotes_count: upvotes_count + 1". I did the opposite for handling the downvote function. This would initially work however because an upvote_id is attached to the request, when the user had removed their upvote, it would nullify the upvote_id, not allowing them to re-upvote a champion if they wish to do so. I managed to overcome this issue by forcing a page reload which would refresh all the values, including the upvote_id, allowing the request to have the correct data to perform the request. This was a temporary fix until I could figure out a way around it. <br />

  - I looked back through the Moments walkthrough project and realized where I had gone wrong. After changing the code to the below image, this would now allow for users to constantly upvote and downvote their champion without having to refresh the page and we can now take advantage of the state machine. I changed the code so that it would destructure the response data into a variable called "data" and then update the champData state object by spreading the previous champData values and then updating the two properties which had been effected (upvotes_count and upvotes_id).

  ![Upvotes Bug](/src/assets/readme_images/upvote-bug-1.png)

### Image Change

- I overlooked a very obvious and quite silly mistake when I was originally writing the logic to handle when a user changes an image. Whenever a user would change ability 1, ability 2 or ability 3 image, the image would always be set to the ability 1 image. Upon looking into the code and trying to understand why this was happening, I realized that I had set the value of the ability 2 image and the ability 3 image to be the value of the ability 1 image.

![Image Change Bug](/src/assets/readme_images/image-change-bug.png)

### Comment Delete

- Because I had written the logic of the comments CRUD functionality before implementing staff functionality, I encountered a bug where 2 delete icons would appear for a user that created the comment and they had the ability to delete other users comments even though they were not staff members.

![Comment Bug 1](/src/assets/readme_images/comment-bug-1.png)

- The correct functionality that I needed was below

  - A user can delete their own comment
  - A user can edit their own comment
  - A user cant edit other peoples comments
  - A user cant delete other peoples comments
  - A staff member cant edit other peoples comments
  - A staff member can delete other peoples comments
  - A staff member can delete their own comment
  - A staff member can edit their own comment

- To achieve this I had to create a new constant that would determine if the current user is a staff member (line 27 in the below image)

![Comment Bug 2](/src/assets/readme_images/comment-bug-4.png)

- I then had create the logic in the JSX to allow for the correct functionality (line 79 and line 84 in the below image)

![Comment Bug 3](/src/assets/readme_images/comment-bug-5.png)

- This then fixed the issue and now I have the correct comment CRUD functionality

**User view**

![Comment Bug 4](/src/assets/readme_images/comment-bug-2.png)

**Staff view**

![Comment Bug 5](/src/assets/readme_images/comment-bug-3.png)

## Upvote Render

- When creating the manual testing process I noticed that when a user had cast a vote on a champion but logged out there was a bug causing the upvote text and icon to not render properly.

![Upvote Render Bug 1](/src/assets/readme_images/upvote-bug-2.png)

- To fix this I added extra logic which handles the rendering of the text and the icon to allow for this condition.

![Upvote Render Bug 2](/src/assets/readme_images/upvote-bug-3.png)

## Sign In Incorrect Link

- Furthermore, when conducting the manual tests I stumbled upon another issue which I had overlooked. When the user clicked the "Don't have an account with us? Sign up now!" link, it was redirecting the user to the wrong URL.

![Sign Up Bug](/src/assets/readme_images/signup-bug.png)

- This was a simple fix as it was a case of changing the to="/signin" to be "to="/signup" but I wanted to put this in here to show the importance of manual testing

![Sign Up Fix](/src/assets/readme_images/signup-fix.png)

- ## Bugs Unresolved

  ### Automatic log in

  - I currently have an unresolved bug where after a user logs out successfully, if they then refresh the page, they automatically get logged back in. I have implemented the functionality to remove tokens and I also went a step further by attempting to delete the users session in their local storage but the issue still persists.

  - Here is an image of the user successfully logging out

  ![Log Out Bug 1](/src/assets/readme_images/log-out-bug-1.png)

  - And after refreshing the page, they get logged back in

  ![Log Out Bug 2](/src/assets/readme_images/log-out-bug-2.png)

[Back to top](#contents)

# Deployment To Heroku

The project was deployed to [Heroku](https://www.heroku.com). The deployment process is as follows:

The live link to the Github repository can be found here - https://github.com/MikeR94/CI-Project-Portfolio-5

[Back to top](#contents)

# Cloning and setting up this project

If you wish to clone and setup this project locally then the process is as follows:

[Back to top](#contents)

# Credits

### Content

- Content 1

### Media

- Media 1

[Back to top](#contents)

# Acknowledgments

Acknowledgements

Mike Ralph 2023.

[Back to top](#contents)
