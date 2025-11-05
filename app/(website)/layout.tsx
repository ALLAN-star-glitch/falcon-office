// app/(website)/layout.tsx

import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";


export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
