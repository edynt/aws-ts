'use strict';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3 from '../config/s3.config';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

export const uploadFileToS3 = async ({ file }) => {
  try {
    // upload file s3
    const imageName = `${Date.now()}-${file.originalname}`;

    const objectPutCommand = await new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imageName,
      Body: file.buffer,
      ContentType: 'image/jpeg',
    });

    await s3.send(objectPutCommand);

    return `${process.env.AWS_CLOUDFRONT_PUBLIC_URL}/${imageName}`;
  } catch (err) {
    console.log(err);
  }
};
