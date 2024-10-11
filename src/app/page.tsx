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
      <h2 className="welcomeText">Zachary Mooney | Software Developer | Web Programmer</h2>
      <h1>Welcome</h1>
      <h2 className="welcomeText">Hello! Explore my work and ongoing projects to learn more about my background, interests, and what I’m currently focused on.</h2>
    </div>
  );
}
