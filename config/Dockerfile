FROM golang:1.24.1-alpine
WORKDIR /app
ENV GOOS=linux \
    GOARCH=amd64
COPY . .
RUN go mod download
CMD ["go", "run", "."]
