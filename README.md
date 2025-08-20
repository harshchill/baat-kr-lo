## Baate — Realtime Chat & Forum Platform

Baate is a modern chat and discussion platform built with Next.js (App Router). It uses Clerk for authentication and Stream (GetStream) for realtime chat and channels. Users can join public topic-based forums (Python, JavaScript, React, Java, C++, Node.js) and chat in realtime.



### Features
- Public, topic-based forums powered by Stream channels
- Realtime messaging UI with `stream-chat-react`
- Authentication, sessions, and user profile with Clerk
- Protected routes via Next.js middleware
- Clean, responsive UI using Tailwind CSS and shadcn-style buttons (CVA)

### Tech Stack
- Next.js 15 (App Router) and React 19
- Clerk (`@clerk/nextjs`) for auth and user management
- Stream Chat (`stream-chat`, `stream-chat-react`) for realtime chat
- Tailwind CSS 4, class-variance-authority, lucide-react

## Getting Started

### 1) Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)
- Accounts and API keys for:
  - Clerk (Publishable and Secret keys)
  - Stream (API Key and Secret)

### 2) Installation
```bash
git clone <your-repo-url>
cd baat-kr-lo
npm install
```

### 3) Environment Variables
Create a `.env.local` in the project root with the following:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stream (GetStream)
NEXT_PUBLIC_STREAM_KEY=your_stream_public_key
STREAM_SECRET=your_stream_secret
```

### 4) Run the app
```bash
npm run dev
# open http://localhost:3000
```

## How It Works

### Auth with Clerk
- `app/layout.js` wraps the app in `ClerkProvider` and the navbar shows `UserButton` for account controls.
- `middleware.js` protects all non-public routes. Public routes include `/sign-in`, `/sign-up`, and `/api/create`.

### Realtime Chat with Stream
- The server route `app/api/create/route.js` provisions the user on Stream, creates a user token, stores it in Clerk `publicMetadata`, and ensures the user is added to public channels:
  - `python-room`, `js-room`, `react-room`, `java-room`, `c-room`, `node-room`.
- The forum detail page `app/forum/[slug]/page.js` reads the Clerk user and passes `id`, `firstName`, and the Stream `token` from `publicMetadata` into the chat component.
- The chat UI is powered by `components/ChatForum.js`, which connects a Stream client with `useCreateChatClient` and renders a `Channel` view with `MessageList` and `MessageInput`.

### Forums
- `app/forum/page.js` lists the available forums and links to each channel using slugs. Clicking "Discuss" opens the corresponding forum chat room.

## API

### POST /api/create
Provisions a Stream user and attaches the Stream token to the Clerk user's `publicMetadata`.

Request body shape (minimal example):
```json
{
  "data": { "id": "clerk_user_id" }
}
```

Example call after sign-in (client-side):
```js
await fetch('/api/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: { id: clerkUserId } })
});
```

Notes:
- The route uses the Stream Server SDK on the server to create the token and channels.
- The token is stored on the Clerk user as `publicMetadata.token` and consumed by the chat UI.

## Project Structure (key paths)
- `app/page.js` — landing page
- `app/forum/page.js` — forum directory
- `app/forum/[slug]/page.js` — forum chat room (per slug/channel)
- `components/ChatForum.js` — Stream client + chat UI
- `app/api/create/route.js` — user provisioning and channel membership (Stream)
- `middleware.js` — route protection with Clerk
- `components/Navbar.js` — navigation + Clerk `UserButton`

## Scripts
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server

## Deployment
- Works well on Vercel. Add the environment variables in your project settings:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
  - `NEXT_PUBLIC_STREAM_KEY`, `STREAM_SECRET`

## Acknowledgements
- Authentication by Clerk
- Realtime chat by Stream (GetStream)

