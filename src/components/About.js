import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import leafImage from "../palm-leaf.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;
  console.log(author.bio);

  return (
    <div className="relative">
      <img src={leafImage} alt="" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <div className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Author is Kap"
          />
          <div className="text-lg flex flex-col justify-center">
            <h2 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>!
            </h2>
            <p className="text-green-200 text-lg">{author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
