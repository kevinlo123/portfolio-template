import HomePageHero from './components/HomePageHero.js'
import TextAnimation from './components/TextAnimation.js'
import Projects from './Projects.js'
 

export default function Home() {
  return (
    <main>
      <HomePageHero />
      <TextAnimation />
      <Projects />
    </main>
  );
}