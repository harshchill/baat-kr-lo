import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const topics = [
  {
    text: "Python",
    desc: "A discussion forum for the Python programming language.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    link: "forum/python-forum",
    slug:"python-room"
  },
  {
    text: "JavaScript",
    desc: "Discuss everything about client-side and server-side JavaScript.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    link: "forum/javascript-forum",
    slug:"js-room"
  },
  {
    text: "React",
    desc: "Join the conversation on building user interfaces with React.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    link: "forum/react-forum",
    slug:"react-room"
  },
  {
    text: "Java",
    desc: "Your go-to community for Java development and enterprise solutions.",
    img: "/java.png",
    link: "forum/java-forum",
    slug:"java-room"
  },
  {
    text: "C++",
    desc: "Deep dive into C++ for performance-critical applications.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    link: "forum/cpp-forum",
    slug:"c-room"
  },
  {
    text: "Node.js",
    desc: "A forum for building scalable network applications with Node.js.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    link: "forum/nodejs-forum",
    slug:"node-room"
  },
];

const page = () => {
  return (
    <div className="bg-black pt-4 min-h-screen text-white text-center">
      <h2 className="font-semibold text-4xl text-slate-200 ">Forums</h2>
      <div className="container flex gap-8 flex-wrap justify-center items-center bg-emerald-950/40 ring-emerald-800 ring-1 w-3/4 rounded-lg mx-auto mt-4 p-8">
        {topics.map((topic) => {
          return (
            <div
              className="h-70 w-72 flex flex-col items-center justify-center gap-2 rounded-md bg-emerald-900/90 p-3"
              key={topic.img}
            >
              <Image width={40} height={40} alt={topic.text} src={topic.img} />
              <h2 className="text-2xl font-semibold">{topic.text}</h2>
              <p className="text-md text-slate-200/90 ">{topic.desc}</p>
              <Link href={"forum/"+topic.slug}>
              <Button className="mt-4 bg-emerald-950 text-white">Discuss</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
