"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";

interface ScreenshotGalleryProps {
  images: string[];
  folderPath?: string;
}

const ScreenshotGallery = ({ images, folderPath = "/" }: ScreenshotGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="h-1 w-12 bg-[#7ebfcf] rounded-full mb-8"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Screenshots</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden border border-white/10 hover:border-[#7ebfcf]/40 transition-all cursor-pointer shadow hover:shadow-lg"
            onClick={() => setSelectedImage(`${folderPath}/${img}.png`)}
          >
            <Image
              src={`${folderPath}/${img}.png`}
              alt={`Screenshot ${i + 1}`}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </motion.div>
  );
};

export default ScreenshotGallery;

const Modal = ({ image, onClose }: { image: string; onClose: () => void }) => {
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full mx-4 rounded-xl overflow-hidden border border-white/10"
      >
        <Image
          src={image}
          alt="Preview"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>,
    document.body
  );
};
