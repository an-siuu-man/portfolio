import "./globals.css";

export const metadata = {
  title: "Ansuman Sharma",
  description: "This is my personal portfolio website, completely built by me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
