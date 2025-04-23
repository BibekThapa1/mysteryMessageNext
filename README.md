# MessageApp

MessageApp is a messaging application built with [Next.js](https://nextjs.org). It allows users to sign up, verify their accounts, send messages, and manage their message preferences. The project leverages modern web technologies and best practices to deliver a secure and scalable messaging platform.

## Features

- **User Authentication**: Powered by [NextAuth.js](https://next-auth.js.org) for secure and extensible authentication.
- **Email Verification**: Users verify their accounts using one-time codes sent via email.
- **Secure Passwords**: Passwords are hashed using `bcryptjs` for enhanced security.
- **Database Integration**: MongoDB is used for data storage, managed with `mongoose`.
- **API Routes**: RESTful API endpoints for user authentication, messaging, and utilities.
- **Styling**: Built with Tailwind CSS for a modern and responsive design.
- **Email Templates**: Uses React Email for customizable and reusable email templates.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com) (local or cloud instance)
- A `.env` file with the following variables:
  ```env
  MONGODB_URL=<your-mongodb-connection-string>
  RESEND_API_KEY=<your-resend-api-key>
  NEXT_AUTH_SECRET=<your-next-auth-secret>
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd message-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

To build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```
message-app/
├── .env                  # Environment variables
├── .gitignore            # Files to ignore in Git
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── src/
│   ├── app/              # Application pages and layouts
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication routes
│   │   │   ├── [...nextauth]/ # NextAuth.js configuration
│   │   │   │   ├── route.ts  # API handler for authentication
│   │   │   │   └── options.ts # NextAuth options
│   ├── context/          # React context providers
│   ├── helpers/          # Utility functions
│   ├── lib/              # Libraries (e.g., database connection)
│   ├── model/            # Mongoose models
│   ├── schemas/          # Zod validation schemas
│   ├── types/            # TypeScript types
│   └── middleware.ts     # Middleware for route protection
├── emails/               # Email templates
└── README.md             # Project documentation
```

## API Endpoints

### Authentication

- **GET/POST** `/api/auth/[...nextauth]`: Handles authentication using NextAuth.js.

### Messaging

- **POST** `/api/send-message`: Send a message to a user.
- **GET** `/api/get-messages`: Retrieve messages for the authenticated user.
- **POST** `/api/accept-messages`: Update message acceptance status.
- **GET** `/api/accept-messages`: Check if the user is accepting messages.

### Utilities

- **GET** `/api/check-username-unique`: Check if a username is available.

## Authentication Flow

The authentication flow is powered by NextAuth.js. The `route.ts` file in the `[...nextauth]` directory serves as the API handler for authentication requests. It imports the `authOptions` configuration from the `options.ts` file, which defines the authentication providers, callbacks, and session management.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - Learn how to implement authentication with NextAuth.js.
- [MongoDB Documentation](https://www.mongodb.com/docs/) - Learn how to work with MongoDB.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
