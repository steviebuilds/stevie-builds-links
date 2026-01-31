# Stevie Builds Links

A minimal, beautiful link-in-bio site showcasing OpenClaw automation capabilities.

## 🎨 Design

- **Dark theme** with brand color `#3ED1FE` (bright cyan)
- **Mobile-optimized** responsive design
- **Smooth transitions** and hover effects
- **Modern UI** following current design trends

## 📱 Pages

### Home (`/`)
Minimal link tree with single link to OpenClaw automation showcase.

### OpenClaw (`/openclaw`)
Beautiful article page featuring:
- Hero section introducing OpenClaw
- Breakdown of automation capabilities:
  - Email triage & auto-response
  - Receipt OCR & expense tracking
  - Remote camera control & monitoring
- Link to DIY tutorial by @ashen_one
- Professional services CTA

## 🚀 Deployment

### Docker

Build and run with Docker:
```bash
docker build -t stevie-builds-links .
docker run -p 3000:3000 stevie-builds-links
```

Or use docker-compose:
```bash
docker-compose up -d
```

### Coolify

This project is ready for Coolify deployment:
1. Connect your GitHub repository
2. Coolify will automatically detect the Dockerfile
3. Deploy with one click

## 🛠 Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```

## 📦 Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Docker** for containerization

## 🔗 Links

- Tutorial: [OpenClaw Setup by @ashen_one](https://x.com/ashen_one/status/2017317310059421860)
- Contact: [@stevie.builds](https://twitter.com/stevie.builds)

## 📄 License

© 2026 Stevie Builds. All rights reserved.
