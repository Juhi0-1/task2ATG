import React from 'react'
import { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import { Fullpage } from '@ap.cx/react-fullpage'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'

const FullScrollPage = () => {
  return (
    <Fullpage>
        <FullPageSections>
            <FullpageSection style={{heigth :'100vh'}}>
                <First />
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
                <Second />
               
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
                <Third />      
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
                <Fourth />     
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
                <Fifth />
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
                <Sixth />
            </FullpageSection>
            <FullpageSection style={{heigth :'100vh'}}>
               <Seventh/>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullScrollPage