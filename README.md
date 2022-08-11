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
- Landing page
  - Input field
  - Submit button
  - Result card
- Home
  - Give help button
  - Get help button
  - Information card
  - Carousel
- Get Help
    - Toggle card
      - Eligibility card
    - Map
- Give Help
    - Items List
      - Item 
    - Button for volunteers
    - Map 
- Contact Page
  - Contact information
    - Address
    - Telephone
    - Email
  - Contact Form
    - Submit button
- CMS
  - Form 
    - Submit button


# Custom Hooks

## useFetch

We have a custom useFetch in our app - it takes a url as a parameter and currently returns data from the state to be used at App level for prop drilling to pass down the foodBankData object for use in the other components
As the url is a parameter this can be used elsewhere for other fetches to get different data from other APIs.

  
  
# Components

## App Component
 Our App component dynamically displays all of our pure components.

  *State*

  - inputFoodBank
  - submittedBank
  - foodBankData

  *Behaviour*

  The App component displays our components by providing controlled states to our rendered components using the 'useState' Hook.
  <br>
  <br>
  The App component also has a custom hook called 'useFetch' which we use twice, once to our server to request data from our database and the second, again to our server, but talks to the external API which is then collated to return the search results to the user.
  <br>
  <br>
  It also contains the paths for each route in our navbar component.

  - The ***inputFoodBank*** state is used to set whether a foodbank has been inputted in the input field. This is displayed on our landing page.
  - The ***submittedFoodBank*** state is used to set a state for any foodbank that is submitted from the input field. This takes in ***inputFoodBank*** and checks for specific data in order to return the correct foodbanks.
  - The ***foodBankData*** is used to store the data that is returned from the search. 

---
## Navbar Component

The Header contains our navbar component as well as our app logo. It has a burger menu nested within the navbar component.

*State*

- isActive

*Behaviour*

- The ***isActive*** state allows us to control whether the navbar is active (opened) or not (closed).
 

---
## Landing Page

The Landing Page is the first page on our app and is what controls the information that we see throughout the rest of the app. It pulls through the Input component.

*props*

- handleChange
- handleClick
- handleEnter
- setFoodBankData
- searchArray

<br>

The Landing page has a reusable button component and renders the 5 closest foodbanks from the area that is submitted on the search field.

---
## Home

The Home Component is the main page of the app and pulls through multiple components including: InputFoodBank, Button, AboutUs, Carousel and Facts. 

*props*

- foodBankData
- handleChange
- handleClick
- handleEnter

*Behaviour*

- The Home Component pulls through each component listed above and renders them as well as props that pass through the ***InputFoodBank*** logic.
- ***useNavigate*** is used within the button component which allows us to redirect to new pages without using the navbar. 

---
## Carousel

The carousel is a pure component that displays text and an image.  

*state*

- slide

*props*

- slides

*Behaviour*

- Use slide state to keep track of the number of slides as well as which slide will be displayed. The props being passed down is the data from the CarouselData, so we can know the lenght of it.

---

## Get Help Page

This is the page where users will be directed who are looking to access the service of the foodbank.

The page will display information on: 

- Eligibility criteria
- The process for accessing food vouchers
- Website
- (optional) Specific information supplied by the foodbank admin
- Map

<br>

There is a banner image on the page, and below that  a reusable card component with accordion features is rendered for each info block that is provided. At the bottom of the page is a map displaying the location of the foodbank.

<br>

### ToggleCard

*State*

- isTogged

*Props*

- cardTitle
- cardBody

*Behaviour*

- The toggle card is designed to be a resuable accordion card component which takes in title and body props. This card has been designed to display text only. There may be a more generic component created in the future.
- The card is designed in such a way that should display just the title in a bold green, which opens up to reveal the text when clicked. The arrow symbol (react-icons/fa) should rotate 180º when toggled.

<br> 

### ToggleCardGeneral

*state*

- isTogged

*props*

- cardTitle
- cardBody
- children

*Behaviour*

- This component works the same way as ***ToggleCard***, however this component takes in children.

---
## Give Help Page

This is the page where users will be directed who are looking to access the service of the foodbank.

The page will display information on: 

- Donating money
- List of items that is needed by the foodbank
- A volunteer section 
- Map

*Props* 

- foodBankData

A reusable card component with accordion features is rendered for each info block that is provided. At the bottom of the page is a map displaying the location of the foodbank.

<br>

### Item Component

This is a Dumb component that displays a single listed item.

*Props*

- ListItemText 

*Behaviour*

- It returns an li element based on the props returned. It takes props of ListItemText  which is the text to be displayed within this component

<br>

### Items List 

This is where we display all of the items our Food bank is in need of and requires as donations.

*Props*

- foodBankData

*Behaviour*

- It takes props as the object passed down via prop drilling from the fetch request to the API. It returns a section and ul containing a number of ListItem returned from a map of the data supplied by the API. Based on the structure of the the data supplied by the API it is conditionally split into an array at this level.

--- 
## Contact Page


--- 
## CMS

---

## Authors

- [@Simran Toor](https://www.github.com/simran-toor)
- [@Skandy](https://github.com/skandog)
- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)
- [@Jim Wynn](https://github.com/jimlikesjazz)
- [@Joshua Langford](https://github.com/J05hL)
- [@Camilla Santos](https://github.com/millagmc)
