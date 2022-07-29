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
  - Carousel
  - Footer
    - Address
    - Socials
- CMS

  
  
# Components

## App Component
 Our App component displays these following components:
   - Header
   - Navbar
   - Home
   - Get Help 
   - Give Help
   - Image 
   - Information card
   - Carousel
   - Footer

  *Behaviour*


---
## Header Component

*state*

*props*

*Behaviour*

---
## Home

*state*

*props*

*Behaviour*


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
## Get Help Section

*state*

*props*

*Behaviour*

---
## Give Help Section

*state*

*props*

*Behaviour*


## Authors

- [@Simran Toor](https://www.github.com/simran-toor)
- [@Skandy](https://github.com/skandog)
- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)
- [@Jim Wynn](https://github.com/jimlikesjazz)
- [@Joshua Langford](https://github.com/J05hL)
