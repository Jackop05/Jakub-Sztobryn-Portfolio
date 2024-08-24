import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const TechnologiesAndProjects = () => {
    return (
        <div className=''>
            <div className=''>Here are my projects...</div>

            <div className=''>
                <div className=''>JavaScript</div>
                <div className=''>JAVA</div>
                <div className=''>C</div>
            </div>

            <VerticalTimelineElement>
                ...
            </VerticalTimelineElement>

        </div>
    )
}

export default TechnologiesAndProjects;