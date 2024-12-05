// app/layout.tsx ou o arquivo correspondente
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "eLearning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ backgroundColor: "red" }}>Children content</div>
        {children}
      </body>
    </html>
  );
}