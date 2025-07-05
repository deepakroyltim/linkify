# Linkify Frontend

Your all-in-one platform to create, manage, and share branded links and QR Codes. Build meaningful connections with your audience—anywhere, anytime—with Linkify's unified toolkit.

## Features

- **URL Shortener**: Convert long URLs into shortened, shareable links
- **QR Code Generator**: Create downloadable QR codes from any URL
- **User Authentication**: Sign up/sign in with secure authentication
- **Dashboard**: Manage and track your links and QR codes
- **Dark/Light Theme**: Toggle between themes with persistent storage
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
- **Routing**: React Router DOM
- **State Management**: React Context API

## Backend Repository

The backend services for this application are available at:
**[Linkify Backend](https://github.com/deepakroyltim/linkify-backend)**

## Prerequisites

Before running the application, ensure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **yarn** package manager
3. **Backend services** running (see backend repository)

## Environment Variables

Copy `.env.example` to `.env` and configure your API endpoints:

```bash
cp .env.example .env
```

Update the environment variables with your backend service URLs:
```env
VITE_API_URL_SHORTENER=https://your-shortener-api.com
VITE_API_QR_GENERATOR=https://your-qr-api.com
VITE_API_AUTH_URL=https://your-auth-api.com/api
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

## Pages & Features

- **Home**: Landing page with hero section and feature cards
- **Dashboard**: Protected route for authenticated users to manage links
- **About**: Company information and mission
- **FAQ**: Frequently asked questions
- **Pricing**: Free service information with donation options
- **Guide**: Step-by-step tutorial with vertical stepper design
- **Contact**: Contact form and support information
- **Settings**: User preferences (coming soon)
- **Authentication**: Sign up/Sign in pages with theme toggle

## API Integration

The frontend integrates with the following backend services:
- **URL Shortener Service**: Creates and manages shortened URLs
- **QR Code Generator Service**: Generates downloadable QR codes
- **Authentication Service**: Handles user registration and login

Refer to the [backend repository](https://github.com/deepakroyltim/linkify-backend) for API documentation.

## Development

- **Linting**: `npm run lint`
- **Type checking**: Built into Vite build process
- **Hot reload**: Enabled by default in development mode
- **Theme System**: Dark/light mode with persistent storage
- **Protected Routes**: Authentication-based route protection
- **Error Handling**: Comprehensive error boundaries and validation

## Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

3. **Configure environment variables** on your hosting platform

4. **Ensure backend services** are deployed and accessible

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in this repository
- Contact us through the application's contact form
- Check the FAQ page for common questions
