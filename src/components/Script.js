import { useEffect, useState } from "react";

export const usePopupImage = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return { popupImage, openPopup, closePopup };
};

export const useSectionObserver = () => {
  useEffect(() => {
    document.title = "Sahatwatz";

    const sections = [
      { id: "about-section", listIndex: 0 },
      { id: "skills-section", listIndex: 1 },
      { id: "experience-section", listIndex: 2 },
      { id: "projects-section", listIndex: 3 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const listItem = document.querySelector(
            `.list ul li:nth-child(${
              sections.findIndex((section) => section.id === entry.target.id) +
              1
            })`
          );
          if (entry.isIntersecting) {
            listItem.classList.add("move-animation");
          } else {
            listItem.classList.remove("move-animation");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
