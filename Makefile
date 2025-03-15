run :
	@docker-compose -f config/compose.yml -p deploy up --build -d 
	@sleep 3
	@docker exec ollama-ai bash -c "ollama pull smollm:135m"
stop :
	@docker-compose -f config/compose.yml -p deploy down  --remove-orphans
