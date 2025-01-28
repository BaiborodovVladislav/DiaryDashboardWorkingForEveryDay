import { ContainerScrollAnimation } from "@/components/ui/ContainerScrollAnimation";
import Navbar from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import InfiniteMovingCards from "@/components/ui/infinite-moving-cards";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampComponent } from "@/components/ui/lamp";
import Card from '@/components/global/Card'
import { cardsData } from '@/lib/data'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 custom-gradient"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScrollAnimation
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size="lg"
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1f1f1f] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="">
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        price={card.price}
        description={card.description}
        features={card.features}
        buttons={card.buttons}
      />
    ))}
  </div>
      </section>
    </main>
  );
}


