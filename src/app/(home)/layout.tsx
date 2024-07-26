import { Header } from "@/src/ui/shared/Header";
import { Menu } from "@/src/ui/shared/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-row">
        <Menu />
        <Header />
         {children}
      </div>
    );
  }