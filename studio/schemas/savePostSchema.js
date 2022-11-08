export const SavePostSchema = {
  name: "savePost",
  title: "Save Post",
  type: "document",
  fields: [
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
    {
      name: "postReference",
      type: "reference",
      to: [{ type: "posts" }],
    },
  ],
};
