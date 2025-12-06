predeploy:
	cd ui && npm run build
deploy:
	cd ui && gh-pages -d build
start:
	cd ui && react-scripts start
build:
	cd ui && react-scripts build
test:
	cd ui && react-scripts test
eject:
	cd ui && react-scripts eject

add-uv:
	uv init
	rm main.py
	