package main

import (
	"MementoMori11723/config"
	"MementoMori11723/server"
	"fmt"
	"log/slog"
	"net/http"
	"os"
)

func main() {
	_mux := server.Mux()
	_port := config.Defaults()
	_server := http.Server{
		Addr:    _port,
		Handler: _mux,
	}
	slog.Info(
		"Starting Server", "url",
		fmt.Sprintf(
			"https://localhost%s",
			_server.Addr,
		),
	)
	if err := _server.ListenAndServe(); err != nil {
		slog.Error(err.Error())
		os.Exit(1)
	}
}
