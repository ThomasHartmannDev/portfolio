import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData, ProjectsPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
    params:{
        slug:string;
    }
}

const getProjectDatails = async (slug: string): Promise<ProjectPageData> => {
    const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `
    return fetchHygraphQuery(
        query,
        60*60*24
    )
}

export default async function Project({params: {slug}}:ProjectProps){
    const { project } = await getProjectDatails(slug)

    return(
        <>
            <ProjectDetails project={project}/>
            <ProjectSections sections={project.sections}/>
        </>
    )
}