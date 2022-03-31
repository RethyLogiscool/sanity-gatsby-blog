export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6245d60d77efbf009442366b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pv2ga44i",
                  apiId: "87c8ed29-cdef-4fa8-aad5-7eff60cb6253",
                },
                {
                  buildHookId: "6245d60d2bfe7110269accbe",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fomivzgf",
                  apiId: "006093d4-8835-49f0-b612-77076db514ff",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/RethyLogiscool/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fomivzgf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
