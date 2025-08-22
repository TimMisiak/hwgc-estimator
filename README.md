# Python Univer Sheets Demo

This repository contains a minimal Flask web application that displays a [Univer Sheets](https://univer.ai) spreadsheet component.

## Run with Docker

```bash
docker compose up --build
```

Then open <http://localhost:8000> to view the sheet.

## Development

Install the JavaScript dependencies so the import map in `templates/index.html` can resolve modules:

```bash
npm install
python app.py
```
