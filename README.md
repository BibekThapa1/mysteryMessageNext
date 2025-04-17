# MessageApp

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a messaging application that allows users to sign up, verify their accounts, send messages, and manage their message preferences.

## Features

- User authentication with [NextAuth.js](https://next-auth.js.org).
- Email verification using one-time codes.
- Secure password hashing with `bcryptjs`.
- MongoDB integration with `mongoose` for data storage.
- API routes for user registration, login, message sending, and more.
- Tailwind CSS for styling.
- React Email for sending verification emails.

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
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

- **POST** `/api/auth/sign-up`: Register a new user.
- **POST** `/api/auth/sign-in`: Log in an existing user.
- **POST** `/api/auth/verify-code`: Verify a user's email with a code.

### Messaging

- **POST** `/api/send-message`: Send a message to a user.
- **GET** `/api/get-messages`: Retrieve messages for the authenticated user.
- **POST** `/api/accept-messages`: Update message acceptance status.
- **GET** `/api/accept-messages`: Check if the user is accepting messages.

### Utilities

- **GET** `/api/check-username-unique`: Check if a username is available.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
