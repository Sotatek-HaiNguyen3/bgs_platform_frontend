dev:
	docker-compose exec frontend sh -c "npm install && npm run start"
kill:
	docker-compose kill