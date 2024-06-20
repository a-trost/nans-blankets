"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Icon({ theme }) {
  let shirtColor = theme === "blankets" ? "#fd79a8" : "#34495e";

  const legalGreetings = [
    "Why, it's so kind of you to visit. If only my son was more like you.",
    "Help yourself to the bowl of Wherthers.",
    "My favorite blankets are the ones with the cats.",
    "You should come by and meet my darling cats sometime.",
    "Did I mention I have eleven grandchildren?",
  ];

  const illegalGreetings = [
    "You sure you're not a cop?",
    "I've been pushing tapes for 40 years. I've seen it all.",
    "Do you have a tape of the 1996 Super Bowl? I'll take it off your hands.",
    "You'll keep this a secret if you know what's good for ya.",
    "I only take cash or Bitcoin.",
    "I don't reveal my suppliers so don't even ask.",
    "I recorded most of these myself, so don't whine about the quality.",
    "Don't give me that 'just browsing' crap. Either buy or beat it, kid.",
    "Netflix keeps trying to shut me down, but they can kick rocks.",
  ];

  let [greeting, setGreeting] = useState(legalGreetings[0]);

  const container = useRef();

  useEffect(() => {
    setGreeting(gsap.utils.random(legalGreetings));
    gsap.to(".greeting", { opacity: 1 });
  }, []);

  useEffect(() => {
    if (theme === "movies") {
      setGreeting(gsap.utils.random(illegalGreetings));
      gsap.to("#mouth-frown", {
        scaleY: 1,
      });
      gsap.to("#eyebrow-left", {
        transformOrigin: "center center",
        rotate: 20,
      });
      gsap.to("#eyebrow-right", {
        transformOrigin: "center center",
        rotate: -20,
      });
    }
  }, [theme]);

  useGSAP(
    () => {
      gsap.set("#mouth-frown", {
        scaleY: -1,
        transformOrigin: "center center",
      });

      gsap.fromTo(
        ".svg",
        {
          y: 400,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1)",
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="-mb-24 overflow-hidden relative">
      <div className="text-xl mb-2 p-2 border rounded-md greeting opacity-0">
        {greeting}
      </div>
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        clipRule="evenodd"
        viewBox="0 0 116 152"
        width="500"
        opacity="0"
      >
        <g transform="matrix(.2901 0 0 .38968 -361.8 -50)">
          <g id="nan">
            <g id="head" transform="matrix(3.44707 0 0 2.56619 -3362 -281.7)">
              <path
                fill="#e7c38c"
                fillRule="nonzero"
                d="M290.3 93.8c-.4 2.4-2 4.5-4.6 6.2a19.6 19.6 0 01-11.3 3.2c-4.4 0-8.1-1-11.3-3.2-2.6-1.7-4-3.8-4.5-6.2a44.4 44.4 0 0131.7 0"
                transform="translate(1119.3 139.5)"
              ></path>
              <ellipse
                cx="3498.3"
                cy="58.8"
                fill="#d6d6d6"
                rx="12.9"
                ry="10"
                transform="rotate(17.6 2425.086 -8585.442) scale(1.17358)"
              ></ellipse>
              <path
                fill="#f5d29d"
                fillRule="nonzero"
                d="M249.8 53.4v-1l-.3-4.3v-.4c.1-5.5 2.5-10.3 7.1-14.3a26 26 0 0117.3-6c6.7 0 12.5 2 17.2 6 4.7 4 7 8.8 7.1 14.3v.4l-.2 4.4-.1 1.2c-.6 5.3-2 10-4.1 14.3l-2.7 4.7c-4.7 7-10.5 10.5-17.2 10.5-6.7 0-12.5-3.5-17.3-10.5a43.3 43.3 0 01-6.8-19.3"
                transform="translate(1121.3 151.2)"
              ></path>
              <path
                fill="#e7c38c"
                fillRule="nonzero"
                d="M249.8 53.4c.6 5.3 2 10.2 4.1 14.6l-1.7.1c-2 0-3.8-.8-5.3-2.3a7 7 0 01-2.2-5v-.4a7.4 7.4 0 015.2-7m48 .3l2.1 1.5a7.4 7.4 0 012.3 5.4 7 7 0 01-2.3 5.2 7 7 0 01-5.3 2.3h-.9c2.1-4.3 3.5-9.1 4.1-14.4"
                transform="translate(1121.3 151.2)"
              ></path>
              <path
                fill="#e5e5e5"
                fillRule="nonzero"
                d="M879.7 422.5a26.4 26.4 0 012.6 16.1 60 60 0 01-3.3 10.9l-2.5-1.5c1.2-4.8.8-9.3-1.2-13.6-8.4 2.4-17.1-1.2-26.1-10.5-2.8.5-5.3 1.2-7.8 2.2a8.8 8.8 0 00-5.9 7.8l-.9 8.9-2.8 1.8-1.5-6c-.8-5.6 0-11 2.6-16.1 4-8 11.8-12.2 23.4-12.5 11.6.3 19.4 4.5 23.4 12.5"
                transform="translate(539 -239)"
              ></path>
              <g id="mouth-frown" transform="translate(-2093.5 108.6)">
                <g id="mouth-parts" style={{ scaleY: -1 }}>
                  <path
                    id="mouth-frown1"
                    fill="none"
                    stroke="#4d4743"
                    strokeWidth="1.3"
                    d="M3483.3 111.8c1.2-1 7.7-1.5 9.6.6"
                  ></path>
                </g>
              </g>
              <path
                id="eye-right"
                fill="#4d4743"
                fillRule="nonzero"
                d="M399.8 73.5c0 .7-.3 1.3-.8 1.8s-1 .8-1.8.8a2.5 2.5 0 01-2.4-2.5c0-.8.2-1.3.6-1.8.6-.5 1.2-.8 1.9-.8a2.5 2.5 0 012.4 2.5"
                transform="translate(1010 132.2)"
              ></path>
              <path
                id="eye-left"
                fill="#4d4743"
                fillRule="nonzero"
                d="M374.3 74.3c-.6.5-1.1.8-1.8.8a2.5 2.5 0 01-2.5-2.5c0-.8.2-1.3.7-1.8a2.5 2.5 0 113.6 3.5"
                transform="translate(1011 133.2)"
              ></path>
              <path
                id="nose"
                fill="#e7c38c"
                fillRule="nonzero"
                d="M381.8 75.5v-.1c0-.4.3-.7 1-1l2.5-.4 2.4.4c.8.3 1.1.6 1.1 1 0 1-.4 1.8-1 2.5-.8.7-1.6 1.1-2.5 1.1-1 0-1.8-.4-2.5-1.1-.6-.7-1-1.5-1-2.5"
                transform="translate(1010 133.2)"
              ></path>
              <path
                id="eyebrow-left"
                fill="#d4cbb9"
                fillRule="nonzero"
                d="M365.8 65.3c4.1-1.6 8.5-2.6 12.2-2.8 1.8 0-.1 5.5-.6 4.9-3.3-.6-7-.5-10.2.5-.8.4-1.4-2.6-.6-2.9"
                transform="translate(1011 133.2)"
              ></path>
              <path
                id="eyebrow-right"
                fill="#d4cbb9"
                fillRule="nonzero"
                d="M402.1 68.3c-4-1.4-7.8-1.5-10.8-.9-.7.6-1.6-4.9-.5-4.9 3.4.2 7.8 1.1 11.5 3 .4-.2.3 3.1-.8 2.8"
                transform="translate(1011 133.2)"
              ></path>
              <g id="cheek-blush" fill="#ff667d" opacity="0.2">
                <circle
                  cx="3476.6"
                  cy="106.6"
                  r="3.9"
                  transform="matrix(1.20846 0 0 .92983 -2818.5 115)"
                ></circle>
                <circle
                  cx="3476.6"
                  cy="106.6"
                  r="3.9"
                  transform="matrix(1.20846 0 0 .92983 -2792.3 115)"
                ></circle>
              </g>
            </g>
            <g id="upper-body">
              <path
                fill="#f5d29d"
                fillRule="nonzero"
                d="M329.6 47.1c-1.6 2.8-4 4.6-7.2 5.4l-2.8.5c-1.3-.3-2.6-1-3.8-2.1-2-2-3.3-4.4-4.2-7.5-.8-3.1-.8-6-.1-8.5a7 7 0 012.3-3.6V31a11.1 11.1 0 0111.6 0c2.7 1.7 4.5 4 5.3 7.1.8 3.2.5 6.1-1.1 9"
                transform="matrix(3.44707 0 0 2.56619 503 382.2)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M649 218.8l-1.4-1.7a30 30 0 0010-17.6l3.5 4.4a36.7 36.7 0 01-12 15"
                transform="scale(3.44707 2.56619) rotate(25.2 637.5 -238)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M649 218.8c5.9-4.5 10-9.4 12.1-14.9l3.9 5.9c-2 5.9-6.5 10.1-13.4 12.7l-2.6-3.7"
                transform="scale(3.44707 2.56619) rotate(25.2 637.5 -238)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M647.6 217.2a44.1 44.1 0 00-31.9-14.5c-7.9-8.8-9.7-18-5.4-27.3l2.6.4a74 74 0 0144.8 23.7 30 30 0 01-10 17.7"
                transform="scale(3.44707 2.56619) rotate(25.2 637.5 -238)"
              ></path>
              <path
                fill="#f5d29d"
                fillRule="nonzero"
                d="M329.6 47.1c-1.6 2.8-4 4.6-7.2 5.4l-2.8.5c-1.3-.3-2.6-1-3.8-2.1-2-2-3.3-4.4-4.2-7.5-.8-3.1-.8-6-.1-8.5a7 7 0 012.3-3.6V31a11.1 11.1 0 0111.6 0c2.7 1.7 4.5 4 5.3 7.1.8 3.2.5 6.1-1.1 9"
                transform="matrix(-3.44707 0 0 2.56619 2388.8 382.2)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M649 218.8l-1.4-1.7a30 30 0 0010-17.6l3.5 4.4a36.7 36.7 0 01-12 15"
                transform="scale(-3.44707 2.56619) rotate(25.2 218.9 -2114.3)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M649 218.8c5.9-4.5 10-9.4 12.1-14.9l3.9 5.9c-2 5.9-6.5 10.1-13.4 12.7l-2.6-3.7"
                transform="scale(-3.44707 2.56619) rotate(25.2 218.9 -2114.3)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M647.6 217.2a44.1 44.1 0 00-31.9-14.5c-7.9-8.8-9.7-18-5.4-27.3l2.6.4a74 74 0 0144.8 23.7 30 30 0 01-10 17.7"
                transform="scale(-3.44707 2.56619) rotate(25.2 218.9 -2114.3)"
              ></path>
              <path
                fill={shirtColor}
                fillRule="nonzero"
                d="M578 245.3l2.5.5c6.5 7.2 8.5 16.3 6.1 27.2-2 8.8-2.2 18.3-.6 28.4-7.8 1.3-15.5 1.9-23.3 1.9h-1c-7.8 0-15.5-.6-23.3-1.9a76.8 76.8 0 00-.6-28.4c-2.4-10.9-.4-20 6-27.2l2.6-.5c.4 2.4 1.9 4.5 4.5 6.2 3.1 2.1 6.9 3.2 11.3 3.2s8.2-1 11.3-3.2c2.6-1.7 4.1-3.8 4.5-6.2"
                transform="matrix(3.44707 0 0 2.56619 -495.6 -312.4)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Icon;
