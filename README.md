# Asynchronous JavaScript & RESTful APIs: Weather Dashboard

A production-ready, real-time Weather Dashboard that fetches live, hyper-local meteorological metrics from a public REST API using advanced asynchronous programming patterns.

## 🛠️ Core Engineering Features

*   **Async/Await Architecture:** Orchestrates data flow cleanly using modern `async/await` syntax instead of brittle callback chains or promise nesting.
*   **Multi-Stage API Pipeline:** Implements a two-phase fetching strategy—first converting user city strings into latitude/longitude coordinates via a Geocoding API, then querying the core Weather REST API.
*   **Comprehensive Exception Handling:** Features robust `try...catch` blocks to gracefully catch and handle network failures, empty search results, and HTTP status errors.
*   **Dynamic UI Compiling:** Parses heavily nested JSON response objects to inject real-time values (Temperature, Humidity, Wind Speed, Weather Conditions) dynamically into the DOM.

## 📂 Project Structure

```text
├── index.html       # Structural layout with custom data attribute tags
├── style.css        # Dashboard interface layouts with adaptive UI states
├── script.js        # Asynchronous API orchestration and error handling
└── README.md        # Technical architecture documentation
