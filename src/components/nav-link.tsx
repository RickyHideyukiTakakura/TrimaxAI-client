import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      className="text-base font-medium text-zinc-800 hover:text-sky-600 data-[current=true]:text-sky-500"
      data-current={pathname === props.to}
      {...props}
    />
  )
}
