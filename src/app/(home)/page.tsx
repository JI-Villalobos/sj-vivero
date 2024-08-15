import { getCurrentAccounting } from "@/src/lib/active-accounts";
import { AccountingInfo } from "@/src/ui/user-home/AccountInfo";
import { Table } from "@/src/ui/user-home/Table";
import { cookies } from "next/headers";
import { AccessToken } from "../api/auth/route";
import { redirect } from "next/navigation";
import { ActiveAccounting } from "@/src/lib/definitions";
import Link from "next/link";
import { MutationWraper } from "@/src/ui/user-home/MutationWraper";

export default async function Home() {
  const cookieStore = cookies()
  const userProfile = cookieStore.get('user-profile')

  const profile: AccessToken = JSON.parse(userProfile?.value!)

  const active: ActiveAccounting = await getCurrentAccounting(profile.branchId, profile.token).catch(() => redirect('/temp-error'))

  if (active == null) {
    redirect('/not-account')
  }

  return (
    <main className="flex flex-col">
      <div className="w-full flex flex-auto items-center justify-center">
        <AccountingInfo accountingId={active.accountingId} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row w-full items-center justify-center">
          <MutationWraper />
          <Link href="#"
            className="p-2 bg-mp-blue text-mp-white rounded w-1/12 text-sm text-center m-6 hover:bg-mp-soft-dark"
          >
            Cerrar Turno
          </Link>
        </div>
        <Table />
      </div>
    </main>
  );
}
