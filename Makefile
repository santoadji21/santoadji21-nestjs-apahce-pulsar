up:
	sudo docker compose up 
	
down:
	docker compose down

img: 
	docker build -t adji21/santoadji21-nestjs-pulsar:latest .