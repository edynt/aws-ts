'use strict';
import { getSignedUrl } from '@aws-sdk/cloudfront-signer';
import s3 from '../config/s3.config';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

export const uploadFileToS3 = async ({ file }) => {
  try {
    // upload file s3
    const imageName = `${Date.now()}-${file.originalname}`;
    const publicUrl = process.env.AWS_CLOUDFRONT_PUBLIC_URL;

    const objectPutCommand = await new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imageName,
      Body: file.buffer,
      ContentType: 'image/jpeg',
    });

    await s3.send(objectPutCommand);

    const signedUrl = getSignedUrl({
      url: `${publicUrl}/${imageName}`,
      keyPairId: process.env.AWS_KEY_PAIR_ID as string,
      dateLessThan: new Date(Date.now() + 1000 * 60), // het han trong 1'
      privateKey: process.env.AWS_PRIVATE_KEY as string,
    });

    return signedUrl;
  } catch (err) {
    console.log(err);
  }
};
