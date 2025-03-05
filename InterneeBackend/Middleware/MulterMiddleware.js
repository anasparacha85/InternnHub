const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, "uploads/images/"); // Save images in 'uploads/images'
    } else {
      cb(null, "uploads/cvs/"); // Save PDFs/DOCs in 'uploads/cvs'
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// File filter to allow only images & CVs
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg", "image/png",  // Images
    "application/pdf",  // PDF
    "application/msword",  // DOC
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // DOCX
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images (JPG, PNG) & CVs (PDF, DOCX) allowed!"), false);
  }
};

// Multer middleware to handle multiple file types
const upload = multer({ storage, fileFilter });

module.exports = upload;
