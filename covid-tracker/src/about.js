import React from 'react'
import Header from './header'
import "./about.css"

export default function About() {
 const style = {
     backgroundColor : "white"
 }
 const head={
     justifyContent:"center",
     color:"white",
     backgroundColor:"red"
 }

    return (
        <div className="about" style={style}>
            <h1 style={head}> About Us </h1>
            <Header />
            <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br/>
Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.<br/>
The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.<br/> 
The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
            </p><br/>
            <p>
            COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.<br/>
Most common symptoms:<br/>
            <ul>
            <li>fever</li> 
            <li>dry cough</li>
            <li>tiredness</li>
            </ul>
            </p>
            <p>
            Less common symptoms:<br/>
            <ul>
            <li>aches and pains</li> 
            <li>sore throat.</li>
            <li>diarrhoea.</li>
            <li>conjunctivitis.</li>
            <li>headache.</li>
            <li>loss of taste or smell.</li>
            <li>a rash on skin, or discolouration of fingers or toes.</li>
            </ul>
            </p>
            <p>Less common symptoms:</p>
            <ul>
            <li>aches and pains.</li>
            <li>sore throat.</li>
            <li>diarrhoea.</li>
            <li>conjunctivitis.</li>
            <li>headache.</li>
            <li>loss of taste or smell.</li>
            <li>a rash on skin, or discolouration of fingers or toes.</li>
            </ul>
            <p>Seek immediate medical attention if you have serious symptoms.&nbsp; Always call before visiting your doctor or health facility.&nbsp;</p>
            <p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.&nbsp;</p>
            <p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.&nbsp;</p>
        </div>
    )
}
