import { useEffect, useRef } from "react";
import GithubLink from "./GithubLink";
import LinkedinLink from "./LinkedinLink";
import GmailLink from "./GmailLink";
import InstagramLink from "./InstagramLink";
import DiscordLink from "./DiscordLink";
export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.7
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

return (
    <div ref={contactRef} className="contact-section flex flex-col justify-start items-center transition duration-1000 my-[20vh] opacity-0">
        <div className="contact flex flex-row w-full px-20 items-stretch">
            <div className="contact-left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center">
                <h1 className="font-inter select-none font-semibold text-6xl">Contact</h1>
            </div>
            <div className="contact-right w-[50%] flex flex-col p-4 transition duration-700">
                <p className="font-dmsans text-lg">
                    If you would like to get in touch, please feel free to reach out and connect with me via any of the following platforms.
                </p>
                <div className="contact-icons grid grid-cols-5 justify-between items-start mt-4">
                  <div className="github-link min-h-[80px]">
                    <GithubLink />
                  </div>
                  <div className="linkedin-link min-h-[80px]">
                    <LinkedinLink />
                  </div>
                  <div className="gmail-link min-h-[80px]">
                    <GmailLink />
                  </div>  
                  <div className="instagram-link min-h-[80px]">
                    <InstagramLink />
                  </div>
                  <div className="discord-link min-h-[80px]">
                    <DiscordLink />
                  </div>
                </div>
            </div>
        </div>
    </div>
);
}