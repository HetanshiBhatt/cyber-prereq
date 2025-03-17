# Web Service Architecture & Implementation

## 1. Web Service Architecture & Server Roles

### **What is a Web Service?**
A web service is an application that provides functionality over the internet using standardized communication protocols (HTTP, SOAP, REST, etc.).

### **Components of Web Service Architecture**
- **Client:** Sends a request to the web service.
- **Web Service:** Processes the request and returns a response.
- **Server:** Hosts the web service and manages requests.

### **Role of Servers**
- **Hosting Web Services:** The server runs the web service code, making it accessible via the internet.
- **Processing Requests:** It handles incoming HTTP requests and executes logic to generate responses.
- **Storage & Security:** The server often interacts with databases and ensures secure communication.

---

## 2. RESTful vs. SOAP-based Web Services

| Feature         | RESTful Web Services       | SOAP-based Web Services    |
|---------------|--------------------------|---------------------------|
| **Protocol**  | Uses HTTP (stateless)    | Uses XML-based protocol   |
| **Data Format** | JSON, XML, HTML, Plain Text | Strictly XML |
| **Performance** | Faster due to lightweight data | Slower due to XML processing |
| **Flexibility** | Highly flexible         | Rigid due to strict standards |
| **Security**   | Uses HTTPS, OAuth       | Built-in WS-Security |
| **Ease of Use** | Easier to implement and consume | More complex due to specifications |
| **Use Case**   | Ideal for web & mobile apps | Preferred for enterprise applications |

### **Key Takeaways**
- RESTful services are lightweight, easy to use, and ideal for modern applications.
- SOAP services provide advanced security features but are more complex and heavy.

---

## 3. Implementing & Deploying a Simple HTTP Web Service

### **Using Node.js (Express)**

#### **Installation:**
```bash
npm install express
```

#### **Create `server.js`**
```javascript
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
```

#### **Run the Node.js Server:**
```bash
node server.js
```

#### **Test API:**
Visit: `http://localhost:5000/api/hello`

---

## **Deployment Steps**
You can deploy your API using **Render, Railway, or AWS EC2**.


## **How to Push Code to GitHub**

#### **Initialize Git in Your Project**
```bash
git init
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
```

#### **Add and Commit Files**
```bash
git add .
git commit -m "Initial commit - Added Flask/Node.js web service"
```

#### **Push Code to GitHub**
```bash
git branch -M main
git push -u origin main
```

---

## **Project Summary**
- Explained **Web Service Architecture** & **Server Roles**.
- Compared **RESTful vs. SOAP-based Web Services**.
- Implemented a **Simple HTTP API using Flask & Node.js**.
- Deployed the service using **Render**.

This README provides setup, implementation, and deployment details for your web service. 🚀
