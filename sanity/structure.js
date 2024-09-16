// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('skill').title('Skills'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'skill'].includes(item.getId()),
      ),
    ])
