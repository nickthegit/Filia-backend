import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Filia')
        .child(
          S.list()
            .title('Filia Landing Page')
            .items([
              S.listItem()
                .title('Landing Page')
                .child(
                  S.editor()
                    .title(`Landing Page`)
                    .schemaType('landingPage')
                    .documentId('landingPage')
                ),
              S.listItem()
                .title('Privacy Policy')
                .child(
                  S.editor()
                    .title(`Privacy Policy`)
                    .schemaType('privacyPolicy')
                    .documentId('privacyPolicy')
                )
            ])
        )
      // S.documentTypeListItems()
    ])