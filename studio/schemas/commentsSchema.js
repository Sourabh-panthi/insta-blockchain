export const commentsSchema = {
  name: "comments",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      title: "time Stamp",
      name: "timeStamp",
      type: "datetime",
    },
    {
      name: "postsReference",
      type: "reference",
      to: [{ type: "posts" }],
    },
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
