import S from '@sanity/desk-tool/structure-builder'

const langs = [
  {
    name: 'English',
    id: 'en'
  },
  {
    name: 'Spanish',
    id: 'es'
  },
  {
    name: 'Italian',
    id: 'it'
  },
  {
    name: 'German',
    id: 'de'
  },
  {
    name: 'French',
    id: 'fr'
  },
  {
    name: 'Dutch',
    id: 'nl'
  },
  {
    name: 'Portuguese',
    id: 'pt'
  }
]

let langDocs = langs.map((lang) => {
  return S.listItem()
    .title(lang.name)
    .child(
      S.editor()
        .title(`Landing Page - ${lang.name}`)
        .schemaType('landingPage')
        .documentId(lang.id)
    )
})

let langPP = langs.map((lang) => {
  return S.listItem()
    .title(lang.name)
    .child(
      S.editor()
        .title(`Privacy Policy - ${lang.name}`)
        .schemaType('privacyPolicy')
        .documentId(`${lang.id}pp`)
    )
})

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Filia Landing Page')
        .child(
          S.list()
            .title('Languages')
            .items([...langDocs])
        ),
      S.listItem()
        .title('Privacy Policy')
        .child(
          S.list()
            .title('Languages')
            .items([...langPP])
        ),
      // S.documentTypeListItems()
    ])