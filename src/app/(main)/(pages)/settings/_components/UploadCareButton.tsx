'use client';

import React, { useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';
import '@uploadcare/blocks';




type Props = {
  onUpload?: (cdnUrl: string) => Promise<any>;
};

LR.registerBlocks(LR);

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
    <>
      <lr-config ctx-name="my-uploader" pubkey="a9428ff5ff90ae7a64eb" />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />
      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </>
  );
};

export default UploadCareButton;