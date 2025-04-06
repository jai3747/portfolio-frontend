export const projectsData = [
    {
        id: 1,
        name:'Project UTSAHA: On-Prem to AWS Migration',
        description: "Spearheaded a transformative cloud migration project for Mahindra Finance, seamlessly moving critical applications from on-premises physical servers to the AWS Cloud. Key achievements include:\n\n• Infrastructure as Code (IaC) using Terraform with reusable modular code\n• Automated Jenkins master pipeline for Terraform deployments\n• Provisioned optimized EC2 instances using golden images\n• Implemented data migration with Amazon FSx\n• Configured advanced load balancing with ALB and NLB\n• Established Disaster Recovery setup in ap-south-2 (Mumbai)\n\nProject Highlights:\n• Fully automated and scalable cloud infrastructure\n• Improved performance, availability, and reliability\n• Zero downtime during migration\n• Seamless traffic management for public and private applications",
        tools: [ 
            'AWS', 'Terraform', 'Jenkins', 'EC2', 'Amazon FSx', 
            'Application Load Balancer (ALB)', 'Network Load Balancer (NLB)', 
            'Route 53', 'Bitbucket', 'DevOps Tools' 
        ],
        role: 'Cloud Migration Engineer',
        technologies: {
            devops: ['Snyk', 'SemGrep', 'Cert Scan', 'DAST Scan OWASP', 'Trivy Image Scan', 'Checkov IaC Scan', 'Kubernetes Scan'],
            cloud: ['GCP', 'GKE Cluster Deployment'],
            infrastructure: ['Docker', 'Docker Hub', 'Nginx Ingress Controller'],
            monitoring: ['Prometheus', 'Grafana']
        },
        deploymentDetails: {
            frontend: 'Deployed',
            backend: 'Deployed',
            database: 'Deployed',
            cicd: 'GitHub Actions - Fully Automated End-to-End'
        },
        period: 'Aug 2024 - Present',
        company: 'BootLabs',
        code: '',
        demo: ''
    },
    {
        id: 2,
        name: 'Full Stack Cloud Native Learning Project',
        description: "A comprehensive personal learning project focusing on end-to-end cloud-native application development and DevOps practices. Key components and achievements:\n\n• Developed a full-stack application with microservices architecture\n• Implemented CI/CD pipeline with complete automation\n• Explored and integrated multiple cloud-native technologies and best practices\n\nProject Highlights:\n• End-to-end automated deployment\n• Implemented advanced DevOps and cloud technologies\n• Hands-on experience with containerization and orchestration\n• Explored multiple cloud and DevOps tools",
        tools: [
            'Docker', 'Kubernetes', 'GitHub Actions', 'GCP', 
            'Terraform', 'Prometheus', 'Grafana', 'Nginx'
        ],
        role: 'Full Stack Developer & DevOps Engineer',
        technologies: {
            devops: ['Snyk', 'SemGrep', 'Security Scanning', 'DAST Scan', 'Trivy', 'Checkov', 'Kubernetes Scan'],
            cloud: ['GCP', 'GKE Cluster'],
            infrastructure: ['Docker', 'Docker Hub', 'Nginx Ingress'],
            monitoring: ['Prometheus', 'Grafana']
        },
        deploymentDetails: {
            frontend: 'Deployed',
            backend: 'Deployed',
            database: 'Deployed',
            cicd: 'GitHub Actions - Fully Automated End-to-End'
        },
        period: 'Jan 2024 - Present',
        company: 'Personal Project',
        code: '',
        demo: ''
    }
];