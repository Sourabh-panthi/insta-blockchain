import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import { SavePostSchema } from "./savePostSchema";
import { userSchema } from "./userSchema";
import { postsSchema } from "./postSchema";
import { commentsSchema } from "./commentsSchema";
import { conversationsSchema } from "./conversationsSchema";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    userSchema,
    postsSchema,
    commentsSchema,
    SavePostSchema,
    conversationsSchema,
  ]),
});
