import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        aria-hidden
        src="/zacmoo_photo.png"
        alt="Zach"
        width={250}
        height={250}
        className="mx-auto rounded-full"
      />
      <h1 className="font-mono text-9xl flex items-center justify-center" >Welcome</h1>
      <h2 className="font-mono text-xl flex items-center justify-center">Hello! Explore my work and ongoing projects to learn more about my background, interests, and what I’m currently focused on.</h2>
    </div>
  );
}
