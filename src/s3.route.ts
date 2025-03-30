import express, { Request, Response } from 'express';
import { uploadFileToS3 } from './upload.service';
import { uploadDisk, uploadMemory } from '../config/multer.config';

const router = express.Router();

// Cấu hình Multer để xử lý tệp tải lên

// API tải file lên S3
router.post('/upload', uploadMemory.single('file'), async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }


  try {
    const fileUrl = await uploadFileToS3({ file: req.file });

    console.log('File URL:', fileUrl);

    res.json({ message: 'File uploaded successfully', fileUrl });
  } catch (error) {
    res.status(500).json({ message: 'File upload failed', error });
  }
});

router.post('/upload-multiple', uploadDisk.array('files', 5), async (req: Request, res: Response) => {}
);

export default router;
