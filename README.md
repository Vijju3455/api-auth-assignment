# API Auth Assignment

An Angular application demonstrating API authentication with login functionality and protected routes.

## Features

- User login with hardcoded credentials
- Authentication guard protecting dashboard route
- Token-based authentication using localStorage
- Responsive UI with Angular Material components

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

# Installation

# How to Run the Application

1. Unzip the project folder
   ```bash
   unzip api-auth-assignment.zip
   cd api-auth-assignment

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
ng serve
```

The application will be available at `http://localhost:4200`.

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. Navigate to the application in your browser.
2. You'll be redirected to the login page.
3. Use the following credentials to log in:
   - Username: `user`
   - Password: `1234`
4. After successful login, you'll be redirected to the dashboard.
5. The dashboard is protected by an authentication guard.

## Project Structure

```text
src/
├── app/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── auth.guard.ts
│   ├── login/
│   │   ├── login.component.ts
│   │   ├── login.component.html
│   │   └── login.component.css
│   └── dashboard/
│       ├── dashboard.component.ts
│       ├── dashboard.component.html
│       └── dashboard.component.css
├── index.html
├── main.ts
└── styles.css
```

## Authentication Flow

1. User enters credentials on login page
2. Credentials are validated against hardcoded values
3. On success, a dummy token is stored in localStorage
4. AuthGuard checks for token presence on protected routes
5. If no token, user is redirected to login

## Technologies Used

- Angular 16
- TypeScript
- RxJS
- Angular Router
- localStorage for token storage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
