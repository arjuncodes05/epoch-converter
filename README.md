# Unix Epoch Converter

A simple web app to convert Unix timestamps to human-readable date formats and vice versa.

## Features

- **Live Timestamp Display**: Shows the current Unix timestamp (in seconds).
- **Timestamp to Date**: Enter a Unix timestamp in seconds or milliseconds to get the equivalent date and time.
- **Date to Timestamp**: Enter a specific date and time to convert it into a Unix timestamp.
- **Relative Time**: See how long ago the entered timestamp was relative to the current time.
- **Copy Timestamp**: Easily copy the current Unix timestamp to your clipboard.

## How to Use

1. **Convert Timestamp to Date**:
   - Enter a Unix timestamp (in seconds or milliseconds) in the input field.
   - Click the `Convert →` button.
   - The output will display:
     - Format (Milliseconds or Seconds)
     - GMT time
     - Local time
     - Relative time (e.g., "5 minutes ago")

2. **Convert Date to Timestamp**:
   - Enter a specific date and time in the respective fields (Year, Month, Day, Hour, Minute, Second).
   - Click the `Convert →` button.
   - The output will display:
     - Unix Timestamp
     - GMT time
     - Local time
     - Relative time (e.g., "5 minutes ago")

3. **Copy Timestamp**:
   - Click the `Copy` button to copy the current Unix timestamp to your clipboard.

## Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling the interface.
- **JavaScript**: For implementing functionality and interactivity.
