# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#index'

  get 'episodes', to: 'pages#episodes'
end
