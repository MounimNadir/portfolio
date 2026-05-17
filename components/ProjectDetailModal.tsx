"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PDFPreviewModal } from "@/components/PDFPreviewModal"
import GNS3NetworkTopology from '@/components/projects/GNS3NetworkTopology';
import GNS3MetricsDashboard from '@/components/projects/GNS3MetricsDashboard';

interface ProjectDetail {
  id: number
  title: string
  description: string
  icon: any
  tags: string[]
  challenge: string
  solution: string[]
  results: string[]
  architecture?: {
    title: string
    description: string
  }
  metrics: { label: string; value: string }[] | Record<string, string>
  pdfUrl?: string
  githubLink?: string
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [isPDFPreviewOpen, setIsPDFPreviewOpen] = useState(false)

  if (!project) return null

  const Icon = project.icon

  const handleViewReport = () => {
    setIsPDFPreviewOpen(true)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-8 z-50 overflow-y-auto"
            >
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="glass-effect rounded-lg max-w-4xl w-full p-6 md:p-8 relative">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-card transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Array.isArray(project.metrics) 
                      ? project.metrics.map((metric, index) => (
                          <div key={index} className="glass-effect rounded-lg p-4 text-center">
                            <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                            <p className="text-lg font-bold text-primary">{metric.value}</p>
                          </div>
                        ))
                      : Object.entries(project.metrics).slice(0, 4).map(([label, value], index) => (
                          <div key={index} className="glass-effect rounded-lg p-4 text-center">
                            <p className="text-sm text-muted-foreground mb-1">{label}</p>
                            <p className="text-lg font-bold text-primary">{value}</p>
                          </div>
                        ))
                    }
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">❗</span> Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">💡</span> Solution
                    </h3>
                    <ul className="space-y-2">
                      {project.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 🔥 INTERACTIVE COMPONENTS FOR GNS3 PROJECT (ID = 2) 🔥 */}
                  {project.id === 5 && (
                    <>
                      {/* Network Architecture - Interactive Topology */}
                      <section className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                          <span className="text-primary">🌐</span> Interactive Network Topology
                        </h3>
                        <GNS3NetworkTopology />
                      </section>

                      {/* Performance Metrics Dashboard */}
                      <section className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                          <span className="text-primary">📊</span> Performance & Results
                        </h3>
                        <GNS3MetricsDashboard />
                      </section>
                    </>
                  )}

                  {/* Architecture - Only show if exists */}
                  {project.architecture && (
                    <div className="mb-6 glass-effect rounded-lg p-4">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="text-primary">🏗️</span> {project.architecture.title}
                      </h3>
                      <p className="text-muted-foreground">{project.architecture.description}</p>
                    </div>
                  )}

                  {/* Results */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-primary">✅</span> Results & Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-card/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action - View Report */}
                  {project.pdfUrl && (
                    <div className="mb-6 glass-effect rounded-lg p-6 border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <FileText className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">Complete Technical Documentation</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            View the full project report with detailed architecture diagrams, configuration steps, 
                            screenshots, and technical analysis. Available as a downloadable PDF document.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Button
                              className="gap-2 glow-cyan"
                              onClick={handleViewReport}
                            >
                              <FileText size={16} />
                              Preview Full Report
                            </Button>
                            <Button
                              variant="outline"
                              className="gap-2"
                              asChild
                            >
                              <a href={project.pdfUrl} download>
                                <Download size={16} />
                                Download PDF
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {project.githubLink && (
                      <Button variant="outline" className="gap-2" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal */}
      {project?.pdfUrl && (
        <PDFPreviewModal
          isOpen={isPDFPreviewOpen}
          onClose={() => setIsPDFPreviewOpen(false)}
          pdfUrl={project.pdfUrl}
          projectTitle={project.title}
        />
      )}
    </>
  )
}