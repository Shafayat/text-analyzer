## Text Analyzer Project Setup

This project provides a text analyzer tool with the following features:

*   Text file upload
*   Word counting
*   Character counting
*   Sentence counting
*   Paragraph counting
*   Identification of the longest words in each paragraph

### Prerequisites

*   **Node.js:** Please ensure you have a recent version of Node.js installed. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/)
*   **Text Editor or IDE:**  Any code editor (like Visual Studio Code, Atom, or Sublime Text) will suffice.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/text-analyzer.git
    ```
2.  **Navigate into the Project Directory**
    ```bash
    cd text-analyzer
    ```

3.  **Install Dependencies**
    ```bash
    npm install 
    ```
    This will install the following dependencies required by the project:
    *   `express`:  Web framework for Node.js
    *   `multer`: Middleware for handling file uploads
    *   `body-parser`: Node.js body parsing middleware.
    *   `jest`: Dev dependency, for unit testing
    *   `supertest`: Dev dependency, provides a high-level abstraction for testing HTTP

### Project Structure

The project has the following basic file structure:

```
text-analyzer/
  textAnalyzer.js
  index.js
  __tests__/
    api.test.js
    textAnalyzer.test.js
  uploads/       
  public/       
    index.html
    style.css
  sample.txt     
  package.json    
  README.md 
```

### Running the Application

1.  **Install packages**
    ```bash
    npm install  
    ```
2.  **Start the Development Server**
    ```bash
    npm start  
    ```
    This will typically start the server on port 3000.

3. **Open in Browser**
    Open `http://localhost:3000` in your web browser to access the Text Analyzer application.
4. **Run Tests**
    ```bash
    npm test  
    ```