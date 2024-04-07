.PHONY: build migrate run

build:
	truffle compile

migrate:
	truffle migrate --reset

run:
	truffle exec index.js
