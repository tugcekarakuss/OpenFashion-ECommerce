export default function Divider() {
    return (
        <div className="mt-4 flex justify-center">
            <div className="relative w-32 border-t border-placeholder">
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-placeholder bg-white" />
            </div>
        </div>
    )
}
     