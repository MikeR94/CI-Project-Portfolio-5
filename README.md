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
- [**Existing Features (Site User)**](#existing-features-for-site-user)
  - [Existing Feature 1](#existing-feature-1)
- [**Existing Features (Staff Member)**](#existing-features-for-staff-member)
  - [Existing Staff Feature 1](#existing-staff-feature-1)
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

## Existing Features For Site User

- ### Existing Feature 1

  - Feature 1. <br /><br />

## Existing Features For Staff Member

- ### Existing Feature For Staff Member 1

  - Staff Feature 1 <br /><br />

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

- ## Manual Testing
  Manual Testing

| Status  | **Main Website - User Logged Out** |
| :-----: | :--------------------------------- |
| &check; | Manual test 1                      |

| Status  | **Main Website - User Logged In** |
| :-----: | :-------------------------------- |
| &check; | Manual test 1                     |

- ## Browser Compatibility
  - Browser compatibility
    <br /><br />

[Back to top](#contents)

- ## Bugs Fixed

  ### Bug 1

  - Bug 1 issue <br /><br />

  - Bug 1 solved

- ## Bugs Unresolved

  ### Buf Unresolved 1

  - Bug Unresolved 1 issue <br /><br />

  - Bug Unresolved 1 solved

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
