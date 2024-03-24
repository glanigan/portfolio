import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center px-4">
      <section className="relative flex min-h-screen max-w-4xl flex-col gap-6 py-24">
        <h2 className="text-6xl font-light">Hello...</h2>
        <p className="text-3xl font-medium">
          I&apos;m Gary, a Typescript developer who loves building amazing
          experiences on web.
        </p>
        <div className="flex gap-3">
          <Button>Get in touch</Button>
        </div>
      </section>

      <section id="blog" className="w-full max-w-4xl py-12">
        <h2 className="text-6xl">Blog</h2>
        <p className="py-6 text-xl">
          <span role="presentation">🔨</span>Work in progress
        </p>
      </section>

      <section id="about" className="w-full max-w-4xl py-12">
        <h2 className="text-6xl">About me</h2>
        <p className="py-6 text-xl">
          <span role="presentation">🔨</span>Work in progress
        </p>
      </section>

      <section id="contact" className="w-full max-w-4xl py-12">
        <h2 className="text-6xl">Get In Touch</h2>
        <p className="py-6 text-xl">
          <span role="presentation">🔨</span>Work in progress
        </p>
      </section>
    </main>
  );
}
