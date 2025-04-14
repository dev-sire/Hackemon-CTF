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

### Project Structure

```
📦 Hackemon-CTF
├─ ACM-SIGSAC's Theme
│  ├─ .gitignore
│  ├─ LICENSE
│  ├─ README.md
│  ├─ assets
│  │  ├─ img
│  │  │  └─ favicon.ico
│  │  ├─ js
│  │  │  ├─ challenges.js
│  │  │  ├─ index.js
│  │  │  ├─ notifications.js
│  │  │  ├─ page.js
│  │  │  ├─ scoreboard.js
│  │  │  ├─ settings.js
│  │  │  ├─ setup.js
│  │  │  ├─ teams
│  │  │  │  ├─ list.js
│  │  │  │  ├─ private.js
│  │  │  │  └─ public.js
│  │  │  ├─ theme
│  │  │  │  ├─ highlight.js
│  │  │  │  ├─ styles.js
│  │  │  │  └─ times.js
│  │  │  ├─ users
│  │  │  │  ├─ list.js
│  │  │  │  ├─ private.js
│  │  │  │  └─ public.js
│  │  │  └─ utils
│  │  │     ├─ alerts.js
│  │  │     ├─ clipboard.js
│  │  │     ├─ collapse.js
│  │  │     ├─ graphs
│  │  │     │  ├─ echarts
│  │  │     │  │  ├─ categories.js
│  │  │     │  │  ├─ index.js
│  │  │     │  │  ├─ scoreboard.js
│  │  │     │  │  ├─ solve-percentage.js
│  │  │     │  │  └─ userscore.js
│  │  │     │  └─ vega
│  │  │     │     ├─ categories.js
│  │  │     │     ├─ scoreboard.js
│  │  │     │     ├─ solve-percentage.js
│  │  │     │     └─ userscore.js
│  │  │     ├─ math.js
│  │  │     ├─ notifications
│  │  │     │  ├─ alerts.js
│  │  │     │  ├─ read.js
│  │  │     │  └─ toasts.js
│  │  │     └─ tooltips.js
│  │  └─ scss
│  │     ├─ includes
│  │     │  ├─ components
│  │     │  │  ├─ _challenge.scss
│  │     │  │  ├─ _graphs.scss
│  │     │  │  ├─ _jumbotron.scss
│  │     │  │  ├─ _sticky-footer.scss
│  │     │  │  └─ _table.scss
│  │     │  ├─ icons
│  │     │  │  ├─ _award-icons.scss
│  │     │  │  └─ _flag-icons.scss
│  │     │  └─ utils
│  │     │     ├─ _cursors.scss
│  │     │     ├─ _fonts.scss
│  │     │     ├─ _lolight.scss
│  │     │     ├─ _min-height.scss
│  │     │     └─ _opacity.scss
│  │     └─ main.scss
│  ├─ static
│  │  ├─ assets
│  │  │  ├─ challenges.59a62d9f.js
│  │  │  ├─ clipboard.04c4c9d3.js
│  │  │  ├─ echarts.128204f2.js
│  │  │  ├─ index.05c280d8.js
│  │  │  ├─ index.d2021d82.js
│  │  │  ├─ main.6a74379b.css
│  │  │  ├─ notifications.9b1c6d24.js
│  │  │  ├─ page.165af37e.js
│  │  │  ├─ pokemon.jpg
│  │  │  ├─ scoreboard.fba34e42.js
│  │  │  ├─ settings.aeb777c8.js
│  │  │  ├─ setup.218f08f5.js
│  │  │  ├─ teams_list.23253241.js
│  │  │  ├─ teams_private.2ef80aad.js
│  │  │  ├─ teams_public.c816256a.js
│  │  │  ├─ users_list.cd68d321.js
│  │  │  ├─ users_private.c72cefbb.js
│  │  │  ├─ users_public.dc413da5.js
│  │  │  └─ userscore.99d7bffd.js
│  │  ├─ img
│  │  │  ├─ acm-hero.jpg
│  │  │  └─ favicon.ico
│  │  ├─ manifest.json
│  │  └─ webfonts
│  │     ├─ fa-brands-400.ttf
│  │     ├─ fa-brands-400.woff2
│  │     ├─ fa-regular-400.ttf
│  │     ├─ fa-regular-400.woff2
│  │     ├─ fa-solid-900.ttf
│  │     ├─ fa-solid-900.woff2
│  │     ├─ fa-v4compatibility.ttf
│  │     ├─ fa-v4compatibility.woff2
│  │     ├─ lato-all-400-normal.woff
│  │     ├─ lato-all-700-normal.woff
│  │     ├─ lato-latin-400-normal.woff
│  │     ├─ lato-latin-400-normal.woff2
│  │     ├─ lato-latin-700-normal.woff
│  │     ├─ lato-latin-700-normal.woff2
│  │     ├─ lato-latin-ext-400-normal.woff
│  │     ├─ lato-latin-ext-400-normal.woff2
│  │     ├─ lato-latin-ext-700-normal.woff
│  │     ├─ lato-latin-ext-700-normal.woff2
│  │     ├─ raleway-all-400-normal.woff
│  │     ├─ raleway-cyrillic-400-normal.woff
│  │     ├─ raleway-cyrillic-400-normal.woff2
│  │     ├─ raleway-cyrillic-ext-400-normal.woff
│  │     ├─ raleway-cyrillic-ext-400-normal.woff2
│  │     ├─ raleway-latin-400-normal.woff
│  │     ├─ raleway-latin-400-normal.woff2
│  │     ├─ raleway-latin-ext-400-normal.woff
│  │     ├─ raleway-latin-ext-400-normal.woff2
│  │     ├─ raleway-vietnamese-400-normal.woff
│  │     └─ raleway-vietnamese-400-normal.woff2
│  └─ templates
│     ├─ base.html
│     ├─ challenge.html
│     ├─ challenges.html
│     ├─ components
│     │  ├─ errors.html
│     │  ├─ navbar.html
│     │  └─ notifications.html
│     ├─ config.html
│     ├─ confirm.html
│     ├─ errors
│     │  ├─ 403.html
│     │  ├─ 404.html
│     │  ├─ 429.html
│     │  ├─ 500.html
│     │  └─ 502.html
│     ├─ login.html
│     ├─ macros
│     │  └─ forms.html
│     ├─ notifications.html
│     ├─ page.html
│     ├─ register.html
│     ├─ reset_password.html
│     ├─ scoreboard.html
│     ├─ settings.html
│     ├─ setup.html
│     ├─ teams
│     │  ├─ invite.html
│     │  ├─ join_team.html
│     │  ├─ new_team.html
│     │  ├─ private.html
│     │  ├─ public.html
│     │  ├─ team_enrollment.html
│     │  └─ teams.html
│     └─ users
│        ├─ private.html
│        ├─ public.html
│        └─ users.html
├─ K6 Testing
│  ├─ load.js
│  └─ virtualusers.js
├─ LICENSE
├─ README.md
└─ docker-compose.yml
```
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

### Team

- [Aman Shahid](https://github.com/dev-sire/)
- [Abdul Wasay Khan](https://github.com/AlWasay125/)
- [Abdul Wasay Khan](https://github.com/muhammadharis4359/)

### Contributing

Contributions to this repository are welcome. If you have any improvements to the k6 scripts, Docker Compose configuration, or custom theme, please submit a pull request.

### License

The Project is licensed under ```Creative Commons Attribution Share Alike 4.0 International``` public license