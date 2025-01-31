'use client';

import React, { useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';




type Props = {
  onUpload?: (cdnUrl: string) => Promise<any>;
};



const UploadCareButton: React.FC<Props> = ({ onUpload }) => {
  const router = useRouter();
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      if (onUpload) {
        const file = await onUpload(e.detail.cdnUrl);
        if (file) {
          router.refresh();
        }
      }
    };

    const currentCtxProvider = ctxProviderRef.current;
    currentCtxProvider?.addEventListener('file-upload-success', handleUpload);

    return () => {
      currentCtxProvider?.removeEventListener('file-upload-success', handleUpload);
    };
  }, [onUpload, router]);

  return (
    
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="912a924c6464207151f3"
      />
    
  );
};

export default UploadCareButton;