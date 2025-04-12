import '@/styles/globals.css';
type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
