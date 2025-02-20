import NavBar from "@/components/NavBar";

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}