export default {
  name: 'privacyPolicy',
  title: 'privacyPolicy',
  type: 'document',
  fields: [
    { name: 'header', type: 'localeString', title: 'Header' },
    { name: 'content', type: 'localeBlockContent', title: 'Content' },
  ]
}
