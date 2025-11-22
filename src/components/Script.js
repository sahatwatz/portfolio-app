import { useEffect, useState } from 'react';

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
    document.title = 'Sahatwatz';

    const sections = [
      { id: 'about-section', listIndex: 0 },
      { id: 'skills-section', listIndex: 1 },
      { id: 'experience-section', listIndex: 2 },
      { id: 'projects-section', listIndex: 3 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.findIndex(
            (section) => section.id === entry.target.id
          );
          if (index === -1) return; // Section not found

          const listItem = document.querySelector(
            `.list ul li:nth-child(${index + 1})`
          );
          if (!listItem) return; // listItem not found

          if (entry.isIntersecting) {
            listItem.classList.add('move-animation');
          } else {
            listItem.classList.remove('move-animation');
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
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const useCopyText = () => {
  const [popup, setMessage] = useState(null);

  useEffect(() => {
    const handleCopyText = (event) => {
      const text = event.target.innerText;

      // สร้าง TextArea ชั่วคราวเพื่อคัดลอกข้อความ
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');

      // ลบ TextArea ชั่วคราว
      document.body.removeChild(textArea);

      // แสดงข้อความว่า "คัดลอกแล้ว"
      setMessage({ text: 'Email Copied!' });
      setTimeout(() => {
        setMessage(null);
      }, 2000); // ซ่อนข้อความหลังจาก 2 วินาที
    };

    const copyTextElement = document.getElementById('copyText');
    if (copyTextElement) {
      copyTextElement.addEventListener('click', handleCopyText);
    }

    return () => {
      if (copyTextElement) {
        copyTextElement.removeEventListener('click', handleCopyText);
      }
    };
  }, []);

  return { popup };
};
