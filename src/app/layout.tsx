import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased h-screen`}>{children}</body>
    </html>
  );
};

export default RootLayout;
