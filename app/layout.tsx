// @ts-expect-error The CSS file is handled by the framework's build pipeline.
import './ui/global.css';
import { inter } from './ui/font';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}