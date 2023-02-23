const services = [
  {
    title: "Graphic Design",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    img: "graphic-design",
  },
  {
    title: "Photography",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    img: "photography",
  },
];

export default function Services() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {services.map((service) => (
        <ServiceItem key={service.title} {...service} />
      ))}
    </section>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
  img: string;
}

function ServiceItem({ title, description, img }: ServiceItemProps) {
  return (
    <article
      className={`md:w-1/2 w:full md:h-screen min-h-full bg-no-repeat bg-center bg-cover 
      bg-mobile-${img} md:bg-desktop-${img} flex flex-1 flex-col items-center pt-52 gap-20 justify-end p-20`}
    >
      <h2 className="text-gray-500 font-fraunces font-extrabold text-2xl">
        {title}
      </h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </article>
  );
}
