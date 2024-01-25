import { Helmet } from 'react-helmet-async'

import { Card } from '@/components/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <div className="flex gap-10">
        <img
          className="h-64 w-[576px] rounded-sm shadow-md shadow-zinc-300"
          src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-zinc-700">Main article</h1>

          <p className="line-clamp-6 w-[522px] text-justify text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non,
            esse quis impedit enim provident, velit dolore alias expedita
            nesciunt eveniet ipsam corporis! Cupiditate, molestias voluptates
            sapiente natus numquam assumenda! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam ipsa porro, delectus alias
            adipisci nisi, at blanditiis quam ea impedit consectetur repudiandae
            soluta praesentium quisquam iste dolor. Itaque, incidunt esse.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia delectus, suscipit eaque asperiores nostrum rem ipsam
            perspiciatis cumque, voluptate minima enim quam voluptates harum
            molestiae quae, quos unde voluptas.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://github.com/rickyhideyukitakakura.png"
              alt=""
              className="h-12 w-12 rounded-sm"
            />
            <div>
              <span className="text-sm font-semibold text-zinc-700">
                Matheus Slompo
              </span>
              <p className="text-xs font-light text-zinc-700">
                Agosto 01, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator
        decorative={true}
        className="-mx-16 my-10 w-screen bg-gradient-to-r from-cyan-100 to-blue-100"
      />

      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-bold text-zinc-700">Conhecendo as IAs</h2>

        <Carousel
          opts={{
            align: 'center',
          }}
          className="flex w-full items-center justify-center"
        >
          <CarouselContent className="flex max-w-5xl gap-4">
            <CarouselItem className="basis-1/2">
              <Card
                category="IA para o dia a dia"
                title="Colors and AI"
                image="https://images.unsplash.com/photo-1682686581660-3693f0c588d2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem sed accusantium laboriosam ducimus sequi fugit vero, impedit dolore mollitia eaque reprehenderit perferendis, maiores enim quasi repellendus. Eveniet, vitae."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <Card
                category="IAs para perfis empresariais"
                title="Colors and AI"
                image="https://plus.unsplash.com/premium_photo-1706026427244-3b3df84382d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem sed accusantium laboriosam ducimus sequi fugit vero, impedit dolore mollitia eaque reprehenderit perferendis, maiores enim quasi repellendus. Eveniet, vitae."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <Card
                category="Deep learning"
                title="Colors and AI"
                image="https://images.unsplash.com/photo-1695273718260-cf359edd1b5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem sed accusantium laboriosam ducimus sequi fugit vero, impedit dolore mollitia eaque reprehenderit perferendis, maiores enim quasi repellendus. Eveniet, vitae."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <Card
                category="IA para o dia a dia"
                title="Colors and AI"
                image="https://images.unsplash.com/photo-1705798543468-5b951da25e1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem sed accusantium laboriosam ducimus sequi fugit vero, impedit dolore mollitia eaque reprehenderit perferendis, maiores enim quasi repellendus. Eveniet, vitae."
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Separator
        decorative={true}
        className="-mx-16 my-20 w-screen bg-gradient-to-r from-cyan-100 to-blue-100"
      />
    </>
  )
}
