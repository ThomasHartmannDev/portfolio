import { HeroSection } from '@/app/components/pages/home/hero-section'
import { KnownTechs } from './components/pages/home/known-techs'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { WorkExperience } from './components/pages/home/workExperience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
