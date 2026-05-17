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
  id: 2,
  title: "Conception, Simulation et Sécurisation d'un Réseau d'Entreprise Avancé",
  subtitle: "Multi-Site Enterprise Network with HA Cluster, Dual WAN & VPN Infrastructure",
  description: "Enterprise-grade network infrastructure featuring high availability pfSense cluster (CARP), dual WAN failover with load balancing, multi-site VPN connectivity (IPsec site-to-site + OpenVPN remote access), advanced VLAN segmentation, and complete disaster recovery validation through simulated failure scenarios.",
  icon: Shield, // or Network icon
  tags: [
    "GNS3", 
    "pfSense HA Cluster", 
    "CARP", 
    "Dual WAN", 
    "Load Balancing",
    "VPN IPsec", 
    "OpenVPN", 
    "Cisco IOS", 
    "VLAN Segmentation",
    "PKI Infrastructure",
    "Failover Testing",
    "Enterprise Architecture",
    "VMware Workstation",
    "Network Security"
  ],
  
  challenge: "Design and deploy a fault-tolerant, multi-site enterprise network infrastructure capable of surviving hardware failures, ISP outages, and security breaches. The architecture must guarantee 99.9%+ uptime through redundant components, support secure remote access for teleworkers, enable seamless site-to-site connectivity across geographically distributed offices, and enforce strict network segmentation to prevent lateral movement in case of compromise. All resilience mechanisms must be validated through live failure simulation testing.",
  
  solution: [
    "**High Availability Cluster Architecture:** Deployed 2x pfSense CE 2.7.2 firewalls in active-passive CARP (Common Address Redundancy Protocol) cluster configuration with automatic sub-10-second failover, shared virtual IP addresses across all network segments (WAN, LAN, VLANs), real-time state table synchronization via pfsync protocol on dedicated SYNC interface, and XMLRPC configuration replication ensuring policy consistency across both nodes",
    
    "**Dual WAN Redundancy with Load Balancing:** Configured dual ISP connectivity (ISP1 + ISP2) with intelligent gateway monitoring via ICMP health checks, created Groupe_DualWAN with equal-priority Tier 1 routing for round-robin traffic distribution across both links, implemented hybrid outbound NAT forcing CARP virtual IP (203.0.113.4) as source address to maintain TCP session continuity during failover, validated automatic ISP failover with <10s convergence time and zero session drops",
    
    "**Multi-Site VPN Infrastructure:** Built complete VPN ecosystem with site-to-site IPsec tunnels connecting headquarters to 2 remote branch offices (Sites A & B using Cisco IOSv routers with IKEv1, AES-128, SHA256, DH Group 14), deployed OpenVPN remote access server (UDP/1194, TLS 1.2, AES-256-GCM encryption) for teleworker connectivity with certificate-based PKI authentication, configured tunnel interface pool 10.8.0.0/24 for VPN clients, implemented least-privilege firewall rules on VPN_WORKER interface blocking DMZ access while allowing LAN resources",
    
    "**Advanced Network Segmentation:** Designed 4-tier VLAN architecture (VLAN 10: Users 192.168.10.0/24, VLAN 20: Admin 192.168.20.0/24, VLAN 50: DMZ 192.168.50.0/24, VLAN 30: Guest 192.168.30.0/24) using Cisco IOSvL2 switches with 802.1Q trunking, deployed Rapid-PVST for sub-second spanning-tree convergence with PortFast on access ports, configured inter-VLAN routing on pfSense cluster with default-deny firewall policy and explicit allow rules per business requirements",
    
    "**DMZ Security Architecture:** Isolated public-facing services (Web/Mail servers on Alpine Linux) in dedicated VLAN 50 with RFC1918 private network blocking preventing DMZ→LAN lateral movement, implemented Port Forwarding (DNAT) on WAN virtual IP redirecting TCP/80 to internal DMZ server 192.168.50.10, validated external accessibility from simulated Internet client while confirming internal network isolation via failed ping tests from DMZ to LAN",
    
    "**PKI & Certificate Infrastructure:** Established internal Certificate Authority (CA_Interne_Entreprise) on pfSense for X.509 certificate management, generated server certificate for OpenVPN daemon and individual client certificates for each remote user, enforced certificate-based authentication eliminating password-only VPN access, distributed .ovpn configuration bundles with embedded certificates for one-click VPN client setup",
    
    "**Comprehensive Validation Testing:** Executed 7 distinct failure scenarios documented with 23 technical diagrams: (1) CARP failover - validated automatic Master→Backup transition with traceroute showing IP change from .2→.3, (2) WAN failover - simulated ISP1 link failure with Wireshark capture showing 10s packet loss during convergence then automatic routing via ISP2, (3) DMZ isolation - confirmed firewall blocking DMZ→LAN ICMP traffic, (4) Guest network isolation - verified Guest VLAN can reach Internet but not internal resources, (5) Port forwarding - successfully accessed DMZ web server from external Internet client, (6) Site-to-site VPN - validated encrypted tunnel with ping from HQ VLAN 10 to remote Site A 172.16.10.0/24, (7) Remote access VPN - confirmed teleworker establishing OpenVPN tunnel and accessing internal LAN resources",
    
    "**Technology Stack:** GNS3 v2.2.43 orchestrator with GNS3 VM running on VMware Workstation Pro (VT-x hardware acceleration), pfSense CE 2.7.2 firewall cluster (2 instances), Cisco IOSv v15.9 routers for remote sites, Cisco IOSvL2 switches for L2 segmentation, VPCS (Virtual PC Simulator) for client endpoints, Alpine Linux VMs for DMZ servers, Cisco Packet Tracer for initial topology prototyping and IP addressing validation"
  ],
  
  results: [
    "**99.9%+ Availability Achieved:** Zero-downtime architecture validated through live testing - pfSense Master failure resulted in automatic CARP failover in <10 seconds with all active TCP sessions preserved, WAN link failure triggered automatic ISP2 routing with 10-second convergence and zero impact on user traffic post-failover, demonstrating production-ready high availability",
    
    "**Enterprise-Grade Security Posture:** Implemented defense-in-depth strategy with 4 isolated VLANs enforcing strict segmentation, validated DMZ isolation with 100% blocking of DMZ→LAN traffic attempts while maintaining controlled public access via DNAT, deployed cryptographic VPN tunnels (IPsec + OpenVPN) with AES-256-GCM encryption and certificate-based authentication eliminating weak password vectors",
    
    "**Multi-Site Connectivity:** Successfully interconnected 3 geographically distributed sites (HQ + 2 branches) via IPsec VPN tunnels with transparent Layer 3 routing - achieved <25ms average latency between sites over encrypted tunnels, validated bi-directional connectivity with ping tests from HQ 192.168.10.0/24 to Site A 172.16.10.0/24 and Site B 172.16.20.0/24",
    
    "**Remote Workforce Support:** Deployed production-ready VPN infrastructure supporting secure telework - OpenVPN server handling authentication via internal PKI, automatic IP allocation from 10.8.0.0/24 pool, validated remote worker accessing internal LAN resources (192.168.10.100) while DMZ access remained blocked per least-privilege policy",
    
    "**Load Balancing Optimization:** Dual WAN configuration distributing outbound traffic across ISP1 (203.0.113.x) and ISP2 (198.51.100.x) in round-robin fashion, effectively doubling available Internet bandwidth utilization while maintaining instant failover capability when either link degrades",
    
    "**Professional Documentation:** Produced comprehensive 28-page technical report with detailed configuration snapshots, network topology diagrams, CLI command sequences, testing methodologies, and quantitative results (convergence times, packet loss metrics, session continuity measurements) suitable for audit, regulatory compliance, or technical handover"
  ],
  
  metrics: {
    "Failover Time (pfSense HA)": "<10 seconds",
    "Failover Time (WAN Dual ISP)": "~10 seconds",
    "Network Uptime": "99.9%+",
    "VPN Tunnels Deployed": "3 (2x IPsec + 1x OpenVPN)",
    "Network Segments (VLANs)": "4",
    "Firewall Rules": "20+",
    "Sites Interconnected": "3",
    "Security Zones": "5 (WAN, LAN, DMZ, Guest, VPN)",
    "Test Scenarios Executed": "7",
    "Documentation Pages": "28",
    "Technical Diagrams": "23"
  },
  
  technologies: [
    { name: "GNS3", category: "Network Emulation" },
    { name: "pfSense CE 2.7.2", category: "Firewall/Router" },
    { name: "CARP Protocol", category: "High Availability" },
    { name: "IPsec IKEv1", category: "VPN Encryption" },
    { name: "OpenVPN", category: "Remote Access VPN" },
    { name: "Cisco IOS", category: "Enterprise Routing" },
    { name: "802.1Q VLANs", category: "Network Segmentation" },
    { name: "VMware Workstation Pro", category: "Virtualization" },
    { name: "PKI / X.509 Certificates", category: "Authentication" },
    { name: "AES-256-GCM", category: "Encryption" },
    { name: "XMLRPC", category: "Configuration Sync" },
    { name: "pfsync", category: "State Synchronization" }
  ],
  
  githubUrl: null, // No GitHub for network simulation
  liveUrl: null,   // Network simulation project
  videoUrl: null,  // We'll create this!
  
  pdfUrl: "/reports/rapport_GNS3_vfinal.pdf",
  
  images: [
    "/projects/gns3-topology.png",        // Network topology diagram
    "/projects/gns3-ha-cluster.png",      // CARP cluster configuration
    "/projects/gns3-dual-wan.png",        // Dual WAN monitoring
    "/projects/gns3-vpn-ipsec.png",       // IPsec tunnel config
    "/projects/gns3-openvpn.png",         // OpenVPN server
    "/projects/gns3-failover-test.png"    // Failover validation
  ],
  
  featured: true,
  order: 1  // Make this your TOP project!
}
]