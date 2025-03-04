transfer:
	rsync -avPh \
		--exclude node_modules \
		--exclude dist \
		. napat@muhsic.acad.ucsc.edu:~/corpus
	
deploy:
	docker compose up -d --build
