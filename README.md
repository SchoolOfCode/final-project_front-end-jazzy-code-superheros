# Your Local Food Bank

### Problem Statement
---
Many smaller community food banks do not have access to the same tools and resources that larger ones do, and thus use workarounds to communicate with their community.

### Solution
---
Create a community hub to enable smaller organisations to better interact with their community, as well as provide a central location for beneficiaries and supporters to access information about their local services.


This is currently the MVP for Your Local Food Bank, V.1.0: 

- CMS
- Eligibility criteria, information and local resources for Beneficiaries 
- Donation section for patrons 
- Input for item donations currently needed
- Contact information 


## Installation

Clone the two repositories (frontend and backend) down to your machine. Open up two terminals and use one to navigate to front end, and one to navigate to the back.

In both, enter the command to install dependancies:

Install with npm

### Frontend

```bash
  npm i final-project_front-end-jazzy-code-superheros
```

### Backend

```bash
  cd final-project_back-end-jazzy-code-superheros
  npm i
```

Once the necessary nodes have been installed you can spin up the app! First open your backend terminal, and run the dev script:

### Backend

```bash
 npm run dev
```

### Frontend

```bash
 npm start
```


## Tech Stack

**Languages:** JavaScript, HTML5, CSS3
<br></br>
**Libraries & Frameworks:** Node, React.js, Jest, Supertest, React Testing Library


## Roadmap

**Upcoming Features:**

- Navbar
- Home page 
- Get Help section


## Component Tree

- App
  - Header
    - Navbar
- Home
  - Give help button
    - Items List
      - Item 
    - Enquiry for volunteers form
  - Get help button
    - Eligibility criteria card
    - Map image
  - Image 
  - Information card
    - Address 
    - Foodbank contact info
  - Footer
    - Address
    - Socials
- CMS

## Components


### Get Help Page

This is the page where users will be directed who are looking to access the service of the foodbank.

The page will display information on: 

- Eligibility criteria
- The process for accessing food vouchers
- Website
- (optional) Specific information supplied by the foodbank admin


There is a banner image on the page, and below that  a reusable card component with accordion features is rendered for each info block that is provided. At the bottom of the page is a map displaying the location of the foodbank.

This page still need

#### ToggleCard

_state_

- isTogged

_behaviour_ 

The toggle card is designed to be a resuable accordion card component which takes in title and body props. This card has been designed to display text only. There may be a more generic component created in the future.

The card is designed in such a way that should display just the title in a bold green, which opens up to reveal the text when clicked. The arrow symbol (react-icons/fa) should rotate 180º when toggled.




## Authors

- [@Simran Toor](https://www.github.com/simran-toor)
- [@Skandy](https://github.com/skandog)
- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)
- [@Jim Wynn](https://github.com/jimlikesjazz)
- [@Joshua Langford](https://github.com/J05hL)
