<!DOCTYPE html>
<html>
<head>
    <title>Docker Microservices Project</title>
</head>
<body>

<h1>Docker Microservices Architecture</h1>

<p>
This project demonstrates a production-style microservices architecture using Docker and Docker Compose.
It includes an API service, a background worker service, a MongoDB database, and an Nginx reverse proxy.
</p>

<h2>Architecture Overview</h2>

<p>The system consists of the following services:</p>

<ul>
    <li><strong>API Service</strong> – Node.js REST API</li>
    <li><strong>Worker Service</strong> – Background job processor</li>
    <li><strong>MongoDB</strong> – Database with persistent storage</li>
    <li><strong>Nginx</strong> – Reverse proxy routing traffic to API</li>
</ul>

<h2>Project Structure</h2>

<pre><code>
docker-microservices/
├── api/
├── worker/
├── nginx/
└── docker-compose.yml
</code></pre>

<h2>Prerequisites</h2>

<ul>
    <li>Docker installed</li>
    <li>Docker Compose installed</li>
</ul>

<p>Verify installation:</p>

<pre><code>docker --version
docker compose version</code></pre>

<h2>How to Run the Project</h2>

<p>From the root directory:</p>

<pre><code>docker compose up --build</code></pre>

<p>This will:</p>
<ul>
    <li>Build API and Worker images</li>
    <li>Pull MongoDB image</li>
    <li>Build Nginx image</li>
    <li>Create internal Docker network</li>
    <li>Start all containers</li>
</ul>

<h2>Access the Application</h2>

<p>Open your browser:</p>

<pre><code>http://localhost:9090</code></pre>

<p>(Adjust port if you changed it in docker-compose.yml)</p>

<h2>Available API Endpoints</h2>

<h3>Health Check</h3>
<pre><code>GET /</code></pre>

<h3>Create Job</h3>
<pre><code>POST /jobs</code></pre>

<h3>List Jobs</h3>
<pre><code>GET /jobs</code></pre>

<h2>Stop the Application</h2>

<pre><code>docker compose down</code></pre>

<h2>Remove Containers and Volumes</h2>

<pre><code>docker compose down -v</code></pre>

<h2>View Logs</h2>

<p>View logs for all services:</p>

<pre><code>docker compose logs</code></pre>

<p>View logs for worker only:</p>

<pre><code>docker compose logs worker</code></pre>

<h2>Key Concepts Demonstrated</h2>

<ul>
    <li>Multi-container orchestration with Docker Compose</li>
    <li>Service-to-service communication using internal DNS</li>
    <li>Reverse proxy configuration with Nginx</li>
    <li>Database persistence using named volumes</li>
    <li>Separation of concerns using microservices architecture</li>
</ul>

<h2>Production Considerations</h2>

<ul>
    <li>Add environment-based configuration</li>
    <li>Implement health checks</li>
    <li>Use image tagging strategy</li>
    <li>Secure services with non-root containers</li>
    <li>Deploy behind a cloud load balancer</li>
</ul>

<h2>Author</h2>

<p>
This project is part of a structured Docker learning roadmap progressing from beginner to advanced DevOps-level implementations.
</p>

</body>
</html>
