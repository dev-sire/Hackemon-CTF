# Hackemon CTF Repository

This repository contains the essential components for deploying and testing the Hackemon Capture The Flag (CTF) event. It includes:

- k6 load testing scripts for performance evaluation.
- A Docker Compose file for easy deployment of the CTFd platform.
- A custom theme for the CTFd web interface.

### Our Approach

The Hackemon CTF was designed with a focus on providing a challenging and engaging experience for participants while ensuring the platform's stability and performance. Our approach involved:

- **Custom Theme:** A unique and visually appealing theme was developed to enhance the user experience and create a distinctive atmosphere for the Hackemon CTF. This theme is included in this repository.
- **Dockerized Deployment:** Docker Compose was used to containerize the CTFd platform and its dependencies, simplifying deployment and ensuring consistency across different environments. This approach allows for easy setup and scalability.
- **Load Testing with k6:** We employed k6, a modern load testing tool, to simulate user traffic and evaluate the performance of the CTFd platform under realistic conditions. This was crucial for identifying potential bottlenecks and ensuring the platform could handle the expected number of participants.

### k6 Load Testing
The k6 Testing/ directory contains scripts for performing load tests on the CTFd platform. These scripts simulate various user actions, such as:

- ```register-users.js``` Simulates users registering for the CTF.
- ```login-users.js``` Simulates users logging in to the CTFd platform.
- ```challenge-access.js``` Simulates users accessing challenges.

- **Other scripts:** Additional scripts may be included to simulate other user activities, such as flag submissions, scoreboard access, etc.

**Running the k6 Tests**

1. Ensure you have k6 installed: [Check out the Docs](https://k6.io/docs/getting-started/installation/)
2. Navigate to the k6 Testing/ directory. 
3. Run the desired script using the k6 CLI:k6 run <script-name>.js
4. Analyze the results in the terminal output or using a k6 output integration (e.g., k6 Cloud, InfluxDB+Grafana) for more detailed reporting.

**Test Configuration**

The scripts contain options to configure the number of virtual users (VUs), duration, and other test parameters.  These should be adjusted to simulate the expected load on the CTFd platform.

**Important Notes on Load Testing**

- The load testing scripts are designed to simulate realistic user behavior.
- It is crucial to perform load testing in a staging environment that mirrors the production environment as closely as possible.
- Monitor server resources (CPU, memory, disk I/O) during load tests to identify potential bottlenecks.
- Adjust CTFd and server configurations as needed to optimize performance.

### Docker Compose Deployment

The ```docker-compose.yml``` file defines the services required to run the CTFd platform, including the web application, database, and any other dependencies. Docker Compose simplifies the process of setting up and running these services.

**Prerequisites**

- Docker: [Get from here](https://docs.docker.com/get-docker/)
- Docker Compose: [Visit Docs](https://docs.docker.com/compose/install/)

**Deployment Steps**

1. Clone this repository.
2. Navigate to the repository root directory.
3. Run Docker Compose to start the services: ```docker-compose up -d```

This command will download the necessary images, create containers, and start the CTFd platform in detached mode.

4. Access the CTFd web interface in your browser (usually at ```http://localhost:8000```).

**Configuration**

The ```docker-compose.yml``` file may contain environment variables that allow you to customize the CTFd deployment, such as database settings, port mappings, and other options.  Refer to the CTFd documentation for a list of available configuration options.

### Custom Theme

The ACM-SIGSAC's Theme/ directory contains the files for the custom CTFd theme. This theme provides a unique look and feel for the CTF event.

**Installing the Theme**

Copy the contents of the ACM-SIGSAC's Theme/ directory to the CTFd ACM-SIGSAC's Theme/ directory.  The exact location of this directory depends on your CTFd installation method (e.g., within the Docker container, or in your local file system).

In the CTFd administration panel, select the custom theme.

**Theme Customization**

The theme files can be modified to further customize the appearance of the CTFd platform.  Familiarity with HTML, CSS, and Jinja templating is required for advanced theme customization.

### Contributing

Contributions to this repository are welcome. If you have any improvements to the k6 scripts, Docker Compose configuration, or custom theme, please submit a pull request.

### License

The Project is licensed under ```Creative Commons Attribution Share Alike 4.0 International``` public license