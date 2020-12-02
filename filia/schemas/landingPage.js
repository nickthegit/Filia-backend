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
        { name: 'headerBtnText', type: 'localeString', title: 'Header Sign Up Text' },
        { name: 'headerContactText', type: 'localeString', title: 'Header Contact Text' },
      ]
    },
    {
      title: 'Section 1 - Hero',
      name: 'section1',
      type: 'object',
      fields: [
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'productOffer', type: 'localeBlockContent', title: 'Product Offer' },
        { name: 'btnText', type: 'localeString', title: 'Hero Sign Up Text' },
      ]
    },
    {
      title: 'Section 2 - Intro',
      name: 'section2',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'copy', type: 'localeBlockContent', title: 'Copy' },
        { name: 'btnText', type: 'localeString', title: 'Intro Sign Up Text' },
      ]
    },
    {
      title: 'Section 3 - Highlights',
      name: 'section3',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        {
          name: 'highlights', type: 'array', title: 'Highlights', of: [
            {
              name: 'highlight', type: 'object', title: 'Highlight', fields: [
                { name: 'title', type: 'localeString', title: 'Title' },
                { name: 'copy', type: 'localeBlockContent', title: 'Copy' }
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
                { name: 'title', type: 'localeString', title: 'Title' },
                { name: 'copy', type: 'localeBlockContent', title: 'Copy' }
              ]
            }
          ],
          validation: Rule => Rule.min(1).max(6)
        },
        { name: 'btnText', type: 'localeString', title: 'Sign Up Text' },
      ]
    },
    {
      title: 'Section 5 - Jumbotron',
      name: 'section5',
      type: 'object',
      fields: [
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'copy', type: 'localeBlockContent', title: 'Copy' },
        { name: 'btnText', type: 'localeString', title: 'Sign Up Text' },
      ]
    },
    {
      title: 'Section 6 - Story',
      name: 'section6',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'copy', type: 'localeBlockContent', title: 'Copy' }
      ]
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'object',
      fields: [
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'checkboxCopy', type: 'localeBlockContent', title: 'Checkbox Copy' },
        { name: 'copy', type: 'localeBlockContent', title: 'Copy' },
        { name: 'inputName', type: 'localeString', title: 'Input Name' },
        { name: 'inputEmail', type: 'localeString', title: 'Input Email' },
        { name: 'subscribeBtn', type: 'localeString', title: 'Subscribe button text' },
      ]
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'object',
      fields: [
        { name: 'headline', type: 'localeString', title: 'Headline' },
        { name: 'copy', type: 'localeBlockContent', title: 'Copy' },
        { name: 'instagram', type: 'string', title: 'Instagram Link' },
        { name: 'twitter', type: 'string', title: 'Twitter Link' },
        { name: 'facebook', type: 'string', title: 'Facebook Link' },
      ]
    },
  ],
}
