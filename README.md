# KOY

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### TypeScript

The project is developed using TypeScript in conjunction with Next.js, adding static typing and improved tooling to your application.

## Getting Started

First, install the dependencies:

```bash
npm install --f
# or
yarn install --f
# or
pnpm install --f
# or
bun install --f
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Project Structure

## Services Folder (`services`)

The `services` folder is dedicated to handling HTTP requests and API-related logic. It encapsulates functions for making HTTP requests, promoting modularization and reusability.

#### HTTP Request Service

Create a file, such as `apiService.ts`, inside the `services` folder to handle HTTP requests. This file contains functions like `fetchData` and `postData`.

## Components Folder (`components`)

The `components` folder is used for creating reusable UI components. It helps maintain a library of components that can be used across the application.

#### Example Reusable Component

Within the `components` folder, create files like `Button.tsx` to define reusable UI components like buttons.

## Sections Folder (`sections`)

The `sections` folder is utilized to structure different parts of the website. It helps organize components and content.

## Store Folder (`store`)

The `store` folder is used for state management, often employing tools like Redux.

#### Redux Store Configuration

Create a file, such as `store.ts`, inside the `store` folder to configure the Redux store.

#### Redux Reducer Example

Within the `store/reducers` folder, create files like `counterReducer.ts` to define Redux reducers.

#### Connecting Redux to a Component

Within the `components` folder, components like `CounterDisplay.tsx` can connect to the Redux store.

## Dependencies

The project uses the following dependencies:

- [@material-tailwind/react](https://www.npmjs.com/package/@material-tailwind/react): v2.1.5
- [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons): v4.11.3
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit): v1.9.7
- [axios](https://www.npmjs.com/package/axios): v1.6.1
- [next](https://www.npmjs.com/package/next): v14.0.2
- [next-auth](https://www.npmjs.com/package/next-auth): v4.24.5
- [react](https://www.npmjs.com/package/react): v18
- [react-dom](https://www.npmjs.com/package/react-dom): v18
- [react-icons](https://www.npmjs.com/package/react-icons): v4.12.0
- [react-redux](https://www.npmjs.com/package/react-redux): v8.1.3
- [react-split](https://www.npmjs.com/package/react-split): v2.0.14

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
