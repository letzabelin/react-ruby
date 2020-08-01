# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: 'Hello, World!', description: 'Create React App with Ruby on Rails')

section = Section.create(title: 'Chapter 1', course: course)

episode = Episode.create(
  [
    { title: '1. Setting up a new Ruby on Rails App with React', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
    { title: '2. Adding React to an Existing Rails App', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
    { title: '3. Building a Hello World App', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section },
    { title: '4. Adding React Router DOM to your App', description: 'Lorem ipsum', url: 'https://www.youtube.com/embed/5F_JUvPq410', section: section }
  ]
)
