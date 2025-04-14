import '@/styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
