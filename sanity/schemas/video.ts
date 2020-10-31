export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Video Name",
      type: "string",
    },
    {
      name: "videoURL",
      title: "Video URL",
      type: "url",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
