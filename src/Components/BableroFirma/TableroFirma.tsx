'use client'

import { Button, Slider } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import React, { useRef, useState, useEffect } from 'react'

interface Point {
  x: number
  y: number
}

export const TableroFirma = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [signature, setSignature] = useState<string | null>(null)
  const [brushSize, setBrushSize] = useState(2)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.lineWidth = brushSize
      }
    }
  }, [brushSize])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (canvas) {
      setSignature(canvas.toDataURL())
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    e.preventDefault()

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx && canvas) {
      const rect = canvas.getBoundingClientRect()
      const point: Point =
        'touches' in e
          ? { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top }
          : { x: e.clientX - rect.left, y: e.clientY - rect.top }

      ctx.lineTo(point.x, point.y)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(point.x, point.y)
    }
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setSignature(null)
    }
  }

  const downloadSignature = () => {
    if (signature) {
      const link = document.createElement('a')
      link.download = 'signature.png'
      link.href = signature
      link.click()
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className="border border-gray-300 rounded-lg shadow-md" // Border-radius and shadow
        style={{ border: '2px solid #4CAF50', borderRadius: '10px' }} // Inline border styling
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={draw}
      />
      
      <div className="flex space-x-2">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={clearSignature}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          onClick={downloadSignature}
          disabled={!signature}
        >
          Download
        </Button>
      </div>

      <div className="w-full max-w-xs">
        <label htmlFor="brush-size" className="block text-sm font-medium text-gray-700 mb-2">
          Tamaño
        </label>
        
        <Slider
          id="brush-size"
          min={1}
          max={10}
          step={1}
          value={brushSize}
          onChange={(_, value) => setBrushSize(value as number)}
          sx={{ height: 4 }} // Slider size reduced
        />

        {/* Indicador de tamaño del pincel */}
        <div
          style={{
            width: brushSize * 2,
            height: brushSize * 2,
            backgroundColor: '#000000', // Puedes cambiar el color si lo deseas
            borderRadius: '50%',
            border: '1px solid #4CAF50', // Puedes cambiar el color del borde
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </div>
    </div>
  )
}
