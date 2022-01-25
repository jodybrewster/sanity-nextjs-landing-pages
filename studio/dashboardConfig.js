export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f05bda02f1cd008404f3b7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n2f5j4co',
                  apiId: '8833aef4-aac4-49b1-a53c-03ab9cfe866d'
                },
                {
                  buildHookId: '61f05bda70be0b008a490b13',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4iembjbr',
                  apiId: '56562a80-7ed8-47db-83e8-2be49ab54183'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jodybrewster/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4iembjbr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
