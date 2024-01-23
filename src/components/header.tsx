import { Search } from 'lucide-react'

import { Logo } from './logo'
import { Input } from './ui/input'

export function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <Logo />

      <nav className="flex items-center gap-4">
        <a
          href="#"
          className="text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary"
        >
          Home
        </a>
        <a
          href="#"
          className="text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary"
        >
          Artigos
        </a>
        <a
          href="#"
          className="text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary"
        >
          Contato
        </a>
        <a
          href="#"
          className="text-zinc-800 hover:border-b-2 hover:border-sky-500 hover:text-primary"
        >
          Sobre
        </a>
      </nav>

      <div className="relative">
        <span className="absolute left-2 top-3">
          <Search className="h-4 w-4 text-zinc-500" />
        </span>
        <Input
          placeholder="Pesquisar"
          className="w-56 bg-zinc-50 pl-8 shadow-lg"
        />
      </div>
    </header>
  )
}
