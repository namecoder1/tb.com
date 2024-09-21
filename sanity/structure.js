// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('info').title('Personal Info'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'skill', 'project', 'info'].includes(item.getId()),
      ),
    ])
