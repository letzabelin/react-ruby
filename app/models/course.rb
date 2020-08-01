# frozen_string_literal: true

class Course < ApplicationRecord
  has_many :sections
  has_many :episodes, through: :sections
end
