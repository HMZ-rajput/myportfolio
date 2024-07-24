import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiAndroid, DiVisualstudio } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa'
import './styles.scss'

const personalDetails = [
    {
        label: "Name",
        value: "Hamza Zafar",
    },
    {
        label: "Age",
        value: "23",
    },
    {
        label: "Address",
        value: "Karachi, Pakistan",
    },
    {
        label: "Email",
        value: "hamza15nov2000@gmail.com",
    },
    {
        label: "Contact No",
        value: "+92 3116993967",
    },
]

const jobSummary = 'I am a dedicated .NET developer with over three years of hands-on experience in various .NET technologies, including ASP.NET MVC, WinForms, and .NET MAUI. Currently, I am in my final year of pursuing a Bachelors degree in Software Engineering at Bahria University Karachi campus.\nThroughout my academic journey and professional endeavors, I have developed a strong foundation in software development, complemented by my expertise in building robust and scalable applications. My freelancing experience has allowed me to work on diverse projects, honing my skills and enabling me to deliver high-quality solutions tailored to client needs.\nI am passionate about continuous learning and staying updated with the latest industry trends, which drives me to explore new technologies and methodologies. My goal is to leverage my skills and knowledge to contribute to innovative projects and make a significant impact in the tech industry.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}>
                        <h3>.Net Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}>
                        <h3 className="personalInformationHeaderText">Personal Info</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}>
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiVisualstudio size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>
        </section >


    );
};

export default About;