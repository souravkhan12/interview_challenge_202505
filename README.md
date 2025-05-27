# Notes App

Note: This is an interview challenge intended for our hiring usecase. Check [CHALLENGES.md](./CHALLENGES.md) for details. This app is not production ready and will have documented or undocumented bugs required for assessing candidates.

A modern note-taking application built with Remix, featuring user authentication and real-time note management.

## Features

- 🔐 User Authentication
- 📝 Create and manage personal notes
- 🎨 Modern UI with ShadcN components
- 📱 Responsive design

## Tech Stack

- **Framework**: [Remix](https://remix.run)
- **Database**: PostgreSQL with [Drizzle ORM](https://orm.drizzle.team)
- **Styling**: [TailwindCSS](https://tailwindcss.com) + [ShadcN](https://ui.shadcn.com)
- **Authentication**: Session-based with cookies
- **Development**: TypeScript, ESLint
- **Deployment**: Docker for database

## Prerequisites

- Node.js >= 20
- Docker and docker-compose
- PostgreSQL client (optional, for direct DB access)

## Getting Started

1. Clone the repository
2. Copy environment variables:

   ```bash
   cp example.env .env
   ```

3. Start the database:

   ```bash
   docker compose up -d
   ```

4. Install dependencies and set up the database:

   ```bash
   npm run setup
   ```

5. Seed the database (Only to get development data):

   ```bash
   npm run db:seed
   ```

   This will load dummy user data into the database

6. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running at [http://localhost:3000](http://localhost:3000)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run validate` - Run type checking and linting

### Database Management

The application provides several scripts for database management:

- `npm run db:studio` - Opens Drizzle Studio, a GUI for browsing and managing data
- `npm run db:generate` - Generates new migration files when schema changes
- `npm run db:migrate` - Applies pending migrations to the database
- `npm run db:seed` - Resets and populates the database with test data

### Test Data Generation

The seed script (`app/db/seed.ts`) populates the database with:

1. Three test users with predefined credentials
2. dummy notes per user featuring:
   - Various title formats (sentences, slugs, word combinations)
   - Different content types:
     - Multi-paragraph articles
     - Bulleted lists
     - Short notes
     - Structured notes with sections
     - Mixed content with overview and details
   - Random dates between 2024 and current date

To reset the database and regenerate test data:

```bash
npm run db:seed
```

### Database Connection

The application expects a PostgreSQL database running on port 5499 (mapped from container port 5432). Configure the connection using these environment variables:

```env
DATABASE_URL=postgresql://notes_user:notes_password@localhost:5499/notes_db
```

For development, copy `example.env` to `.env` and adjust the values as needed.

## Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Secret for session encryption
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

See `example.env` for a complete list of variables.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run locally, and test your changes locally
4. Commit frequently, with useful, crisp and concise git messages that explains the intent.
5. Submit a pull request

## License

Copyright 2025 Beneathatree Educational Services Pvt. Ltd.

This code is provided solely for use by candidates completing a technical assessment for Beneathatree.
Redistribution or use in any other context is prohibited without explicit permission.
