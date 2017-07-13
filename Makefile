.DEFAULT_GOAL := all

node_modules := ./node_modules
bin          := $(node_modules)/.bin

.PHONY: all
all:

.PHONY: dependencies
dependencies:
	npm install
	jq -r                                                        \
		'.peerDependencies|to_entries[]|"\(.key)@\(.value)"' \
		package.json                                         \
		| xargs -I{} npm install '{}'

.PHONY: test
test: dependencies
	$(bin)/eslint .
	$(bin)/webpack --config ./webpack.config.js
	$(bin)/ava ./build/bundle.js
