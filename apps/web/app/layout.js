import './globals.css';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading'
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata = {
  title: 'RP Education Hub | HKCL Computer Centre',
  description: 'Government authorized HKCL computer institute in Hisar offering computer, ITI, vocational, and library courses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}