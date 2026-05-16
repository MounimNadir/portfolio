"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Shield, Cloud, Server, Download, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const floatingIcons = [
    { Icon: Shield, delay: 0, left: "10%", top: "20%" },
    { Icon: Cloud, delay: 0.2, left: "80%", top: "30%" },
    { Icon: Server, delay: 0.4, left: "20%", top: "70%" },
  ]

  return (
    <>
      {/* Main Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Parallax Background Icons */}
        {floatingIcons.map(({ Icon, delay, left, top }, index) => (
          <motion.div
            key={index}
            style={{ 
              y,
              left,
              top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute text-primary/10"
          >
            <Icon size={80} />
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div style={{ opacity }} className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-primary border border-primary/20">
                🔒 Cybersecurity Engineer & Cloud Architect
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Securing Infrastructure,
              <br />
              <span className="text-gradient">Building Resilience</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Specialized in enterprise-grade network security, cloud infrastructure automation, 
              and DevOps. Transforming complex security challenges into robust, scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="glow-cyan group"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="group-hover:scale-110 inline-block transition-transform">About Me</span>
              </Button>
              <Button
                size="lg"
                className="glow-cyan group"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="group-hover:scale-110 inline-block transition-transform">View Projects</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </section>

      {/* About Me Section with Professional Photo */}
      <section id="about" className="py-24 relative bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Professional Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative">
                  {/* Animated border gradient */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/profile_picture.jpg"
                      alt="Nadir Mounim - Cybersecurity Engineer"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="text-primary font-semibold text-sm uppercase tracking-wider"
                  >
                    About Me
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-3xl md:text-4xl font-bold mt-2 mb-4"
                  >
                    Nadir <span className="text-gradient">Mounim</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                  >
                    A passionate Cybersecurity Engineer and Cloud Architect with expertise in building 
                    enterprise-grade security infrastructures. Currently pursuing my Master's in SITBD at 
                    Université Abdelmalek Essaâdi, I specialize in network segmentation, cloud automation, 
                    and DevSecOps practices.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    My experience spans from implementing pfSense-based network architectures to deploying 
                    OpenStack cloud platforms with automated SLA monitoring. I'm also an ALX Software Engineering 
                    graduate with 17 specializations, constantly exploring the intersection of security and innovation.
                  </motion.p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="glass-effect p-4 rounded-lg hover:border-primary/30 transition-colors cursor-pointer group"
                  >
                    <MapPin className="text-primary mb-2 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-sm text-muted-foreground">Based in</p>
                    <p className="font-semibold">Tangier, Morocco</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 }}
                    className="glass-effect p-4 rounded-lg hover:border-primary/30 transition-colors cursor-pointer group"
                  >
                    <Mail className="text-primary mb-2 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-semibold text-sm">Available</p>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4 pt-6"
                >
                  <Button
                    className="gap-2 glow-cyan group"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                    <span className="group-hover:scale-110 inline-block transition-transform">Get In Touch</span>
                  </Button>
                  <Button variant="outline" className="gap-2 border-primary hover:bg-primary hover:text-primary-foreground group">
                    <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                    <span>Download CV</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}