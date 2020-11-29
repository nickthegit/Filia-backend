export default {
  name: 'landingPage',
  title: 'landingPage',
  type: 'document',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'object',
      fields: [
        { name: 'headerBtnText', type: 'string', title: 'Header Sign Up Text' },
        { name: 'headerContactText', type: 'string', title: 'Header Contact Text' },
      ]
    },
    {
      title: 'Section 1 - Hero',
      name: 'section1',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'productOffer', type: 'blockContentBasic', title: 'Product Offer' },
        { name: 'btnText', type: 'string', title: 'Hero Sign Up Text' },
      ]
    },
    {
      title: 'Section 2 - Intro',
      name: 'section2',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'copy', type: 'blockContentBasic', title: 'Copy' },
        { name: 'btnText', type: 'string', title: 'Intro Sign Up Text' },
      ]
    },
    {
      title: 'Section 3 - Highlights',
      name: 'section3',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        {
          name: 'highlights', type: 'array', title: 'Highlights', options: { layout: 'grid' }, of: [
            {
              name: 'highlight', type: 'object', title: 'Highlight', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'copy', type: 'blockContentBasic', title: 'Copy' }
              ]
            }
          ],
          validation: Rule => Rule.min(3).max(3)
        }
      ]
    },
    {
      title: 'Section 4 - Benefits',
      name: 'section4',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        {
          name: 'benefits', type: 'array', title: 'Benefits', of: [
            {
              name: 'benefit', type: 'object', title: 'Benefit', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'copy', type: 'blockContentBasic', title: 'Copy' }
              ]
            }
          ],
          validation: Rule => Rule.min(1).max(6)
        },
        { name: 'btnText', type: 'string', title: 'Sign Up Text' },
      ]
    },
    {
      title: 'Section 5 - Jumbotron',
      name: 'section5',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'copy', type: 'blockContentBasic', title: 'Copy' },
        { name: 'btnText', type: 'string', title: 'Sign Up Text' },
      ]
    },
    {
      title: 'Section 6 - Story',
      name: 'section6',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'copy', type: 'blockContentBasic', title: 'Copy' }
      ]
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'checkboxCopy', type: 'blockContentBasic', title: 'Checkbox Copy' },
        { name: 'copy', type: 'blockContentBasic', title: 'Copy' }
      ]
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'copy', type: 'blockContentBasic', title: 'Copy' },
        { name: 'instagram', type: 'string', title: 'Instagram Link' },
        { name: 'twitter', type: 'string', title: 'Twitter Link' },
      ]
    },
  ],
}
