export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f52217519280da125980175',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7bjna4sz',
                  apiId: 'de99f263-02d9-47f3-861a-98723d748eb8'
                },
                {
                  buildHookId: '5f52217500ba8a91382cd575',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pcpcpqzv',
                  apiId: 'dd6ebba3-8a2e-4b74-8a5e-8de49ccba44d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shariqx5/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pcpcpqzv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
