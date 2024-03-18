import { Button } from "@/components/button";

export default function Home() {
  
  return (
    <main className="px-4 mx-auto flex flex-col items-center justify-center">
      <section className="relative max-w-4xl min-h-screen flex flex-col gap-6 py-24">
        <h2 className="text-8xl fadein font-light">Hello...</h2>
        <p className="text-3xl fadein font-medium">I&apos;m Gary, a Typescript developer who loves building amazing experiences on web.</p>
        <Button className='mt-12 max-w-md fadein text-2xl py-4'>Get in touch</Button>
      </section>

      <section id='blog' className='max-w-4xl w-full py-12'>
        <h2 className="text-6xl">Blog</h2>
        <p className='text-xl py-6'><span role='presentation'>🔨</span>Work in progress</p>
      </section>

      <section id='about' className='max-w-4xl w-full py-12'>
        <h2 className="text-6xl">About me</h2>
        <p className='text-xl py-6'><span role='presentation'>🔨</span>Work in progress</p>
      </section>

      <section id='contact' className='max-w-4xl w-full py-12'>
        <h2 className="text-6xl">Get In Touch</h2>
        <p className='text-xl py-6'><span role='presentation'>🔨</span>Work in progress</p>
      </section>
    </main>
  );
}
