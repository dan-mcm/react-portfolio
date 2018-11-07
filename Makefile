SHELL := /bin/bash

APPLICATION_ID = react-portfolio

# keep in sync with package.json
VERSION = 0.1.0

# replace with your own docker id
DOCKER_ID_USER = daniel40392

# using public docker registry: https://hub.docker.com/
DOCKER_REPO = $(DOCKER_ID_USER)/$(APPLICATION_ID)

.PHONY: build push deploy
	
# building docker image
build:
		docker build -t $(DOCKER_REPO):$(VERSION) .

# pushing image to public registry
push:
		docker push $(DOCKER_REPO):$(VERSION)

deploy: build push
