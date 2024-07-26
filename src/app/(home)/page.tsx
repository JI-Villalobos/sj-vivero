import { Menu } from "@/src/ui/shared/Menu";
import { AccountNotRegistered } from "@/src/ui/user-home/AccountNotRegistered";
import { Table } from "@/src/ui/user-home/Table";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <AccountNotRegistered />
      </div>
      <div className="flex">
        {/**<Table />*/}
      </div>
    </main>
  );
}
