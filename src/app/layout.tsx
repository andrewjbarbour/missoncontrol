import './globals.css';

export const metadata = {
  title: 'Andrew Barbour | Software Engineer',
  description:
    "I'm a full-stack developer passionate about building apps people love. Check out my work and get in touch through this site.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: './manifest.json',
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: ['./apple-touch-icon.png'],
  },
  icons: {
    icon: './favicon.ico',
    apple: './apple-touch-icon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div>Topbar</div>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
