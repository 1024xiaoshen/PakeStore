import Image from 'next/image'

export default function Header() {
    return (
        <div className="h-16 bg-blue-500 flex justify-between items-center">
            <div className="flex items-center justify-between">
                <Image
                    src="/store.webp"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                />
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Login
                </button>
            </div>
        </div>
    )
}
