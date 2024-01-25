import { NavLink } from 'react-router-dom'

import { Separator } from './ui/separator'

interface CardProps {
  category: string
  title: string
  image?: string
  description: string
}

export function Card({ category, title, image, description }: CardProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <NavLink
          to=""
          className="text-2xl font-bold text-zinc-700 hover:text-sky-500"
        >
          {category}
        </NavLink>

        <img
          className="h-64 w-full rounded-sm object-cover"
          src={image}
          alt=""
        />
      </div>

      <div>
        <NavLink
          to=""
          className="text-lg font-semibold text-zinc-700 hover:text-sky-500"
        >
          {title}
        </NavLink>

        <span className="mb-2 mt-4 block w-fit text-sm font-light text-zinc-700 ">
          Ricky Takakura | 22.01.2024
          <Separator className="mb-2 h-0.5 bg-sky-500" />
        </span>

        <p className="line-clamp-4 text-justify text-zinc-700">{description}</p>
      </div>
    </div>
  )
}
