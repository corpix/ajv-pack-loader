.DEFAULT_GOAL := all

node_modules := ./node_modules
bin          := $(node_modules)/.bin

.PHONY: all
all:

$(node_modules): package.json
	yarn install --production=false

.PHONY: peer_dependencies
peer_dependencies:
	jq -r                                                        \
		'.peerDependencies|to_entries[]|"\(.key)@\(.value)"' \
		package.json                                         \
		| xargs -I{} npm install '{}'

.PHONY: test
test: $(node_modules) peer_dependencies
	$(bin)/eslint .
	$(bin)/webpack --config ./webpack.config.js
	$(bin)/ava ./build/bundle.js
