import { HeroSection } from '@/app/components/pages/home/hero-section'
import { KnownTechs } from './components/pages/home/known-techs'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { WorkExperience } from './components/pages/home/workExperience'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { HomePageData } from './types/page-info'
import { NoExperience } from './components/pages/home/workExperience/noExperience'

const getPageData = async ():Promise<HomePageData> =>{
    const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `


    return fetchHygraphQuery(query, 60 * 60 * 24);
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();
  //<WorkExperience experiences={workExperiences}/>
  return (
    <>
      <HeroSection homeInfo = {pageData}/>

      <KnownTechs techs = {pageData.knownTechs}/>

      <HighlightedProjects projects={pageData.highlightProjects} />

      <NoExperience/>
      
    </>
  )
}
