export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "language",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      type: "string",
      title: "Project type",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
          { value: "school", title: "School" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    // {
    //   name: "collaborators",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "person" }] }],
    // },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
