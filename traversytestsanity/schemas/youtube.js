import React from "react";
import getYouTubeID from "get-youtube-id";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing YouTube URL</div>;
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
      title: "title",
    },
    component: YouTubePreview,
  },
};
