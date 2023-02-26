# **_League Hub - Project Portfolio 5 - Advanced Front End (React)_**

League Hub is an online resource for people around the world to easily access and view information about the popular game League of Legends. In it's current iteration, users can search, filter and view Champions associated with the game and consume information about that champion. A user will be able to upvote a champion if they wish to do so and also leave a comment about that champion for everyone to see. Staff members of the League Hub will be responsible for content control and will be able to create, edit and delete champions as well as having the ability to delete inappropriate comments by users. Overall, the goal of this project is to provide a comprehensive and accessible source of information for League of Legends enthusiasts.

You can view the live site here - <a href="https://ci-league-hub.herokuapp.com/" target="_blank" rel="noopener">League Hub</a>

You can view the live API here - <a href="https://drf-api-league-hub.herokuapp.com/" target="_blank" rel="noopener">League Hub DRF API</a>

You can view the front-end README.md here - <a href="https://github.com/MikeR94/ci-project-portfolio-5" target="_blank" rel="noopener">League Hub Front-End README</a>

You can view the back-end README.md here - <a href="https://github.com/MikeR94/drf-api-league-hub" target="_blank" rel="noopener">League Hub Back-End README</a>

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
  - [Items](#items)
  - [Events](#events)
  - [News](#news)
  - [Teams](#teams)
  - [Contact Form](#contact-form)
  - [Improved Profile Page](#improved-profile-page)
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)
- [**Deployment To Heroku**](#deployment-to-heroku)
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
| As a staff member    | I must have the ability to create a new champion that will be displayed on the website                                               | 10, 11        | &check; |
| As a staff member    | I must have the ability to delete a champion if necessary                                                                            | 10, 11        | &check; |
| As a staff member    | I must have the ability to be able to delete any inappropriate comments submitted by users                                           | 10, 11        | &check; |

<br />

[Back to top](#contents)

## Design Prototype

When I decided that I wanted to create this project, as I've used [Figma](https://www.figma.com/) in my previous projects, I felt comfortable enough to start designing my project using this tool. As you can see in the image below, I created 3 pages, the home page, the main champion page which stores all the information and then an icons page where I can store the icons for quick reference. Because of these 3 pages, I was able to quickly created pages for the website that followed this exact theme.

To view the Figma project, you can visit it [here](https://www.figma.com/file/f55wXYMVslUqsuny4vM9xq/League-Project-Idea?node-id=0%3A1&t=HxaZ17Ib1BMHvcSm-0)

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

  Upon receiving some great feedback from my mentor, it was apparent that if you are not a fan or aware of the game League of Legends, then visiting this website might leave you wondering what it’s purpose and intentions are.
  The splash page was added to provide a fast and informative way to inform the user about this website and some of the upcoming features that will be coming soon.
  <br />

  ![Splash Page](/src/assets/readme_images/splash-page-1.png)

    <br />

- ### Responsive Navigation Bar

  The navigation is one of the most important features for any website and as such, I’ve done my best to provide the user with a very intuitive and useful navigation bar
  The navigation bar has a clickable logo which will redirect the user back to the home page, a search bar to search for a champion in the middle, and the users logged in state on the top right. If the user is logged out, it will display a golden avatar and when clicked, will give the users the following drop-down menu

  - About
  - Sign In
  - Sign Up

  If the user is logged in, they will see the following drop-down menu

  - Home
  - Profile
  - About
  - Leaderboard
  - Log out

  If a staff member is logged in, they will see the following drop-down menu

  - Home
  - Profile
  - About
  - Leaderboard
  - Create
  - Log out

  A staff member will also have a silver crown appear next to their name

  **User Story - I can create a new account via the sign-up page which can be accessed via the navigation bar**

  **User Story - I should be able to log out of the website**

  <br />

![Nav Bar 1](/src/assets/readme_images/nav-bar-1.png)

![Nav Bar 2](/src/assets/readme_images/nav-bar-2.png)

![Nav Bar 3](/src/assets/readme_images/nav-bar-3.png)

![Nav Bar 4](/src/assets/readme_images/nav-bar-4.png)

  <br />

- ### Search Bar

  I’ve currently developed the search bar so that is present throughout the entire website and can be used to search for a champion from any page. In future updates, the search bar will be contained within each section and will provide search queries for their respective pages (champions, items, etc)

  **User Story - I can filter my search when looking for a champion**

  <br />

  ![Search Bar 1](/src/assets/readme_images/search-bar-1.png)

  ![Search Bar 2](/src/assets/readme_images/search-bar-2.png)

  ![Search Bar 3](/src/assets/readme_images/search-bar-3.png)

  <br />

- ### Role Icons

  The role icons act as an additional filter to the search bar. There are 5 roles in the game league of legends and they all champions are assigned a role.

  - Top
  - Middle
  - Jungle
  - Bottom (ADC)
  - Support

  Hovering over the role icon will apply a very nice glow effect with a tooltip to inform the user which role is being selected and then when clicked, only the champions that fall into that role category are displayed.

  **User Story - I can filter my search when looking for a champion**

 <br />

![Role Icons 1](/src/assets/readme_images/role-icons-1.png)

![Role Icons 2](/src/assets/readme_images/role-icons-2.png)

![Role Icons 3](/src/assets/readme_images/role-icons-3.png)

![Role Icons 4](/src/assets/readme_images/role-icons-4.png)

![Role Icons 5](/src/assets/readme_images/role-icons-5.png)

![Role Icons 6](/src/assets/readme_images/role-icons-6.png)

  <br />

- ### Champion Card

  The champion card is the main clickable item that a user will search/filter for and then click to then be redirected to the champion information page where they can consume more information regarding that champion

  **User Story - I can view all champion cards that when clicked will navigate me to the champion page which displays information about that champion**

  **User Story - I can see all the champion cards on the champion select page**

   <br />

  ![Champion Card](/src/assets/readme_images/champ-card-1.png)

  <br />

- ### Account Creation

  Everybody can create an account on the League Hub. Upon creating an account, a user has access to additional features such as the leaderboard, champion upvoting, profile page and the ability to leave a comment on a champion

  **User Story - I should be able to log into the website when I have created a valid account**

   <br />

  ![Account Creation 1](/src/assets/readme_images/account-creation-1.png)

  ![Account Creation 2](/src/assets/readme_images/account-creation-2.png)

  <br />

- ### Profile Page

  The profile page is a simple page where the user can update their first name, last name and their avatar image

  **User Story - I can update my profile information such as my first-name, last-name and avatar image**

  **User Story - I can view my profile page that displays information about my profile**

   <br />

  ![Profile Page 1](/src/assets/readme_images/profile-page-1.png)

  ![Profile Page 2](/src/assets/readme_images/profile-page-2.png)

  ![Profile Page 3](/src/assets/readme_images/profile-page-3.png)

  <br />

- ### Page Not Found

  This is the page that is displayed when the user enters a URL or tries to navigate to a page that does not exist or if the user does not have the correct permissions

  ![Page Not Found](/src/assets/readme_images/page-not-found.png)

  <br />

- ### Champion Create

  This is a staff member only feature and is used for the creation of the champions that you see on the home page. Each input field is responsible for a characteristic value for a champion. Each input field has error handling and will inform the user of any incorrect or missing data.

  **User Story - I must have the ability to create a new champion that will be displayed on the website**

  <br />

  ![Champion Create 1](/src/assets/readme_images/champion-create-1.png)

  ![Champion Create 2](/src/assets/readme_images/champion-create-2.png)

  <br />

- ### Champion Edit

  This is a staff member only feature and is used to edit a champion if a staff member ever needs to do so. Upon clicking the edit button, all fields are pre-populated with the champion data to make it easier for the staff member to edit the champion

  **User Story - I must have the ability to update the champions information so I can provide the most up to date information for consumers**

  <br />

  ![Champion Edit 1](/src/assets/readme_images/champion-edit-1.png)

  ![Champion Edit 2](/src/assets/readme_images/champion-edit-2.png)

  <br />

- ### Champion Delete

  This is a staff member only feature and is used to delete a champion if they need to do so. Upon clicking the trash can icon, a modal will prompt the user asking them again if they are sure they wish to delete the champion from the database and the website. Upon clicking delete, it will delete the champion and redirect the user back to the home page. If they click cancel, then it will cancel the pop-up modal and return the user back to the champion information page.

  **User Story - I must have the ability to delete a champion if necessary**

   <br />

  ![Champion Delete 1](/src/assets/readme_images/champion-delete-1.png)

  ![Champion Delete 2](/src/assets/readme_images/champion-delete-2.png)

  <br />

- ### Champion Information Page

  This is the heart of the website, and it is where users will glean information about each League of Legends champion. It has multiple different sections which render data about the champion that the user can see. Some of the information that a user can gain from this page is the following

  - Champion name
  - A large image of the champion
  - Champion alias
  - Champion lore
  - Champion abilities (with images and descriptions)
  - Champion class
  - Champion range
  - Champion difficulty

  There is also additional interactive features on this page such as allowing the user the ability to upvote a champion and remove the upvote from a champion if they wish to do so. They can also leave a comment about a champion and interact in community discussions with other site members

  **User Story - I can view all champion cards that when clicked will navigate me to the champion page which displays information about that champion**

 <br />

![Champion Info Page 1](/src/assets/readme_images/champion-page-1.png)

![Champion Info Page 2](/src/assets/readme_images/champion-page-2.png)

![Champion Info Page 3](/src/assets/readme_images/champion-page-3.png)

![Champion Info Page 4](/src/assets/readme_images/champion-page-4.png)

![Champion Info Page 5](/src/assets/readme_images/champion-page-5.png)

![Champion Info Page 6](/src/assets/readme_images/champion-page-6.png)

  <br />

- ### Comments

  This is a feature within the champion information page and allows registered users to interact with each other and leave their feedback and opinions on a champion. A logged in user can create a comment, edit their own comment, and delete their own comment. A staff member can do the exact same, but they have additional permissions to be able to delete other users’ comments if they need to do so to avoid any inappropriate comments

  **User Story - I can view all comments left by users on a champion page but not be able to comment until I have created an account**

  **User Story - I can leave a comment about a champion on the champion page**

  **User Story - I can delete a comment that I have created on the champion’s page**

  **User Story - I must have the ability to be able to delete any inappropriate comments submitted by users**

  <br />

  ![Comment 1](/src/assets/readme_images/comment-feature-1.png)

  ![Comment 2](/src/assets/readme_images/comment-feature-2.png)

  <br />

- ### Upvoting

  This is another feature within the champion information page and allows registered users to show their love for a champion by upvoting the champion and increasing the champions chances of being the number one upvoted champion on the leaderboard. Only a registered user can upvote a champion. If a user wishes to remove their upvote from a champion, they simply just must click the icon again and it will remove the upvote

  **User Story - I can upvote a champion if I wish to do so**

  **User Story - I should be able to remove my upvote from a champion if I wish to do so**

  <br />

  ![Upvoting 1](/src/assets/readme_images/upvote-feature-1.png)

  ![Upvoting 2](/src/assets/readme_images/upvote-feature-2.png)

  ![Upvoting 3](/src/assets/readme_images/upvote-feature-3.png)

  <br />

- ### Leaderboard

  This is the result of all the users upvotes for the champions. It shows a ranked order of champions with the most upvotes to the least upvotes. Every single champion that is displayed on the website will be present on the leaderboard, but their position depends on the amount of upvotes they have

  The user also has the ability to navigate straight to the champion information page for the specific champion if they click the avatar icon

  **User Story - I can view the champion upvote leaderboard to see how all the champions are ranked against each other**

   <br />

  ![Leaderboard](/src/assets/readme_images/leaderboard-1.png)

  ![Leaderboard](/src/assets/readme_images/leaderboard-2.png)

  <br />

- ### Notifications

  For each user input, I have implemented a brilliant package called react-notifications which allows for notifications to pop up to give the user additional feedback about their action. I’ve implemented both success and error notifications which can be seen below

   <br />

  ![Notification 1](/src/assets/readme_images/notification-1.png)

  ![Notification 2](/src/assets/readme_images/notification-2.png)

  ![Notification 3](/src/assets/readme_images/notification-3.png)

  ![Notification 4](/src/assets/readme_images/notification-4.png)

  ![Notification 5](/src/assets/readme_images/notification-5.png)

  <br />

[Back to top](#contents)

- ## Future Features

- ### Items

  - League of Legends is home to hundreds of different items that the champions can use to become stronger during the game. In a future update I would like to give the user the ability to view all the items in the same way they can view all the champions

- ### Events

  - League of Legends hosts multiple events throughout the year with the professional teams competing against each other for the title. In a future update I would like to provide this information for the users so they can keep up to date on upcoming events

- ### News

  - Providing a news feature would be very beneficial for everybody visiting the website as it could possibly be their new preferred way of gleaning news about both League of Legends information and League Hub updates. This could increase user retention and open opportunities for people to apply to be a staff member to provide the latest news and present it on the website

- ### Teams

  - League of Legends has many professional teams and organisations that compete at a very high level. It would be beneficial to the user if they could gain the latest information about each team and it’s players

- ### Contact Form

  - Currently there is no way for a user to contact the League Hub. In a future update I would like to rectify this and allow users to be able to contact the League Hub with any queries or feedback and it would give users the opportunity to apply for a staff position to help manage and keep the website up to date

- ### Improved Profile Page

  - In its current form, the profile page does what it is intended to do, however I believe there could be some user experiences improvements such as displaying statistical information about their interactivity on the website, their favourite champion, password reset option and much more

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
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code
- [Microsoft Paint](https://en.wikipedia.org/wiki/Microsoft_Paint) - Used to create/edit images for the website

[Back to top](#contents)

# Testing

- ## Code Validation

  ![JSX Compiler](/src/assets/readme_images/jsx-compiler.png)

- ## Lighthouse Testing

I am happy with the lighthouse results for each page however in future updates I will aim to increase all lighthouse scores to be a minumum of 90 for performance, accessibility, best practices and SEO.

![Lighthouse 1](/src/assets/readme_images/lighthouse-splash.png)

![Lighthouse 2](/src/assets/readme_images/lighthouse-sign-up.png)

![Lighthouse 3](/src/assets/readme_images/lighthouse-sign-in.png)

![Lighthouse 4](/src/assets/readme_images/lighthouse-profile.png)

![Lighthouse 5](/src/assets/readme_images/lighthouse-notfound.png)

![Lighthouse 6](/src/assets/readme_images/lighthouse-champions.png)

![Lighthouse 7](/src/assets/readme_images/lighthouse-leaderboard.png)

![Lighthouse 8](/src/assets/readme_images/lighthouse-champion-info.png)

![Lighthouse 9](/src/assets/readme_images/lighthouse-create.png)

![Lighthouse 10](/src/assets/readme_images/lighthouse-edit.png)

- ## Accessibility Testing

  - I put the website through the [a11y](https://color.a11y.com/Contrast/) to test if there was any conflicting contrast issues with the colours selected but found no errors

  ![a11y](/src/assets/readme_images/a11y.png)

  <br /><br />

- ## Responsiveness Testing

  I've conducted responsive testing for all pages for the following devices.

  - iPhone SE
  - iPhone XR
  - iPhone 12 Pro
  - Pixel 5
  - Samsung Galaxy S8
  - Samsung Galaxy S20 Ultra
  - iPad Air
  - iPad Mini
  - Surface Pro 7
  - Surface Duo
  - Galaxy Fold
  - Samsung Galaxy A51/71
  - Nest Hub
  - Nest Hub Max

  ![Responsive Test Results](/src/assets/readme_images/responsive-test-results.png)

  Upon initial responsive testing, I did find some minor alignment and size issues which have been documented in the Bugs Found section but they have now been rectified and the website is responsive on all the above devices

  <br />

- ## Manual Testing Pages

| Page                 | Expected Result                                                                                                   | Pass/Fail |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |
| Splash               | Loading the website renders the splash page                                                                       | Pass      |
| Splash               | The navigation and the footer components don't load                                                               | Pass      |
| Splash               | Hovering over the continue button turns the button gold                                                           | Pass      |
| Splash               | Clicking the continue button navigates the user to the home page                                                  | Pass      |
| Splash               | Clicking the coloured feature icon "Champions" loads the home page                                                | Pass      |
| Splash               | Clicking the greyed out feature icon "Items, Events, News" does nothing                                           | Pass      |
| Splash               | Hovering over the Champions icon shows a tooltip that says "Live"                                                 | Pass      |
| Splash               | Hovering over the Items, Events and News icons shows a tooltip that says "Coming soon"                            | Pass      |
| Home                 | The navigation bar is displayed to the user and all functionality works as per the navigation manual tests        | Pass      |
| Home                 | The role icons are displayed to the user and all functionality works as per the role icon manual tests            | Pass      |
| Home                 | The champion cards are displayed to the user and all functionality works as per the role icon manual tests        | Pass      |
| Champion Page        | The correct champion image is displayed to the user                                                               | Pass      |
| Champion Page        | The correct champion name is displayed to the user                                                                | Pass      |
| Champion Page        | The correct champion alias is displayed to the user                                                               | Pass      |
| Champion Page        | The edit champion icon is only displayed to staff members only                                                    | Pass      |
| Champion Page        | Clicking the edit champion icon loads the ChampionEdit component with the correct data                            | Pass      |
| Champion Page        | The delete champion icon is only displayed to staff members only                                                  | Pass      |
| Champion Page        | Clicking the delete champion icon loads a modal to the user                                                       | Pass      |
| Champion Page        | Clicking "delete" when the delete modal pops up deletes the champion and returns the user to the home page        | Pass      |
| Champion Page        | Clicking "cancel" when the delete modal pops up cancels the modal and returns the user to the Champion page       | Pass      |
| Champion Page        | The correct champion lore is displayed to the user                                                                | Pass      |
| Champion Page        | The correct passive ability image is displayed to the user                                                        | Pass      |
| Champion Page        | The correct passive ability name is displayed to the user                                                         | Pass      |
| Champion Page        | The correct passive ability description is displayed to the user when they hover over the passive ability image   | Pass      |
| Champion Page        | The correct ability 1 image is displayed to the user                                                              | Pass      |
| Champion Page        | The correct ability 1 name is displayed to the user                                                               | Pass      |
| Champion Page        | The correct ability 1 description is displayed to the user when they hover over the ability 1 image               | Pass      |
| Champion Page        | The correct ability 2 image is displayed to the user                                                              | Pass      |
| Champion Page        | The correct ability 2 name is displayed to the user                                                               | Pass      |
| Champion Page        | The correct ability 2 description is displayed to the user when they hover over the ability 2 image               | Pass      |
| Champion Page        | The correct ability 3 image is displayed to the user                                                              | Pass      |
| Champion Page        | The correct ability 3 name is displayed to the user                                                               | Pass      |
| Champion Page        | The correct ability 3 description is displayed to the user when they hover over the ability 3 image               | Pass      |
| Champion Page        | The correct ultimate ability image is displayed to the user                                                       | Pass      |
| Champion Page        | The correct ultimate ability name is displayed to the user                                                        | Pass      |
| Champion Page        | The correct ultimate ability description is displayed to the user when they hover over the ultimate ability image | Pass      |
| Champion Page        | The correct champion class image is displayed to the user                                                         | Pass      |
| Champion Page        | The correct champion class text is displayed to the user                                                          | Pass      |
| Champion Page        | The correct champion range image is displayed to the user                                                         | Pass      |
| Champion Page        | The correct champion range text is displayed to the user                                                          | Pass      |
| Champion Page        | The correct champion difficulty image is displayed to the user                                                    | Pass      |
| Champion Page        | The correct champion difficulty text is displayed to the user                                                     | Pass      |
| Champion Page        | The upvoting functionality works as per the upvoting manual tests                                                 | Pass      |
| Champion Page        | The comments are displayed to the user and all functionality works as per the comments manual tests               | Pass      |
| Sign In Page         | Clicking the username input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign In Page         | Clicking the password input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign In Page         | Clicking the sign in button will sign the user in if correct credentials have been entered                        | Pass      |
| Sign In Page         | Clicking the sign in button will not sign the user in if incorrect credentials have been entered                  | Pass      |
| Sign In Page         | Clicking the "sign up" text will navigate the user to the sign up page                                            | Pass      |
| Sign Up Page         | Clicking the username input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign Up Page         | Clicking the password input box allows the user to input alphanumeric characters                                  | Pass      |
| Sign Up Page         | Clicking the confirm password input box allows the user to input alphanumeric characters                          | Pass      |
| Sign Up Page         | Clicking the sign up button will sign the user up if correct credentials have been entered                        | Pass      |
| Sign Up Page         | Clicking the "sign in" text will navigate the user to the sign in page                                            | Pass      |
| Profile Page         | Clicking the profile avatar image will allow the user to select a new image for their profile avatar              | Pass      |
| Profile Page         | Selecting a new image for the profile avatar will render the save button                                          | Pass      |
| Profile Page         | Clicking the save button on the profile avatar will deal with the image update request to the API                 | Pass      |
| Profile Page         | Clicking the edit button will allow the user to edit the first name and last name input fields                    | Pass      |
| Profile Page         | Changing the value of the first name or last name renders the save button                                         | Pass      |
| Profile Page         | Clicking the save button will deal with the update request to the API                                             | Pass      |
| Champion Leaderboard | The first 10 most upvoted champions are rendered to the user                                                      | Pass      |
| Champion Leaderboard | Hovering over a champions avatar shows a tooltip saying "Click to view {champions name's} profile"                | Pass      |
| Champion Leaderboard | Clicking a champions avatar loads the champion information page for that champion                                 | Pass      |
| Champion Leaderboard | Clicking the pagination button renders the next correct 10 champions to the user                                  | Pass      |
| Champion Create      | The champion create page renders all the relevant input fields for a staff member to create a champion            | Pass      |
| Champion Create      | All the champion create input fields perform the correct functionality (text, dropdown, image)                    | Pass      |
| Champion Create      | Clicking the create button sends the create request to the API                                                    | Pass      |
| Champion Edit        | The champion edit page renders all the relevant input fields for a staff member to edit a champion                | Pass      |
| Champion Edit        | All the champion edit input fields perform the correct functionality (text, dropdown, image)                      | Pass      |
| Champion Edit        | Clicking the update button sends the edit request to the API                                                      | Pass      |

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
| Upvoting      | As a logged in user that has upvoted, hovering over the downvote icon shows a tooltip that says "Click to downvote this champion"                               | Pass      |
| Upvoting      | As a logged in user that hasn't upvoted, the text to the left says "Do you like this champion? Make sure you up-vote it by clicking the arrow if you do!"       | Pass      |
| Upvoting      | As a logged in user that has upvoted, the text to the left says "Great! You have successfully upvoted for {champ_name} Make sure to check out the leaderboard!" | Pass      |
| Comments      | As a logged in user, clicking the submit button without entering a comment does nothing                                                                         | Pass      |
| Comments      | As a logged in user, clicking the submit button after entering a comment submits the comment and it is displayed                                                | Pass      |
| Comments      | If a logged in user has submitted a comment, they have the ability to edit their comment                                                                        | Pass      |
| Comments      | If a logged in user has submitted a comment, they have the ability to delete their comment                                                                      | Pass      |
| Comments      | As a staff member, clicking the delete button on a users comment deletes their comment                                                                          | Pass      |
| Comments      | As a staff member, the edit comment button for other users comments should not be available                                                                     | Pass      |
| Comments      | A logged out user can not create a comment                                                                                                                      | Pass      |
| Comments      | A logged out user can not edit a comment                                                                                                                        | Pass      |
| Comments      | A logged out user can not delete a comment                                                                                                                      | Pass      |

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

## Minor Responsive Issues

- When testing the website for responsiveness, I created a spreadsheet and performed tests on each page for different devices. As shown in the picture below, I noticed that I had a few minor alignment and size issues which I wanted to rectify

<br/>

![Responsive Issue 1](/src/assets/readme_images/responsive-issue-1.png)

<br/>

- After identifiying what the issue was and where it was, I rectified the problem and now both the alignment and size issues are no longer present. This reinforces the importance of thorough testing throughout the website

<br/>

| Alignment Issue - Before                                             | Alignment Issue - After (Fixed)                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Alignment Issue](/src/assets/readme_images/responsive-issue-2.png) | ![Alignment Fixed](/src/assets/readme_images/responsive-issue-3.png) |

<br/>

| Size Issue - Before                                                  | Size Issue - After (Fixed)                                           |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Alignment Issue](/src/assets/readme_images/responsive-issue-4.png) | ![Alignment Fixed](/src/assets/readme_images/responsive-issue-5.png) |

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

Firstly we need to create a new repository in [GitHub](https://github.com/) where our project files will be located

- Navigate to [GitHub](https://github.com/)
- Create a new repository with no template

![Deployment 1](/src/assets/readme_images/deployment-1.png)

Once you've created your new empty repository, we need to pull this repository down onto our local machine. Throughout the course I have used [VSCode](https://code.visualstudio.com/) to create and manage my projects instead of GitPod so I will be demonstrating the process with [VSCode](https://code.visualstudio.com/).

- Copy either the HTTPS or SSH URL that has just been generated by [GitHub](https://github.com/)

![Deployment 2](/src/assets/readme_images/deployment-2.png)

Now we need to open up a command prompt to pull this empty repository down onto our machine

- Open a CMD
- CD to a location you wish to store this project
- Now type **git clone https://github.com/MikeR94/pp5-deployment-process.git**
- After the project has been pulled down onto your local machine, CD to the project and type **code .** to open the project with [VSCode](https://code.visualstudio.com/)

![Deployment 3](/src/assets/readme_images/deployment-3.png)

Now we need to initialize this project as a [React](https://reactjs.org/) project

- Open up a new [GitBash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>) terminal within the project
- Type in **npx create-react-app . --use-npm**

This may take a few minutes, but when it is complete, you will see the below image

![Deployment 4](/src/assets/readme_images/deployment-4.png)

Once completed, you can test your new [React](https://reactjs.org/) application is working by typing **npm start** in the terminal

Now we can push our new project to our [GitHub](https://github.com/) repository

- **git add .**
- **git commit -m "Initial commit"**
- **git push**

![Deployment 5](/src/assets/readme_images/deployment-5.png)

Now it's time to deploy our new project live for everyone to see on [Heroku](https://www.heroku.com)

- Navigate to [Heroku](https://www.heroku.com)
- Click **New app**
- Fill in the relevant information
- Click **Create app** once you are happy

![Deployment 6](/src/assets/readme_images/deployment-6.png)

Now we need to link our [Heroku](https://www.heroku.com) application with our [GitHub](https://github.com/) project

- Click the **Deploy** tab
- Choose **GitHub**
- Search for your repository
- Once found, click **Connect**

![Deployment 7](/src/assets/readme_images/deployment-7.png)

Finally, we can deploy our connected projected for everyone to see.

You can either choose **Enable Automatic Deploys** or **Deploy Branch**. I chose to deploy my application manually when I was ready instead of automatic deployments

- Click **Deploy Branch** and wait for it to build

![Deployment 8](/src/assets/readme_images/deployment-8.png)

Your new [React](https://reactjs.org/) application is now successfully deployed to [Heroku](https://www.heroku.com)

![Deployment 9](/src/assets/readme_images/deployment-9.png)

[Back to top](#contents)

# Credits

### Content

This project was inspired by the [Code Institute](https://codeinstitute.net/) walk-through **Moments** project and has been heavily modified

The files which have been created and used for the League Hub project that have been copied from the **Moments** walkthrough project were the following

- CurrentUserContext.js
- useRedirect.js
- axiosDefault.js

Additional files that I have drawn inspiration from and modified to meet the League Hubs needs were the following

- SignIn.js
- SignUp.js
- Comment.js
- CommentCreate.js
- CommentEdit.js
- Asset.js
- utils.js
- Avatar.js

I also found this brilliant example of how to move my search bar to the middle of the screen when the screen size gets smaller - [Link](https://jsfiddle.net/wqLezyfe/2/)

I had an issue with the dropdown value not being properly populated which was resolved by finding a Stack Overflow answer - [Link](https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting)

When developing the leaderboard, I wanted to add pagination to the leaderboard itself. I found this excellent YouTube tutorial which explains in detail how to do just that - [Link](https://www.youtube.com/watch?v=IYCa1F-OWmk)

After submitting my project for peer review with [Code Institute](https://codeinstitute.net/), a student very kindly pointed out the following

- "The search filters are great! However the text search is sending a request instantly after entering a new character. I think it would be worth slowing this down (like in the tutorial) so users aren’t making as many calls."

I used a guide from [rapidapi](https://rapidapi.com/guides/api-request-schedule) to show me how I could slow down the request call by using a setTimeout function and it worked brilliantly - [Link](https://rapidapi.com/guides/api-request-schedule)

### Media

All champion information (including champion images) presented on the website is sourced from the official [League of Legends](https://www.leagueoflegends.com/en-gb/champions/) website

The faint background image you can see on the Splash Page is from [alphacoders](https://wall.alphacoders.com/by_sub_category.php?id=169908&name=League+Of+Legends+Wallpapers)

The role icon images came from a GitHub repository - [Link](https://github.com/esports-bits/lol_images)

The class icon and difficulty images came from [leagueoflegends.fandom](https://leagueoflegends.fandom.com/wiki/Champion_classes)

The crossed sword and bow and arrow icons came from [pngaaa](https://www.pngaaa.com/)

The silver moderator crown came from [geneisscape](https://genesisscape.fandom.com/wiki/Player_Moderator)

The page not found image of Teemo is from [toppng](https://toppng.com/show_download/205781/ersonagens-de-lol-png-teemo-transparent/large)

[Back to top](#contents)

# Acknowledgments

I have thoroughly enjoyed developing this project and although I found React to be challenging learning curve, after much perseverance I feel like I have a good baseline knowledge when it comes to developing applications that use an advanced front-end framework like React that talk to a back-end API developed using the Django REST Framework.
Unlike my other projects which I was able to work on full time, I had successfully landed a software developer job and I only had time to work on this project in my spare time whilst trying to have a balanced personal life. This was extremely challenging for myself, and I am very proud to have managed to finally submit my fifth and final project with [Code Institute](https://codeinstitute.net/)

I would like to thank my mentor Marcel, my educator Luke Walters, my brother Jack Ralph, my partner Beth, the Slack community, and all at the [Code Institute](https://codeinstitute.net/) for their help and support.

It has been an incredible journey and I’m extremely excited to see where this adventure will take me.

Thank you so much for a fantastic experience [Code Institute](https://codeinstitute.net/)!

Mike Ralph 2023.

[Back to top](#contents)
