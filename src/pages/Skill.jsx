import React, { useEffect, useRef } from 'react';

const Skill = () => {
    const skillRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 화면에 50% 이상 노출될 때 변경
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, []);

    return (
        <section id="skill_box" className="p-28 bg-white">
            <div className="skill-container mx-auto max-w-4xl" ref={skillRef}>
                <h2 className="text-5xl font-bold pb-10 mt-10 text-center">Skills</h2>
                <ul className="justify-center flex gap-44 mb-36">
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/html.png" alt="html 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/css.png" alt="css 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/react.png" alt="react 아이콘"/></li>
                </ul>
                <ul className="justify-center flex gap-44 mb-36">
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/js.png" alt="javascript 아이콘" /></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/ts.png" alt="typescript 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/git.png" alt="github 아이콘" /></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img className="bg-purple-700 rounded-md" src="/src/assets/img/daisyui.png" alt="daisyui 아이콘" /></li>
                </ul>
                <ul className="justify-center flex gap-44 mb-16">
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/recoil.png" alt="recoil 아이콘"/></li>
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/tailwindcss.png" alt="tailwindcss 아이콘" /></li>
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/src/assets/img/reactquery.png" alt="reactquery 아이콘" /></li>
                </ul>
            </div>
        </section>
    );
};

export default Skill;