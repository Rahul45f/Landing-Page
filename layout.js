export const metadata = {
  title: "Web Landing Page",
  description: "Landing page built with React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
