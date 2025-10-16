# Sivilima Web System

**Client Project - Static Website for Sivilima Services**

මේක sivilima company එකක් වෙනුවෙන් හැදූ static website එකක්. මේකෙන් customers ලාට company එකේ projects, reviews, සහ services බලන්න පුළුවන්.

##  Features

- **Projects Gallery** - සිවිලිම් projects view කරන්න පුළුවන්
- **Customer Reviews** - customer reviews පෙන්වනවා
- **Services Overview** - විවිධ සිවිලිම් size අනුව services පෙන්වනවා
- **Contact Information** - company contact details display කරනවා
- **Responsive Design** - mobile සහ desktop යන දෙකටම ගැලපෙන design එකක්

##  Tech Stack

- **Frontend Framework**: Angular.js
- **Styling**: Bootstrap

##  Complete Setup Guide

### Install Angular CLI
npm install -g @angular/cli

### Create New Project
ng new sivilima-web-system

### Navigate to Project
cd sivilima-web-system

### Generate All Components
ng generate component components/home
ng generate component components/about
ng generate component components/service
ng generate component components/projects
ng generate component components/reviews
ng generate component components/contacts

### Run Development Server
ng serve

Application එක http://localhost:4200/ මත run වෙනවා.

##  Project Structure

sivilima-web-system/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.css
│   │   │   │   └── home.component.spec.ts
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.css
│   │   │   │   └── about.component.spec.ts
│   │   │   ├── service/
│   │   │   │   ├── service.component.ts
│   │   │   │   ├── service.component.html
│   │   │   │   ├── service.component.css
│   │   │   │   └── service.component.spec.ts
│   │   │   ├── projects/
│   │   │   │   ├── projects.component.ts
│   │   │   │   ├── projects.component.html
│   │   │   │   ├── projects.component.css
│   │   │   │   └── projects.component.spec.ts
│   │   │   ├── reviews/
│   │   │   │   ├── reviews.component.ts
│   │   │   │   ├── reviews.component.html
│   │   │   │   ├── reviews.component.css
│   │   │   │   └── reviews.component.spec.ts
│   │   │   └── contacts/
│   │   │       ├── contacts.component.ts
│   │   │       ├── contacts.component.html
│   │   │       ├── contacts.component.css
│   │   │       └── contacts.component.spec.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.module.ts
│   ├── assets/
│   ├── styles.css
│   └── index.html
└── package.json

##  Components

| Component | Description |
|-----------|-------------|
| **Home** | මුල් පිටුව - welcome message සහ overview |
| **About** | Company එක ගැන විස්තර |
| **Service** | විවිධ සිවිලිම් size අනුව services |
| **Projects** | සම්පූර්ණ කළ projects gallery |
| **Reviews** | Customer reviews සහ testimonials |
| **Contacts** | Contact details සහ inquiry form |

##  Additional Commands

### Production Build
ng build

### Run Tests
ng test

### Code Linting
ng lint

