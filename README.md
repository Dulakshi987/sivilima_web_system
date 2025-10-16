# Sivilima Web System

**Client Project - Static Website for Sivilima Services**

This is a static website built for a sivilima company. Customers can view company projects, reviews, and services through this platform.

## 🎯 Features

- **Projects Gallery** - View construction projects
- **Customer Reviews** - Display customer reviews
- **Services Overview** - Show services based on different construction sizes
- **Contact Information** - Display company contact details
- **Responsive Design** - Compatible with both mobile and desktop devices

## 🛠️ Tech Stack

- **Frontend Framework**: Angular.js
- **Styling**: Bootstrap

## 🚀 Complete Setup Guide

### Install Angular CLI
```bash
npm install -g @angular/cli
```

### Create New Project
```bash
ng new sivilima-web-system
```

### Navigate to Project
```bash
cd sivilima-web-system
```

### Generate All Components
```bash
ng generate component components/home
```
```bash
ng generate component components/about
```
```bash
ng generate component components/service
```
```bash
ng generate component components/projects
```
```bash
ng generate component components/reviews
```
```bash
ng generate component components/contacts
```

### Run Development Server
```bash
ng serve
```

Application runs at http://localhost:4200/

## 🎨 Components

| Component | Description |
|-----------|-------------|
| **Home** | Main page - welcome message and overview |
| **About** | Company information |
| **Service** | Services based on different construction sizes |
| **Projects** | Completed projects gallery |
| **Reviews** | Customer reviews and testimonials |
| **Contacts** | Contact details and inquiry form |

## 💻 Additional Commands

### Production Build
```bash
ng build
```

### Run Tests
```bash
ng test
```

### Code Linting
```bash
ng lint
```


## 📄 License

MIT License

## 📧 Contact

For any questions about the project, please contact us.
