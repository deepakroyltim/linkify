# Linkify

Your all-in-one platform to create, manage, and share branded links and QR Codes. Build meaningful connections with your audience—anywhere, anytime—with Linkify's unified toolkit.

## Features

- **URL Shortener**: Convert long URLs into shortened, shareable links
- **QR Code Generator**: Create downloadable QR codes from any URL
- **Copy to Clipboard**: One-click copying of shortened links
- **Download QR Codes**: Save QR codes as PNG images
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Toast Notifications**: Real-time feedback for user actions
- **Animated UI**: Smooth transitions and confetti celebrations

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **UI Library**: HeroUI (NextUI-based components)
- **Styling**: Tailwind CSS 4.x
- **Icons**: React Icons
- **Animations**: Framer Motion

## Prerequisites

Before running the application, ensure you have the following backend services running:

- URL Shortener API: `http://localhost:5171`
- QR Code Generator API: `http://localhost:5172`
- Authentication API: `http://localhost:5173` (Node.js backend)

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Configure your API endpoints:
```
VITE_API_URL_SHORTENER=http://localhost:5171
VITE_API_QR_GENERATOR=http://localhost:5172
VITE_API_AUTH_URL=http://localhost:5173/api
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup environment variables**:
   ```bash
   cp .env.example .env
   ```
   Update the API URLs in `.env` file as needed.

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── FormComponent.tsx      # Main form switcher
│   ├── ShortLinkForm.tsx      # URL shortening form
│   ├── QRCodeForm.tsx         # QR code generation form
│   ├── HeroComponent.tsx      # Landing hero section
│   ├── Layout.tsx             # App layout wrapper
│   ├── Navbar.tsx             # Navigation component
│   ├── Footer.tsx             # Footer component
│   └── Animation.tsx          # Background animations
├── App.tsx                    # Main app component
├── main.tsx                   # App entry point
└── providers.tsx              # Context providers
```

## API Endpoints

- **Shorten URL**: `GET http://localhost:5171/shorten?originalUrl={url}`
- **Generate QR**: `GET http://localhost:5172/generateqr?originalUrl={url}`

## Development

- **Linting**: `npm run lint`
- **Type checking**: Built into Vite build process
- **Hot reload**: Enabled by default in development mode
