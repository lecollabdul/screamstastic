
.PHONY: build-image

build-image:
	${INFO} "Creating docker image..."
	 docker build -t node-firebase .

run-image: 
	${INFO} "Running docker image..."
	docker run -it --network="host" --user 1000:1000 -p 9005:9005 -v ${PWD}:/code node-firebase bash

## dont worry about below this line
# Cosmetics
YELLOW := "\e[1;33m"
NC := "\e[0m"

# Shell Functions
INFO := @bash -c '\
	printf $(YELLOW); \
	echo "=> $$1"; \
	printf $(NC)' VALUE
