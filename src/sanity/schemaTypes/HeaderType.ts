import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const HeaderType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
  ],
});
