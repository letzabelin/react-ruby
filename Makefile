init:
	yarn install --check-files
	bundle exec rails db:migrate

start:
	rails s

lint:
	bundle exec rubocop

lint-fix-all:
	bundle exec rubocop --all-correct-all

.PHONY: test
