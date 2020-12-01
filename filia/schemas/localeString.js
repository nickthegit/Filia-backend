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
  title: 'Localized string',
  name: 'localeString',
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
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
