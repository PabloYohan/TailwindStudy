import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'

export function SideBar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="pd-0 mx-1 flex-1 border-0 bg-transparent text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <MainNavigation />
    </aside>
  )
}
