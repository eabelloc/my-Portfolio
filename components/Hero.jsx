import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" alt="hero" src="/images/Elias-Bello-Pick.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Hello, I am Elias Bello 👋🏼!
            <br className="hidden lg:inline-block" />Junior Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a restless person and in continuous learning, I am looking for an opportunity to continue growing as a developer. I assure you that I have enthusiasm and commitment in my day to day life 💪🏼. A composer turned developer. I love both 🎶 and 👨🏻‍💻
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              <Link href="/bootcamp">
                <a>Bootcamp</a>
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;