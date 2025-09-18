## Frontend Mentor - Newsletter Sign-up Form With Success Message Solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p>
  <a href="https://www.frontendmentor.io/solutions/mobile-first-responsive-pixel-perfect-w-html-and-css-and-js-igrSvu40DR">
    <img
      alt="Solution post"
      src="https://img.shields.io/badge/Frontendmentor-blue?label=Solution%20on"
    /></a>
  <a href="https://haquanq-frontendmentor.github.io/newsletter-sign-up-form/">
    <img
      alt="Live demo"
      src="https://img.shields.io/badge/Demo-teal?label=Live"
    /></a>
  <a href="./LICENSE"
    ><img
      allt="MIT License"
      src="https://img.shields.io/badge/MIT-blue?label=license"
  /></a>
</p>

## Table of Contents

- [Project Overview](#sunrise-project-overview)
- [Tech Stack and Approach](#stars-tech-stack-and-approach)
- [Local Development](#leaves-local-development)
- [Deployment](#maple_leaf-deployment)

## :sunrise: Project Overview

### Challenge Requirements

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Status

Features

- [x] Accessible form controls with validataions

Accessibility

- [x] Responsive accross different screen sizes
- [x] Interactive elements have clear focus indicator

### Preview (Desktop)

![](./docs/design/desktop-design.jpg)

## :stars: Tech Stack and Approach

### Built With

- **HTML5** – Semantic structure
- **CSS Grid & Flexbox** – Layout
- **PostCSS** – Nested rules, custom media queries, future CSS features, minification
- **Stylelint** – CSS linting, code style consistency
- **TypeScript** - Interactivity and application logic
- **Vite** - Fast development server, production build and easy configuration

### Approach

- Mobile-first workflow for better performance on smaller devices
- Accessibility guided by [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

## :leaves: Local Development

### Prerequisites

Install the following:

- Git (latest version)
- Node.js (latest LTS recommended)
- pnpm (latest version)

### Setup

```
git clone https://github.com/haquanq-frontendmentor/newsletter-sign-up-form.git
cd newsletter-sign-up-form
pnpm install
```

### Start Development Server

```
pnpm dev
```

## :maple_leaf: Deployment

Deployed to Github Pages via Github Actions (manually triggered).
