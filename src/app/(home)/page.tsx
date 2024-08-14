import { getCurrentAccounting } from "@/src/lib/active-accounts";
import { AccountingInfo } from "@/src/ui/user-home/AccountInfo";
import { Table } from "@/src/ui/user-home/Table";
import { cookies } from "next/headers";
import { AccessToken } from "../api/auth/route";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = cookies()
  const userProfile = cookieStore.get('user-profile')
    
  const profile: AccessToken = JSON.parse(userProfile?.value!)

  await getCurrentAccounting(profile.branchId, profile.token).then((res) => {
    if (res == null) {
      redirect('/not-account')
    }
  })

  return (
    <main className="flex flex-col">
      <div className="w-full flex flex-auto items-center justify-center">
        <AccountingInfo />
      </div>
      <div className="flex">
        <Table />
      </div>
    </main>
  );
}
