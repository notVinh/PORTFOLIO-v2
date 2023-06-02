import "@styles/globals.css";

export const metadata = { title: "Portfolio", description: "Vinh" };

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
