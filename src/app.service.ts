import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CI/CD Deployment Journey</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #0f172a;
      color: #e2e8f0;
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: auto;
      padding: 40px 20px;
    }
    h1, h2 {
      color: #38bdf8;
    }
    .card {
      background: #1e293b;
      padding: 20px;
      margin: 20px 0;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    code {
      background: #020617;
      padding: 4px 8px;
      border-radius: 5px;
      color: #38bdf8;
    }
    ul {
      padding-left: 20px;
    }
    .highlight {
      color: #22c55e;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    
    <h1>🚀 CI/CD Website Deployment Project</h1>
    <p>
      This project demonstrates how I built and deployed a web application using a complete CI/CD pipeline.
    </p>

    <div class="card">
      <h2>📌 Project Overview</h2>
      <p>
        The goal of this assignment was to:
      </p>
      <ul>
        <li>Develop a web application</li>
        <li>Automate build and deployment using CI/CD</li>
        <li>Deploy to a cloud environment</li>
      </ul>
    </div>

    <div class="card">
      <h2>🛠️ Technologies Used</h2>
      <ul>
        <li>Backend: NestJS</li>
        <li>CI/CD: GitHub Actions</li>
        <li>Cloud Provider: AWS EC2</li>
        <li>Process Manager: PM2</li>
        <li>Version Control: Git & GitHub</li>
      </ul>
    </div>

    <div class="card">
      <h2>⚙️ CI/CD Pipeline Flow</h2>
      <p>
        The pipeline is triggered automatically whenever code is pushed to the <code>main</code> branch.
      </p>
      <ul>
        <li>Install dependencies using <code>npm ci</code></li>
        <li>Build the application</li>
        <li>Package the build into an artifact</li>
        <li>Upload the artifact</li>
        <li>Deploy to EC2 via SSH</li>
        <li>Restart the app using PM2</li>
      </ul>
    </div>

    <div class="card">
      <h2>☁️ Deployment Process</h2>
      <ul>
        <li>Created an EC2 instance</li>
        <li>Configured security groups (ports 22, 80, 3000)</li>
        <li>Set up SSH authentication</li>
        <li>Connected GitHub Actions to EC2 using secrets</li>
        <li>Automated deployment using SCP + SSH</li>
      </ul>
    </div>

    <div class="card">
      <h2>🧠 Challenges & Learnings</h2>
      <ul>
        <li>Fixing SSH key authentication issues</li>
        <li>Understanding public vs private IPs</li>
        <li>Debugging pipeline errors</li>
        <li>Handling file paths and deployment directories</li>
        <li>Ensuring the app is accessible externally</li>
      </ul>
    </div>

    <div class="card">
      <h2>🌍 Final Result</h2>
      <p>
        The application is now deployed and accessible from anywhere via the EC2 public IP.
      </p>
      <p class="highlight">
        ✔ Fully automated CI/CD pipeline working successfully
      </p>
    </div>

    <div class="card">
      <h2>📈 Conclusion</h2>
      <p>
        This project gave me hands-on experience with real-world DevOps practices,
        including automation, cloud deployment, and pipeline debugging.
      </p>
    </div>

  </div>
</body>
</html>`;
  }
}
