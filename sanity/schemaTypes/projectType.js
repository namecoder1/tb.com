import { ProjectsIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
	name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type:'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'type',
      title: 'Tipo di Progetto',
      type: 'string',
    }),
		defineField({
			name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Il link alla pagina del progetto',
    }),
    defineField({
      name: 'githubUrl',
      title: 'URL GitHub',
      type: 'url',
      description: 'Il link al repository GitHub del progetto',
    }),
    defineField({
      name: 'wakaLinks',
      type: 'document',
      fields: [
        {
          name: 'wakaUrl',
          title: 'URL WakaTime',
          type:'string',
        },
        {
          name: 'wakaImage',
          title: 'URL Wakatime Image',
          type:'string',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di Pubblicazione',
      type: 'date',
      description: 'La data in cui il progetto è stato pubblicato',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Testo',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Testo Alternativo',
          validation: rule => rule.custom((value, context) => {
            const parent = context?.parent;
            return !value && parent?.asset?._ref ? 'Alt text is required' : true
          }),
        }
      ]
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologie Utilizzate',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrizione SEO',
      type: 'text',
      description: 'La descrizione SEO del progetto',
    })
	]
})