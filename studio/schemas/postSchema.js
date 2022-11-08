export const postsSchema = {
  name: "posts",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Post Image",
    },
    {
      name: "likes",
      title: "Likes",
      type: "string",
    },
    {
      name: "postId",
      title: "postId",
      type: "string",
    },
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
