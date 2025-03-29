# Sporta AI Backend

## Getting Started

Follow these instructions to set up and run the backend server for the Sporta AI project.

### Prerequisites

- Python 3.x
- Virtual environment tool (e.g., `venv`)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/sportaai.git
    cd sportaai/backend
    ```

2. **Set up a virtual environment:**

    - **On Windows:**

        ```sh
        python -m venv venv
        venv\Scripts\activate
        ```

    - **On macOS/Linux:**

        ```sh
        python3 -m venv venv
        source venv/bin/activate
        ```

3. **Install the required packages:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Apply database migrations:**

    ```sh
    python manage.py migrate
    ```

5. **Run the development server:**

    ```sh
    python manage.py runserver
    ```

6. **Access the API documentation:**

    Open your web browser and navigate to `http://127.0.0.1:8000/api/docs` to view the Swagger documentation for the API.

## Additional Information

- None for now