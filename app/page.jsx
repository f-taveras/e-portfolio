import { Button } from '../components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '../components/Social';


const Home = () => {
  return <section className='h-full'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt8 xl:pb-24'>

        <div className='text-center xl:text-left'>
          <span className='text-xl'>Software Developer</span>
          <h1 className='h1 mb-6'>
            Greetings! from <span className='text-accent'>Felix Taveras</span>
          </h1>
          <p className='max-w-[500px] mb-9 text-white/80'>I'm a problem solver with skills in various programming languages and technologies. I love tackling challenges and finding innovative solutions.</p>

          {/* btn and social media */}
          <div className='flex flex-col xl:flex-row items-center gap-8'>

            <Button
              variant="outline"
              size="lg"
              className='uppercase flex items-center gap-2'
            >
              <span>Download CV</span>
              <FiDownload className='text-xl' />
            </Button>
            <div className='mb-8 xl:mb-0'>
              <Social />
              </div>
          </div>

        </div>
        <div>photo</div>

      </div>
    </div>
  </section>
}


export default Home;