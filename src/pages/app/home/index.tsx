import { Helmet } from 'react-helmet-async'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
          <h1 className="text-2xl font-bold text-zinc-700">Main article</h1>

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

      <div className="mt-24 flex h-64 flex-col items-center justify-center gap-3">
        <h2 className="text-xl font-bold text-zinc-700">Conhecendo as IAs</h2>

        <Carousel
          opts={{
            align: 'center',
          }}
          className="flex w-full max-w-3xl items-center justify-center"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-sm"
                  src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-sm"
                  src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-sm"
                  src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-sm"
                  src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
