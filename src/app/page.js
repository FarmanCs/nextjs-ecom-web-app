import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Advisable costs are the expenses that a business or individual should reasonably incur to achieve certain goals or maintain efficient operations. These costs are not legally required but are considered beneficial or productivity and reduces errors over time.
          </p>
          <p>Advisable costs are the expenses that a business or individual should reasonably incur to achieve certain goals or maintain efficient operations. These costs are not legally required but are considered beneficial or advisable cost, as it boosts productivity and reduces errors over time.
          </p>
          <p>Advisable costs are the expenses that a business or individual should reasonably incur to achieve certain goals or maintain efficient operations. These  boosts productivity and reduces errors over time.
          </p>
        </div>

      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={`don'\t hesitate`} mainHeader={'Contect us'} />
        <div className=" mt-8">
          <a href="tel: +92 349 9279 661" className="text-4xl underline text-gray-500">+92 349 9279 661</a>
        </div>
      </section>

    </>
  );
}
