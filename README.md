# **_League Hub - Project Portfolio 5 - Advanced Front End (React)_**

League Hub is an online resource for people around the world to easily access and view information about the popular game League of Legends. In it's current iteration, users can search, filter and view Champions associated with the game and consume information about that champion. A user will be able to upvote a champion if they wish to do so and also leave a comment about that champion for everyone to see. Staff members of the League Hub will be responsible for content control and will be able to create, edit and delete champions as well as having the ability to delete inappropriate comments by users. Overall, the goal of this project is to provide a comprehensive and accessible source of information for League of Legends enthusiasts.

You can view the live site here - <a href="https://ci-league-hub.herokuapp.com/" target="_blank" rel="noopener">League Hub</a>

![League Hub responsive design](/src/assets/readme_images/responsive-preview.png)

# Contents

- [**Objective**](#objective)
- [**User Experience UX**](#user-experience-ux)
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

1 - Build a project to help users gain knowledge about League of Legends
2 - Ensure the project is fully responsive to cater for all user device screen sizes
3 - Design an intuitive layout that promotes a positive user experience
4 - Implement a theme that compliments the project
5 - Allow users to quickly search for a champion
6 - Allow users to filter champions by role
7 - Give the users the ability to upvote and remove the upvote on a champion
8 - Give the users the ability to view a champion leaderboard
9 - Give the users the ability to create/edit and delete a comment on a champion
10 - Allow staff members to be able to manage the website
11 - Ensure users don't have access to staff member features
12 - Require users to have an account to access additional features

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

<br /><br />

[Back to top](#contents)

## Design Prototype

When I decided that I wanted to create this project, as I've used [Figma](https://www.figma.com/) in my previous projects, I felt comfortable enough to start designing my project using this tool. As you can see in the image below, I created 3 pages, the home page, the main champion page which stores all the information and then an icons page where I can store the icons for quick reference. Because of these 3 pages, I was able to quickly created pages for the website that followed this exact theme.

![Figma Design](/src/assets/readme_images/figma-design.png)

<br /><br />

[Back to top](#contents)

## Site Structure

Site Structure here <br /><br />

## Design Choices

- ### Typography

  Typography here

- ### Colour Scheme

  The colour scheme that I decided to use consisted of rich black, light french beige, raisin black and white. This colour scheme gives off a very League of Legends style feeling which promotes a positive user experience.

  ![Colour Theme](/src/assets/readme_images/colour-theme.png)

  <br /><br />

## Project Management

- ### Trello

  Trello <br /><br />

- ### GitHub Project Board
  Github <br /><br />

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

- [React]() - Front end framework

# Libraries

Libraries

- [axios]() - Library 1

[Back to top](#contents)

# Testing

- ## Code Validation

  - Code Validation Here

- ## Lighthouse Testing

  - Lighthouse Testing Here<br /><br />

- ## Accessibility Testing

  - Accessibility testing <br /><br />

- ## Responsiveness Testing

  - Responsive testing [Responsive Design Checker](https://www.responsivedesignchecker.com/).<br /><br />

- ## Compressing Images

  - Compressing Images.<br /><br />

- ## Automated Testing

  - Automated testing

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
