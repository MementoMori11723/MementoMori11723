package server

import (
	"MementoMori11723/server/middleware"
	"embed"
	"fmt"
	"html/template"
	"log/slog"
	"net/http"
	"os"
)

var (
	//go:embed pages/*
	files embed.FS

	pages = "pages/"

	indexTmpl  *template.Template
	errorTmpl  *template.Template
	thanksTmpl *template.Template

	routes = map[string]http.HandlerFunc{
		"/":           home,
		"/thanks":     thanks,
		"/robots.txt": robot,
		"/404":        errorPage,
	}
)

func init() {
	indexTmpl = getTemplate("index")
	errorTmpl = getTemplate("404")
	thanksTmpl = getTemplate("thanks")
}

func getTemplate(name string) *template.Template {
	tmpl, err := template.ParseFS(
		files, fmt.Sprintf("%s%s.html", pages, name),
	)
	if err != nil {
		slog.Error(err.Error())
		os.Exit(1)
	}
	return tmpl
}

func Mux() *http.ServeMux {
	mux := http.NewServeMux()
	mux.Handle("/assets/",
		middleware.Logger(
			http.StripPrefix("/assets/",
				http.FileServer(http.Dir("server/assets")),
			),
		),
	)
	for route, handler := range routes {
		mux.Handle(route, middleware.Logger(
			handler,
		))
	}
	return mux
}

func home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Redirect(w, r, "/404", http.StatusFound)
		return
	}
	if err := indexTmpl.Execute(w, nil); err != nil {
		http.Redirect(w, r, "/404", http.StatusFound)
	}
}

func thanks(w http.ResponseWriter, r *http.Request) {
	if err := thanksTmpl.Execute(w, nil); err != nil {
		http.Redirect(w, r, "/404", http.StatusFound)
	}
}

func robot(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/assets/robot.txt", http.StatusFound)
}

func errorPage(w http.ResponseWriter, r *http.Request) {
	if err := errorTmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
