interface AboutItemProps {
  title: string;
  description: string;
  img: string;
}

const items = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    img: "transform",
  },
  {
    title: "Stand out to the right audience",
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    img: "stand-out",
  },
];

export default function About() {
  return (
    <section className="w-full flex flex-col md:[&>*:nth-child(odd)]:flex-row-reverse">
      {items.map((item) => (
        <AboutItem key={item.title} {...item} />
      ))}
    </section>
  );
}

function AboutItem({ title, description, img }: AboutItemProps) {
  return (
    <article className="flex flex-col md:flex-row">
      <img
        className="w-full md:w-1/2 h-auto"
        srcSet={`/src/assets/desktop/image-${img}.jpg 720w,
        /src/assets/mobile/image-${img}.jpg 750w`}
        sizes="(max-width: 900px) 100vw, 100vw"
      />
      <div className="flex flex-col justify-center p-20 gap-5">
        <h2 className="font-fraunces font-extrabold text-2xl">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="font-fraunces text-sm tracking-wide">LEARN MORE</p>
      </div>
    </article>
  );
}
