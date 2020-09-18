import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "s14d2u8n", // find this at manage.sanity.io
  dataset: "production", // this is from when we answered those question from 'sanity init'
  useCdn: true,
});
