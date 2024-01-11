export default function Header() {
    return (
      <div className="w-full h-20 top-0 z-10 fixed bg-slate-100">
        <div className="container mx-auto px-4 h-full">
          <div className="flex-1 justify-between items-center h-full w-full grid grid-cols-2">
            <a href="/" className="hover:text-white">
              <div className="font-bold text-lg">Search Images</div>
            </a>
          </div>
        </div>
      </div>
    )
}