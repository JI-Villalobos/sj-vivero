export const Spinner = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div
                className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-0 border-l-2
             text-mp-white rounded-full"
                role="status"
                aria-label="loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}