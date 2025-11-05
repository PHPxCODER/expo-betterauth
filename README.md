# Expo + Better Auth

A modern authentication starter template for Expo (React Native) using [Better Auth](https://better-auth.com), featuring social OAuth and email/password authentication with a beautiful UI.

## ✨ Features

- 🔐 Email/Password + Google/GitHub OAuth
- 🎨 Modern UI with NativeWind (Tailwind CSS)
- 🔒 Secure storage with Expo Secure Store
- 📱 iOS, Android, and Web support
- 🗃️ Prisma ORM with PostgreSQL

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/PHPxCODER/expo-betterauth.git
cd expo-betterauth
pnpm install
```

### Environment Setup

```bash
cp env.example .env
```

Configure `.env`:

```env
BETTER_AUTH_URL=http://localhost:8081
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev
```

### OAuth Configuration

**Google OAuth:** [Console](https://console.cloud.google.com) → Redirect: `http://localhost:8081/api/auth/callback/google`

**GitHub OAuth:** [Settings](https://github.com/settings/developers) → Callback: `http://localhost:8081/api/auth/callback/github`

### Run the App

```bash
pnpm start    # Development server
pnpm run dev:ios    # iOS
pnpm run android    # Android
pnpm run dev:web    # Web
```

## 📁 Project Structure

```
src/
├── app/                 # Expo Router pages
│   ├── index.tsx       # Sign in
│   ├── sign-up.tsx     # Registration
│   ├── dashboard.tsx   # Protected route
│   └── api/auth/       # Auth endpoints
├── components/ui/       # UI components
├── lib/
│   ├── auth.ts         # Server config
│   └── auth-client.ts  # Client config
└── global.css          # Tailwind styles
```

## 🎨 UI Components

Built-in components: Button, Card, Input, Avatar, Separator, Dialog

All styled with NativeWind variants (default, secondary, outline, ghost, link)

## 🔑 Authentication Flow

1. Sign Up (email/password or OAuth)
2. Session management with Secure Store
3. Protected routes (dashboard)
4. Password reset flow

## 📊 Database Schema

- **User** - Profile information
- **Session** - Active sessions
- **Account** - OAuth connections
- **Verification** - Email tokens

## 🚢 Deployment

```bash
npm install -g eas-cli
eas login
eas build --platform android
eas build --platform ios
```

## 🐛 Troubleshooting

**OAuth not working?**
- Verify callback URLs match
- Check `BETTER_AUTH_URL` and `trustedOrigins`

**Database errors?**
- Verify `DATABASE_URL`
- Run `npx prisma generate`

**Expo errors?**
- Run `npm run clean`
- Try `expo start -c`

## 📚 Resources

- [Better Auth Docs](https://better-auth.com)
- [Expo Docs](https://docs.expo.dev)
- [NativeWind Docs](https://www.nativewind.dev)
- [Prisma Docs](https://www.prisma.io/docs)

## 📝 License

MIT License

---

Built with ❤️ using Better Auth and Expo