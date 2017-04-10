.DEFAULT_GOAL := all

bin := ./node_modules/.bin

.PHONY: all
all:

.PHONY: test
test:
	$(bin)/eslint .
	$(bin)/webpack --config ./webpack.config.js
