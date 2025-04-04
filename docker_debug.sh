# !/bin/bash

docker build -t jekyll-site .

echo "Serving on http://localhost:4000"

docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site