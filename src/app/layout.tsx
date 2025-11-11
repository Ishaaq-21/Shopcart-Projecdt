import "./globals.css";
import { Toaster } from "react-hot-toast";
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased h-screen`}>
        {children}

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              padding: "10px 20px",
              background: "black",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
