.PHONY: list
list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs


install:
	@echo install npm dependencies
	npm install
	@echo done

default: build

build: build-dist

build-dist: 
	@echo build for production 
	npm run build
	@echo done

clean:
	@echo remove build folders
	rm -rf dist dev .cache
	@echo done

clean-all: clean
	rm -rf node_modules
 

local-start:
	npm run dev
