"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectDetailModal } from "@/components/ProjectDetailModal"
import { projectsData } from "@/lib/projectsData"

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

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
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Production-grade security implementations and cloud infrastructure deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <MagneticCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

// Magnetic Card Component with Advanced Hover
function MagneticCard({ project, index, onViewDetails }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Helper function to get first 2 metrics regardless of format
  const getMetricBadges = () => {
    if (Array.isArray(project.metrics)) {
      // Array format: [{ label: "...", value: "..." }]
      return project.metrics.slice(0, 2)
    } else {
      // Object format: { "Key": "Value" }
      return Object.entries(project.metrics)
        .slice(0, 2)
        .map(([label, value]) => ({ label, value }))
    }
  }

  const metricBadges = getMetricBadges()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(-20px)" }}
      />
      
      <div
        className="relative glass-effect rounded-lg p-6 h-full hover:border-primary/30 transition-all duration-500"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Content with subtle 3D lift */}
        <div style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
            >
              <project.icon className="text-primary" size={24} />
            </motion.div>
            <div className="flex gap-2">
              {metricBadges.map((metric: { label: string; value: string }, idx: number) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                >
                  {metric.value}
                </motion.span>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Animated list items */}
          <ul className="space-y-2 mb-6">
            {project.solution.slice(0, 3).map((item: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <motion.div
                  className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"
                  whileHover={{ scale: 2 }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-xs px-2 py-1 rounded-full bg-card border border-border text-muted-foreground cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
              onClick={() => onViewDetails(project)}
            >
              View Details{" "}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ExternalLink size={14} />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}