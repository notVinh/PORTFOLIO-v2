import "@styles/globals.css";
<link rel="icon" href="public\assets\icons\favicon.ico" sizes="any" />;

export const metadata = {
  title: "Portfolio",
  description: "Vinh",
  icons: {
    icon: "assets/icons/favicon.ico",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* <div className="main">
          <div className="gradient"></div>
        </div> */}
        <main className="app font-mont">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
