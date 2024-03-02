import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">[Insert Name]</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on wordpress since last 3 years and delivered
          15+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "data:image/jpeg;base64,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"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
