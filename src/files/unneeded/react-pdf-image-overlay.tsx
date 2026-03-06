// ===== EXAMPLE 1: Simple Image Overlay =====
// Display images in modal overlay with download

import React, { useState } from 'react';

interface ImageOverlayProps {
  isOpen: boolean;
  imageUrl: string;
  title?: string;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ isOpen, imageUrl, title = 'Image Viewer', onClose }) => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = title || 'image.jpg';
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          maxWidth: '900px',
          width: '90%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            borderBottom: '1px solid #eee',
            background: '#f9f9f9',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '18px', color: '#2c3e50' }}>{title}</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleDownload}
              style={{
                padding: '10px 20px',
                background: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              ⬇ Download
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#7f8c8d',
                fontSize: '28px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '5px',
            }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '20px',
            borderTop: '1px solid #eee',
            background: '#f9f9f9',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;


// ===== EXAMPLE 2: PDF Overlay with pdf.js =====
// Display PDF with page navigation and download

import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

interface PdfOverlayProps {
  isOpen: boolean;
  pdfUrl: string;
  filename?: string;
  onClose: () => void;
}

const PdfOverlay: React.FC<PdfOverlayProps> = ({ isOpen, pdfUrl, filename = 'document.pdf', onClose }) => {
  const [pdf, setPdf] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // Initialize PDF.js worker
  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }, []);

  // Load PDF
  useEffect(() => {
    if (!isOpen || !pdfUrl) return;

    const loadPdf = async (): Promise<void> => {
      try {
        setLoading(true);
        const loadedPdf = await pdfjsLib.getDocument(pdfUrl).promise;
        setPdf(loadedPdf);
        setTotalPages(loadedPdf.numPages);
        setCurrentPage(1);
      } catch (error) {
        alert('Error loading PDF: ' + error);
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [isOpen, pdfUrl]);

  // Render current page
  useEffect(() => {
    if (!pdf || !canvasRef.current) return;

    const renderPage = async (): Promise<void> => {
      const page = await pdf.getPage(currentPage);
      const canvas = canvasRef.current!;
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;
    };

    renderPage();
  }, [pdf, currentPage]);

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPage = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    link.click();
  };

  const handlePrint = (): void => {
    if (canvasRef.current) {
      const image = canvasRef.current.toDataURL('image/png');
      const printWindow = window.open('', '', 'width=800,height=600');
      if (printWindow) {
        printWindow.document.write('<img src="' + image + '" style="width: 100%; margin: 20px;" />');
        printWindow.print();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          maxWidth: '1000px',
          width: '95%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            borderBottom: '1px solid #eee',
            background: '#f9f9f9',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '18px', color: '#2c3e50' }}>{filename}</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleDownload}
              style={{
                padding: '10px 20px',
                background: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              ⬇ Download
            </button>
            <button
              onClick={handlePrint}
              style={{
                padding: '10px 20px',
                background: '#9b59b6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              🖨 Print
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#7f8c8d',
                fontSize: '28px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
          }}
        >
          {loading ? (
            <p>Loading PDF...</p>
          ) : (
            <>
              {/* Controls */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  marginBottom: '15px',
                  background: 'white',
                  padding: '15px',
                  borderRadius: '5px',
                  width: '100%',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  style={{
                    padding: '8px 16px',
                    background: currentPage === 1 ? '#ccc' : '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: currentPage === 1 ? 'default' : 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  ← Previous
                </button>

                <span style={{ color: '#7f8c8d', fontSize: '14px', fontWeight: '600' }}>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: '8px 16px',
                    background: currentPage === totalPages ? '#ccc' : '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: currentPage === totalPages ? 'default' : 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  Next →
                </button>

                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => handleGoToPage(parseInt(e.target.value))}
                  style={{
                    width: '60px',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
                <button
                  onClick={() => handleGoToPage(parseInt((document.querySelector('input[type="number"]') as HTMLInputElement).value))}
                  style={{
                    padding: '8px 16px',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  Go
                </button>
              </div>

              {/* Canvas */}
              <canvas
                ref={canvasRef}
                style={{
                  maxWidth: '100%',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  background: 'white',
                }}
              />
            </>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '20px',
            borderTop: '1px solid #eee',
            background: '#f9f9f9',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfOverlay;


// ===== EXAMPLE 3: Document Viewer Component =====
// Unified component for both images and PDFs

import React, { useState } from 'react';

type DocumentType = 'image' | 'pdf';

interface DocumentViewerProps {
  isOpen: boolean;
  documentUrl: string;
  documentType: DocumentType;
  title?: string;
  onClose: () => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  isOpen,
  documentUrl,
  documentType,
  title = 'Document Viewer',
  onClose,
}) => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = documentUrl;
    link.download = title;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          maxWidth: '900px',
          width: '90%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            borderBottom: '1px solid #eee',
            background: '#f9f9f9',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '18px', color: '#2c3e50' }}>{title}</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleDownload}
              style={{
                padding: '10px 20px',
                background: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              ⬇ Download
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#7f8c8d',
                fontSize: '28px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
          }}
        >
          {documentType === 'image' ? (
            <img
              src={documentUrl}
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '5px',
              }}
            />
          ) : (
            <iframe
              src={documentUrl}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '5px',
              }}
              title={title}
            />
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '20px',
            borderTop: '1px solid #eee',
            background: '#f9f9f9',
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;


// ===== EXAMPLE 4: Complete App Component =====
// Full example with multiple documents

import React, { useState } from 'react';

interface Document {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'pdf';
  thumbnail?: string;
}

const DocumentGallery: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const documents: Document[] = [
    {
      id: '1',
      title: 'Resume',
      url: 'https://via.placeholder.com/600x800?text=Resume',
      type: 'image',
      thumbnail: 'https://via.placeholder.com/150x200?text=Resume',
    },
    {
      id: '2',
      title: 'Certificate',
      url: 'https://via.placeholder.com/600x800?text=Certificate',
      type: 'image',
      thumbnail: 'https://via.placeholder.com/150x200?text=Certificate',
    },
    {
      id: '3',
      title: 'ID Card',
      url: 'https://via.placeholder.com/600x800?text=ID',
      type: 'image',
      thumbnail: 'https://via.placeholder.com/150x200?text=ID',
    },
  ];

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '15px',
          marginBottom: '20px',
        }}
      >
        {documents.map((doc) => (
          <div
            key={doc.id}
            onClick={() => setSelectedDocument(doc)}
            style={{
              cursor: 'pointer',
              border: '2px solid #ddd',
              borderRadius: '5px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3498db';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={doc.thumbnail || doc.url}
              alt={doc.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '600' }}>
              {doc.title}
            </div>
          </div>
        ))}
      </div>

      {selectedDocument && (
        <DocumentViewer
          isOpen={true}
          documentUrl={selectedDocument.url}
          documentType={selectedDocument.type}
          title={selectedDocument.title}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
};

export default DocumentGallery;


// ===== TYPE DEFINITIONS =====
export type { ImageOverlayProps, PdfOverlayProps, DocumentViewerProps, Document };

// ===== EXPORTS =====
export { ImageOverlay, PdfOverlay, DocumentViewer, DocumentGallery };
