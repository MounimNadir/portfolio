"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  projectTitle: string
}

export function PDFPreviewModal({ isOpen, onClose, pdfUrl, projectTitle }: PDFPreviewModalProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4 // We'll show first 4 pages as preview

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-8 z-[60] overflow-hidden"
          >
            <div className="h-full flex flex-col items-center justify-center">
              <div className="glass-effect rounded-lg max-w-5xl w-full h-full max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{projectTitle}</h3>
                      <p className="text-sm text-muted-foreground">Project Report Preview</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={pdfUrl} download>
                        <Download size={16} />
                        Download Full Report
                      </a>
                    </Button>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-lg hover:bg-card transition-colors"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-hidden bg-zinc-900/50 relative">
                  <div className="h-full w-full flex items-center justify-center p-8">
                    {/* PDF Embed */}
                    <div className="w-full h-full max-w-4xl glass-effect rounded-lg overflow-hidden">
                      <iframe
                        src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                        className="w-full h-full"
                        title={`${projectTitle} Report`}
                      />
                    </div>
                  </div>

                  {/* Preview Notice */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="glass-effect px-6 py-3 rounded-full border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        📄 Preview Mode • Download for full access to all pages
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText size={16} />
                    <span>Complete technical documentation available</span>
                  </div>
                  <Button className="gap-2 glow-cyan" asChild>
                    <a href={pdfUrl} download>
                      <Download size={16} />
                      Download Complete Report
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}