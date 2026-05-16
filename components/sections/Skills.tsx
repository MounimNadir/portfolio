"use client"

import { motion } from "framer-motion"
import { Shield, Cloud, Code, Network, Database, Terminal } from "lucide-react"

const skillCategories = [
  {
    category: "Network Security",
    icon: Shield,
    skills: ["pfSense", "Wireshark", "Snort IDS", "VPN", "DMZ Architecture", "Firewall Rules", "ZPFs"],
    color: "text-cyan-500"
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "OpenStack", "Terraform", "IaC", "SLA Monitoring", "Secrets Manager"],
    color: "text-purple-500"
  },
  {
    category: "DevOps & Orchestration",
    icon: Terminal,
    skills: ["Docker", "Docker Swarm", "CI/CD", "GitHub Actions", "Containerization"],
    color: "text-emerald-500"
  },
  {
    category: "Programming & Scripting",
    icon: Code,
    skills: ["Python", "Bash", "JavaScript", "TypeScript", "Automation Scripts"],
    color: "text-orange-500"
  },
  {
    category: "Systems & Servers",
    icon: Network,
    skills: ["Ubuntu", "Apache", "Bind9", "NFS", "Load Balancing", "DHCP/DNS"],
    color: "text-blue-500"
  },
  {
    category: "Data & Analytics",
    icon: Database,
    skills: ["Apache Spark", "PostgreSQL", "Distributed Computing", "Big Data"],
    color: "text-pink-500"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Skills & Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning security, cloud, and infrastructure domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 ${category.color}`}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-sm px-3 py-1 rounded-full bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🎓 Education
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Master's in SITBD</p>
                <p className="text-sm text-muted-foreground">Faculté des sciences et techniques de Tanger</p>
                <p className="text-sm text-muted-foreground">Université Abdelmalek Essaâdi | 2025-2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🏆 Certifications & Training
            </h3>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">ALX Software Engineering Program (17 Specializations)</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Cloud & Edge Computing Specialist</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Network Security & Infrastructure Professional</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}