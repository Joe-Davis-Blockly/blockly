cp -r ../build .
gcloud app deploy ./prodapp.yaml --no-promote --project="play-academy-api-integration" --version="docusaurus-v1"
