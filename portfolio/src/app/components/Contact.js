import { useEffect, useRef } from "react";

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
                <h1 className="font-inter font-semibold text-6xl">Contact</h1>
            </div>
            <div className="contact-right w-[50%] flex flex-col p-4 transition duration-700">
                <p className="font-dmsans text-lg">
                    If you would like to get in touch with me, please feel free to reach out to me via email or LinkedIn.
                </p>
                <div className="contact-icons flex flex-col justify-start items-start mt-4">
                    Hello
                </div>
            </div>
        </div>
    </div>
);
}