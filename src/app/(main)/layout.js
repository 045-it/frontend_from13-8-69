import { Prompt } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navigation";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "Aura Collection",
  description: "กระเป๋าดีไซน์เรียบหรูสำหรับทุกไลฟ์สไตล์",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}