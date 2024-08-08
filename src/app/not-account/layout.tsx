import { Header } from "@/src/ui/shared/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </div>
    );
  }