import './globals.css';
import SiteShell from '@/components/ui/SiteShell';

const title = 'SWAP Windows Corp. — Architectural Windows & Glazing Systems';
const description =
  'Wholesale supplier of premium architectural windows, doors, aluminum glazing systems, and glass for commercial and residential glazing contractors and window dealers.';

export const metadata = {
  title: { default: title, template: '%s | SWAP Windows Corp.' },
  description,
  icons: {
    icon: '/favicon.webp',
    shortcut: '/favicon.webp',
  },
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAFAFA] text-[#1E293B] antialiased selection:bg-[#0A2540] selection:text-[#F4F5F6]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
