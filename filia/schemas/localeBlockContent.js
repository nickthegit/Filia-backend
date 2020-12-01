const langs = [
  {
    name: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 English',
    id: 'en',
    isDefault: true
  },
  {
    name: '🇪🇸 Spanish',
    id: 'es'
  },
  {
    name: '🇮🇹 Italian',
    id: 'it'
  },
  {
    name: '🇩🇪 German',
    id: 'de'
  },
  {
    name: '🇫🇷 French',
    id: 'fr'
  },
  {
    name: '🇳🇱 Dutch',
    id: 'nl'
  },
  {
    name: '🇵🇹 Portuguese',
    id: 'pt'
  }
]

export default {
  title: 'Localized block',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: langs.map(lang => ({
    title: lang.name,
    name: lang.id,
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        // Styles let you set what your user can mark up blocks with. These
        // correspond with HTML tags, but you can set any title or value
        // you want and decide how you want to deal with it where you want to
        // use your content.
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
        ],
        lists: [],
        // Marks let you mark up inline text in the block editor.
        marks: {
          // Decorators usually describe a single property – e.g. a typographic
          // preference or highlighting by editors.
          decorators: [],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            // {
            //   title: 'URL',
            //   name: 'link',
            //   type: 'object',
            //   fields: [
            //     {
            //       title: 'URL',
            //       name: 'href',
            //       type: 'url'
            //     }
            //   ]
            // }
          ]
        }
      },
      // You can add additional types here. Note that you can't use
      // primitive types such as 'string' and 'number' in the same array
      // as a block type.
      // {
      //   type: 'image',
      //   options: { hotspot: true }
      // }
    ],
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
