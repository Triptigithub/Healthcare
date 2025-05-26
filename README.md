# Healthcare Dashboard (React - Static Display)

A pixel-perfect, responsive healthcare dashboard built using React. This project recreates a static visual design based on the provided reference image, demonstrating component-based UI development, static data rendering, and responsive styling.

---

## Project Overview

This single-page React application represents a clean, minimalist healthcare dashboard featuring:

- A fixed sidebar navigation with static links
- A top header with logo, search bar, notifications, user profile, and add button
- Main dashboard content including:
  - Anatomical illustration with health indicators
  - Health status cards
  - Static calendar view with appointment highlights
  - Upcoming schedule with appointment cards
  - Activity feed with a static bar chart

The project uses mock data for all visual elements passed via props, focusing entirely on UI fidelity without interactive functionality.

---

## Live Demo

[Live Site URL here]  

---

## Screenshot

![Dashboard Screenshot](https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png)

---

## Features

- Pixel-perfect recreation of the provided design image
- Fully responsive layout for desktop, tablet, and mobile screens
- Modular React component architecture with reusable components
- Static data rendering through JavaScript mock data files
- Styled using CSS Modules for scoped and maintainable styling
- Accessible with alt attributes and semantic HTML

---

## Tech Stack

- React (functional components with hooks)
- CSS Modules for styling
- JavaScript for mock data management
- Vite (or create-react-app) for project setup and development

---

## Project Structure
src/
├── assets/ # Static images and SVGs
├── components/ # React components (Header, Sidebar, DashboardMainContent, etc.)
├── data/ # Static mock data (appointments, health status, navigation links)
├── styles/ # CSS Modules for styling components
├── App.jsx # Root component orchestrating layout
├── main.jsx # Entry point
└── index.css # Global styles



---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/healthcare-dashboard.git
cd healthcare-dashboard


2.Install dependencies:
npm install
# or
yarn install


3.Run the development server:
npm run dev
# or
yarn dev


4.Open your browser at http://localhost:3000 to view the dashboard.


### Deployment
The app is deployed on [Vercel] at:[healthcare-mu-pearl.vercel.app]
