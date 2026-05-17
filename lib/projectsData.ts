import { Shield, Cloud, Box, Globe } from "lucide-react"

export const projectsData = [
  {
    id: 1,
    title: "pfSense Network Security Architecture",
    description: "Enterprise-grade three-tier security infrastructure with WAN/LAN/DMZ segmentation, Captive Portal authentication, and complete network services deployment.",
    icon: Shield,
    tags: ["pfSense", "Network Security", "Apache", "Bind9", "Ubuntu", "Wireshark"],
    challenge: "Deploy a segmented network architecture to protect a web server while controlling user access through centralized authentication. The goal was to isolate the web server from client workstations using a DMZ zone and implement secure access control.",
    solution: [
      "Implemented three-tier network architecture (WAN/LAN/DMZ) with pfSense firewall",
      "Configured WAN (em0) for internet connectivity with dynamic IP from ISP",
      "Set up LAN zone (em1 - 192.168.10.0/24) for authenticated client access",
      "Created isolated DMZ zone (em2 - 192.168.11.0/24) for web server hosting",
      "Deployed DHCP service on LAN (range: 192.168.10.100-200)",
      "Configured static IPs for DMZ servers to ensure service stability",
      "Implemented DNS Resolver (Unbound) with DNSSEC support",
      "Set up Captive Portal authentication for LAN users",
      "Created user groups and assigned portal access privileges"
    ],
    architecture: {
      title: "Three-Tier Network Segmentation",
      description: "WAN interface handles external connectivity, LAN provides medium-trust client access with mandatory authentication, and DMZ hosts publicly-accessible services in complete isolation. The DMZ cannot initiate connections to LAN, ensuring internal data security even if a server is compromised."
    },
    results: [
      "Successfully segmented network into three secure zones",
      "Deployed functional Captive Portal with user authentication",
      "Configured DNS resolution with Host Override for internal services",
      "Implemented firewall rules preventing DMZ-to-LAN communication",
      "Validated ICMP isolation between network zones",
      "Achieved secure web server deployment in DMZ",
      "Enabled centralized user management and access control"
    ],
    metrics: [
      { label: "Network Zones", value: "3" },
      { label: "Firewall Rules", value: "15+" },
      { label: "Security Level", value: "Enterprise" },
      { label: "Architecture", value: "WAN/LAN/DMZ" }
    ],
    pdfUrl: "/reports/Rapport_Projet.pdf", // Place PDF in public/reports/
    gradient: "from-cyan-500/10 to-blue-500/10"
  },
  {
    id: 2,
    title: "OpenStack Cloud Infrastructure + SLA Monitoring",
    description: "Production-ready cloud deployment with Infrastructure-as-Code using Terraform, automated SLA monitoring achieving 99.5% availability target, and Python-based health checks.",
    icon: Cloud,
    tags: ["OpenStack", "Terraform", "Python", "SLA Monitoring", "IaC"],
    challenge: "Deploy a production-ready cloud infrastructure using Infrastructure-as-Code principles, implement automated SLA monitoring to track availability targets, and ensure 99.5% uptime through continuous health checks and automated reporting.",
    solution: [
      "Deployed multi-tier cloud architecture using OpenStack platform",
      "Implemented Infrastructure-as-Code with Terraform for reproducible deployments",
      "Created automated Python-based SLA monitoring system",
      "Set up real-time availability tracking with 99.5% target threshold",
      "Implemented automated health checks for all cloud instances",
      "Configured hourly SLA report generation with timestamp logging",
      "Built monitoring dashboard for SLA compliance tracking",
      "Automated instance discovery and status verification"
    ],
    architecture: {
      title: "Cloud Infrastructure with Automated Monitoring",
      description: "Multi-tier OpenStack deployment managed via Terraform IaC, with Python monitoring service continuously checking instance health, calculating availability percentages, and generating timestamped reports. The system automatically detects SLA violations when availability drops below 99.5%."
    },
    results: [
      "Achieved automated 99.5% SLA target monitoring",
      "Deployed infrastructure using Terraform IaC for repeatability",
      "Implemented real-time health check system",
      "Created hourly SLA compliance reporting",
      "Built historical availability tracking in sla_report.txt",
      "Automated instance status verification (ACTIVE/SHUTOFF)",
      "Enabled proactive SLA violation detection"
    ],
    metrics: [
      { label: "SLA Target", value: "99.5%" },
      { label: "Monitoring", value: "Automated" },
      { label: "Health Checks", value: "Real-time" },
      { label: "IaC Tool", value: "Terraform" }
    ],
    pdfUrl: "/reports/rapport_cloud_Editing.pdf",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    id: 3,
    title: "Docker Swarm + Apache Spark Cluster",
    description: "Hybrid security + performance architecture combining container orchestration with distributed computing. NFS-backed persistent storage and Zero Trust network design.",
    icon: Box,
    tags: ["Docker Swarm", "Apache Spark", "NFS", "pfSense", "Zero Trust"],
    challenge: "Build a fault-tolerant distributed computing cluster using Docker Swarm and Apache Spark, while maintaining enterprise-grade security through pfSense firewall integration. The challenge was balancing performance needs with strict security requirements in a containerized environment.",
    solution: [
      "Deployed Docker Swarm cluster for container orchestration",
      "Integrated Apache Spark for distributed computing workloads",
      "Configured NFS-based persistent storage for cluster data",
      "Implemented pfSense security perimeter around the cluster",
      "Applied Zero Trust architecture principles",
      "Validated distributed computing with SparkPi algorithm",
      "Set up multi-node cluster with fault tolerance",
      "Secured inter-container communication"
    ],
    architecture: {
      title: "Hybrid Security + Performance Design",
      description: "Docker Swarm manages container orchestration across multiple nodes, Apache Spark handles distributed computation, NFS provides shared persistent storage, and pfSense enforces Zero Trust security policies at the network perimeter. This design combines high-performance computing with enterprise security."
    },
    results: [
      "Successfully deployed containerized Spark cluster",
      "Achieved distributed computing with SparkPi validation",
      "Implemented NFS persistent storage layer",
      "Secured cluster with pfSense perimeter firewall",
      "Applied Zero Trust network architecture",
      "Enabled fault-tolerant multi-node deployment",
      "Validated performance and security integration"
    ],
    metrics: [
      { label: "Cluster Type", value: "Distributed" },
      { label: "Security", value: "Zero Trust" },
      { label: "Storage", value: "NFS" },
      { label: "Orchestration", value: "Swarm" }
    ],
    pdfUrl: "/reports/rapport.pdf",
    gradient: "from-emerald-500/10 to-cyan-500/10"
  },
  {
    id: 4,
    title: "Gotto Job Portal - Secure Web Infrastructure",
    description: "Complete full-stack deployment with DMZ architecture, DNS resolution, web server hardening, and multi-layer security controls for public-facing web application.",
    icon: Globe,
    tags: ["Ubuntu", "Apache", "Bind9", "pfSense", "DMZ Architecture"],
    challenge: "Deploy a production-ready job portal web application with enterprise-grade security using DMZ architecture, implement DNS resolution for internal and external access, harden web server configuration, and establish multi-layer security controls for the public-facing service.",
    solution: [
      "Implemented DMZ network architecture for web server isolation",
      "Configured Apache web server on Ubuntu with security hardening",
      "Deployed Bind9 DNS server for domain resolution",
      "Set up pfSense firewall rules for DMZ traffic control",
      "Configured DNS Host Override for internal service access",
      "Implemented security-hardened Ubuntu server baseline",
      "Established multi-layer access controls",
      "Validated Captive Portal integration for authenticated access"
    ],
    architecture: {
      title: "DMZ Multi-Layer Security Design",
      description: "Web server deployed in DMZ zone isolated from LAN, DNS provides both internal and external resolution, Apache serves the application with hardened configuration, and pfSense enforces strict firewall rules allowing only necessary traffic. Users must authenticate through Captive Portal before accessing the service."
    },
    results: [
      "Deployed secure job portal in DMZ architecture",
      "Configured DNS resolution with Bind9",
      "Hardened Apache web server configuration",
      "Implemented multi-layer pfSense firewall rules",
      "Achieved successful Captive Portal authentication flow",
      "Validated secure external and internal access",
      "Completed Ubuntu security baseline hardening"
    ],
    metrics: [
      { label: "Architecture", value: "DMZ" },
      { label: "Web Server", value: "Apache" },
      { label: "DNS", value: "Bind9" },
      { label: "Security Layers", value: "Multi-tier" }
    ],
    pdfUrl: "/reports/Rapport_Projet.pdf",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  {
    id: 5,
    title: "GNS3 Enterprise Network - HA Cluster & Multi-Site VPN",
    description: "Enterprise network infrastructure with high availability pfSense cluster, dual WAN failover, multi-site VPN connectivity, and advanced VLAN segmentation validated through comprehensive failure testing.",
    icon: Shield,
    tags: ["GNS3", "pfSense HA", "CARP", "Dual WAN", "IPsec VPN", "OpenVPN", "Cisco IOS", "VLAN", "Failover Testing"],
    challenge: "Design and deploy a fault-tolerant, multi-site enterprise network infrastructure capable of surviving hardware failures, ISP outages, and security breaches. The architecture must guarantee 99.9%+ uptime through redundant components, support secure remote access for teleworkers, enable seamless site-to-site connectivity across geographically distributed offices, and enforce strict network segmentation to prevent lateral movement in case of compromise.",
    solution: [
      "Deployed 2x pfSense CE 2.7.2 firewalls in active-passive CARP cluster with automatic sub-10-second failover and real-time state synchronization",
      "Configured dual ISP connectivity with intelligent gateway monitoring, round-robin load balancing, and automatic failover with <10s convergence",
      "Built complete VPN ecosystem with IPsec site-to-site tunnels connecting 2 remote branch offices and OpenVPN server for remote workers",
      "Designed 4-tier VLAN architecture (Users, Admin, DMZ, Guest) using Cisco switches with 802.1Q trunking and inter-VLAN routing",
      "Isolated public-facing DMZ services with RFC1918 blocking preventing lateral movement while enabling controlled external access",
      "Established internal PKI Certificate Authority for X.509 management and certificate-based VPN authentication",
      "Executed 7 distinct failure scenarios with 23 technical diagrams validating CARP failover, WAN redundancy, and security isolation",
      "Validated production-ready architecture through comprehensive testing including traceroute analysis and Wireshark packet captures"
    ],
    architecture: {
      title: "High Availability Multi-Site Network",
      description: "Dual pfSense firewalls in CARP cluster provide active-passive redundancy with sub-10-second failover. Dual WAN links enable automatic ISP failover and load balancing. Four isolated VLANs enforce network segmentation. IPsec tunnels connect remote sites while OpenVPN serves remote workers. All components validated through comprehensive failure testing."
    },
    results: [
      "99.9%+ availability validated - zero active session drops during failover testing",
      "Enterprise-grade security with 4 isolated VLANs and 100% DMZ isolation confirmed",
      "Multi-site connectivity across 3 geographically distributed sites via encrypted IPsec tunnels",
      "Secure remote workforce infrastructure with OpenVPN + PKI certificate authentication",
      "Dual WAN load balancing effectively doubling available Internet bandwidth utilization",
      "Professional 28-page technical documentation with detailed testing results and diagrams"
    ],
    metrics: [
      { label: "HA Failover", value: "<10 sec" },
      { label: "Network Uptime", value: "99.9%+" },
      { label: "VPN Tunnels", value: "3" },
      { label: "VLANs", value: "4" }
    ],
    pdfUrl: "/reports/rapport_GNS3_vfinal.pdf",
    gradient: "from-cyan-500/10 to-indigo-500/10"
  }
]