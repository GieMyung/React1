import React from 'react'
import Icon1 from '../../images/png-1.png'
import Icon2 from '../../images/png-1.png'
import Icon3 from '../../images/png-1.png'
import {
    ProjectContainer, ProjectWrap, ProjectCard, ProjectIcon, ProjectH1, ProjectH2,
    ProjectP
} from './ProjectsE'


const Projects = () => {
  return (
    <ProjectContainer id='projects'>
        <ProjectH1>
            My Projects
        </ProjectH1>
        <ProjectWrap>
            <ProjectCard>
                <ProjectIcon src={Icon1}/>
                <ProjectH2>Blah Blah</ProjectH2>
                <ProjectP>Sentence</ProjectP>
            </ProjectCard>
            <ProjectCard>
                <ProjectIcon src={Icon2}/>
                <ProjectH2>Blah Blah</ProjectH2>
                <ProjectP>Sentence</ProjectP>
            </ProjectCard>
            <ProjectCard>
                <ProjectIcon src={Icon3}/>
                <ProjectH2>GitHub</ProjectH2>
                <ProjectP>Sentence</ProjectP>
            </ProjectCard>
        </ProjectWrap>
    </ProjectContainer>
  )
}

export default Projects