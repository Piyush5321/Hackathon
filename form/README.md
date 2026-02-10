# Trip Itinerary Generator

This is a simple static page that generates a customised itinerary from `final_database.csv`.

Prerequisites

- Place `final_database.csv` in the same folder as `index.html` (it already exists in the workspace).
- Serve the folder over a local static server (browsers block `fetch` for local files over `file://`).

Quick start (Python 3):

```bash
# from the folder containing index.html and final_database.csv
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Usage

- Open the page, choose Destination (`Goa` or `Delhi`), Budget (`Low`/`Mid`/`High`), Season (`Summer`/`Winter`), Trip Type (options change by destination), and Start/End dates.
- Click **Generate Itinerary** to build a day-by-day plan filtered from `final_database.csv`.

Notes

- The generator expects the CSV format: `destination,budget,season,travel_type,day,time_slot,activity`.
- Dates are inclusive; total days = (end - start) + 1.
