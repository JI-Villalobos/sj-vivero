export default function Loading() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-4/12 card rounded-[12px] m-10 text-xl shadow-2xl p-5 animate-pulse">
                <a href="#">
                    <div className="w-full h-64 bg-mp-gray-soft rounded mb-3"></div>
                    <div className="h-4 bg-mp-gray-soft rounded w-3/4 mb-2"></div>
                    <div className="h-1 bg-mp-gray-soft rounded w-full mb-2"></div>
                    <div className="h-4 bg-mp-gray-soft rounded w-1/4"></div>
                </a>
            </div>
        </div>
    )
}