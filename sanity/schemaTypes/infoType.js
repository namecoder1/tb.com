import { defineField, defineType } from "sanity";
import {InfoOutlineIcon} from '@sanity/icons'

export const infoType = defineType({
	name: 'info',
	title: 'Personal Info',
	type: 'document',
  icon: InfoOutlineIcon,
  fields: [
		defineField({
			name: 'jobTitle',
			title: 'Titolo di Lavoro',
      type:'string'
		}),
		defineField({
			name: 'socialLinks',
			type: 'document',
			title: 'Link Social',
      fields: [
				defineField({
					name: 'insta',
					type: 'object',
					title: 'Insta',
					fields: [
						{
							name: 'instaUrl',
							type:'url',
							title: 'Link Instagram'
						},
						{
							name: 'instaName',
							type:'string',
							title: 'Username Instagram'
						},
					]
				}),
				defineField({
					name: 'github',
					type: 'object',
					title: 'Github',
					fields: [
						{
							name: 'githubUrl',
							type:'url',
							title: 'Link Github'
						},
						{
							name: 'githubName',
							type:'string',
							title: 'Username Github'
						},
					]
				}),
				defineField({
					name: 'linkedin',
					type: 'object',
					title: 'LinkedIn',
					fields: [
						{
							name: 'linkedinUrl',
							type:'url',
							title: 'Link LinkedIn'
						},
						{
							name: 'linkedinName',
							type:'string',
							title: 'Username LinkedIn'
						},
					]
				}),
				defineField({
					name: 'x',
					type: 'object',
					title: 'X/Twitter',
					fields: [
						{
							name: 'xUrl',
							type:'url',
							title: 'Link X/Twitter'
						},
						{
							name: 'xName',
							type:'string',
							title: 'Username X/Twitter'
						},
					]
				}),

			]
		}),
		defineField({
			name: 'utilsLink',
			type: 'document',
			title: 'Link Vari',
      fields: [
				{
					name: 'paypalUrl',
					type:'url',
          title: 'Link Paypal'
				},
			],
		})
	]
})