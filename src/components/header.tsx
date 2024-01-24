import { Search } from 'lucide-react'

import { Logo } from './logo'
import { NavLink } from './nav-link'
import { Input } from './ui/input'

export function Header() {
  return (
    <header className="flex items-center justify-between px-16 py-10">
      <Logo />

      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">Início</NavLink>

        <NavLink to="/articles">Artigos</NavLink>

        <NavLink to="/about">Sobre</NavLink>

        <NavLink to="/contact">Contato</NavLink>
      </nav>

      <div className="relative">
        <span className="absolute left-2 top-3">
          <Search className="h-4 w-4 text-zinc-500" />
        </span>

        <Input
          placeholder="Pesquisar"
          className="w-56 bg-zinc-50 pl-8 shadow-md"
        />
      </div>
    </header>
  )
}
