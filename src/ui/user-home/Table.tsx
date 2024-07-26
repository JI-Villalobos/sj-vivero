export const Table = () => {
    return (
        <div className="flex min-h-screen items-center justify-center w-full">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-xl">
                    <thead>
                        <tr className="bg-mp-soft-dark text-mp-white">
                            <th className="py-3 px-4 text-left">Vendor</th>
                            <th className="py-3 px-4 text-left">Fecha</th>
                            <th className="py-3 px-4 text-left">Otros</th>
                            <th className="py-3 px-4 text-left">Vivero</th>
                            <th className="py-3 px-4 text-left">Total</th>
                            <th className="py-3 px-4 text-left">Gastos</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="border-b border-mp-gray-soft">
                            <td className="py-3 px-4 text-mp-green">Company A</td>
                            <td className="py-3 px-4 text-mp-dark">25/07/2024</td>
                            <td className="py-3 px-4 text-mp-blue">100</td>
                            <td className="py-3 px-4 text-mp-blue">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$100</td>
                        </tr>
                        <tr className="border-b border-mp-gray-soft">
                            <td className="py-3 px-4 text-mp-green">Company A</td>
                            <td className="py-3 px-4 text-mp-dark">25/07/2024</td>
                            <td className="py-3 px-4 text-mp-blue">100</td>
                            <td className="py-3 px-4 text-mp-blue">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$100</td>
                        </tr>
                        <tr className="border-b border-mp-gray-soft">
                            <td className="py-3 px-4 text-mp-green">Company A</td>
                            <td className="py-3 px-4 text-mp-dark">25/07/2024</td>
                            <td className="py-3 px-4 text-mp-blue">100</td>
                            <td className="py-3 px-4 text-mp-blue">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$100</td>
                        </tr>
                        <tr className="border-b border-mp-gray-soft">
                            <td className="py-3 px-4 text-mp-green">Company A</td>
                            <td className="py-3 px-4 text-mp-dark">25/07/2024</td>
                            <td className="py-3 px-4 text-mp-blue">100</td>
                            <td className="py-3 px-4 text-mp-blue">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$5025.00</td>
                            <td className="py-3 px-4 text-mp-green">$100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}