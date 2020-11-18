import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content';
function About (props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Van Nguyen. I obtained a Bs in Computer Science from Boise State University 
                    with a minor in Electrical Engineering.</p>
                <p>I am currently spinning up side projects to turn what I learn from school into visible products. My 
                    latest project is a Covid19 Tracker built using React framework. </p>
                <p>I primarily worked on implementing an 3D 
                    interactive globe that shows the COVID-19 cases worldwide and an interactive US map that shows the COVID-19 cases nationwide.
                    I hooked the search functionality of each of the map with the serverless function I made which help reduce retrieval time by caching temporal data in Redis Cache. 
                    Other than that, I wrote e2e tests for the applications using Jest&Puppeteer and set up CI/CD pipeline under Github Actions.
                    You can check it out <a href="https://github.com/Duahau1/CovidTracker_Cs481">here</a>, or on the homepage.
                </p>
                <p> I am constantly learning about new things, currently those include ReactJS, Microsoft Azure services, NodeJS, and Jest.</p>
                <p>When I am not learning something, chances are I am writing a blog post to share my newly learnt knowledge.
                You can find those <a href="https://phantomgalaxyblog.wordpress.com/">here.</a>
                </p>
            </Content>

        </div>
    )
}
export default About;