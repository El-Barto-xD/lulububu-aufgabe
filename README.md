# Color Picker App

A full-stack color picker app built with **React (frontend)** and **Symfony (backend)**, powered by **DDEV** for local development.

---

## Requirements

* [DDEV](https://ddev.readthedocs.io/en/stable/) (and its dependencies) installed
* Node.js + npm (or yarn)

---

## Getting Started

### 1. Start the local environment

```
ddev start
```

Wait until the containers are fully up and running (this could take a few minutes).

---

### 2. Set up the Symfony database

Run the following commands inside the DDEV environment:

```
ddev exec backend/bin/console make:migration
ddev exec backend/bin/console doctrine:migrations:migrate --no-interaction
```

This will create the necessary tables.

---

### 3. Set up and run the frontend

In a separate terminal:

```
cd frontend
npm install    # or yarn
npm start      # or yarn start
```

This starts the React dev server with hot reload.

---

### 4. Open the app

Frontend with live reload:

```
http://lulububu-aufgabe.ddev.site:3000/
```

API endpoints (Symfony):

```
http://lulububu-aufgabe.ddev.site/api/
```

---

## Tech Stack

* **Frontend**
  * React
  * TypeScript
  * SCSS
  * i18next
  * react-toastify
* **Backend**
  * Symfony
  * MySQL (via DDEV)

---

## Features

* RGB sliders + color preview
* Save colors to the database
* Color history
* Delete saved colors
* i18n translation preparation
* Toast notifications for save and delete actions

---

## Project Structure

```
.
├── backend/      # Symfony backend (API)
├── frontend/     # React frontend (CRA)
├── .ddev/        # DDEV config
```
