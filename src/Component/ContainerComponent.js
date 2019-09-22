import React, {Component} from 'react';
import './ContainerComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import PurposeComponent from "./PurposeComponent/PurposeComponent";
import EducationComponent from "./EducationComponent/EducationComponent";
import ExperienceComponent from "./ExperienceComponent/ExperienceComponent";
import ActivesComponent from "./ActivesComponent/ActivesComponent";
import CertificateComponent from "./CertificateComponent/CertificateComponent";
import SkillsComponent from "./SkillsComponent/SkillsComponent";
import InterestComponent from "./InterestComponent/InterestComponent";
import ProjectComponent from "./ProjectComponent/ProjectComponent";


const wrapperBackground = {
    backgroundColor: "#f6f6f6"
};

class ContainerComponent extends Component {

    render() {
        return (
            <div className="container">
                <div className="row"
                     style={wrapperBackground}>
                    <div className="d-flex flex-column w-100 p-5 align-items-center">

                        <div className="wrapper__component">
                            {/*Header Component*/}
                            <HeaderComponent/>
                            {/*Purpose Component*/}
                            <PurposeComponent/>
                            {/*Education Component*/}
                            <EducationComponent/>
                            {/*Experience Component*/}
                            <ExperienceComponent/>
                            {/*Actives Component*/}
                            <ActivesComponent/>
                            {/*Certificate Component*/}
                            <CertificateComponent/>
                            {/*Skills Component*/}
                            <SkillsComponent/>
                            {/*Interest Component*/}
                            <InterestComponent/>
                            {/*Projects Component*/}
                            <ProjectComponent/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerComponent;
