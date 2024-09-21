import {OlistIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const skillType = defineType({
	name: 'skill',
	title: 'Skill',
  type: 'document',
  icon: OlistIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Skill',
			type: 'string',
		}),
		defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
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
      name: 'description',
      type: 'text',
      title: 'Descrizione',
      description: 'Massimo 100 caratteri',
      options: {
        maxLength: 100,
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Il link al sito ufficiale',
    }),
		defineField({
			name: "list",
			title: "Lista",
			type: 'string',
			options: {
				list: [
					{ title: 'Frameworks', value: 'Frameworks'},
					{ title: 'Languages', value: 'Languages'},
					{ title: 'Tools', value: 'Tools'},
				]
			}
		})
	],
	preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})