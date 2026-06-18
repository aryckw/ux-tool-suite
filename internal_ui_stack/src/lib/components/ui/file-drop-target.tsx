import { UploadIcon } from 'lucide-react';
import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Button } from './button.tsx';
import { processFiles } from '../../utils';

interface FileDropTargetProps {
  onFilesDropped: (files: File[]) => void;
  onCancel: () => void;
  disable?: boolean;
  acceptedFileTypes?: string; // e.g. ".jpg,.png,image/*"
  maxFileSizeMB?: number;
  multiple?: boolean;
  className?: string;
}

const FileDropTarget: React.FC<FileDropTargetProps> = ({
  onFilesDropped,
  onCancel,
  disable = false,
  acceptedFileTypes = '*',
  maxFileSizeMB = 10,
  multiple = false,
  className = '',
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxSizeBytes = maxFileSizeMB * 1024 * 1024;

  // Handle drag events
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (!disable && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = processFiles(
        {
          target: { files: e.dataTransfer.files },
        } as ChangeEvent<HTMLInputElement>,
        {
          acceptedFileTypes,
          maxSizeBytes,
          multiple,
        },
      );

      onFilesDropped(files);
    }
  };

  // Handle file input change
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = processFiles(e, {
        acceptedFileTypes,
        maxSizeBytes,
        multiple,
      });

      onFilesDropped(files);
    }
  };

  // Open file dialog when clicking on the drop area
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`file-drop-target ${
        isDragging ? 'dragging' : ''
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${!disable && isDragging ? '#2196f3' : '#ccc'}`,
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor:
          !disable && isDragging ? 'rgba(33, 150, 243, 0.05)' : 'transparent',
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <input
        disabled={disable}
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept={acceptedFileTypes}
        multiple={multiple}
        style={{ display: 'none' }}
      />
      {disable ? (
        <>
          <p>Please select a Corpus and Document Type</p>
          <div className="mt-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </>
      ) : isDragging ? (
        <p>Drop your files here</p>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-xl">Drop your files here</p>
          <p className="text-xl">or</p>
          <div className="flex flex-row gap-2 justify-center">
            <Button disabled={disable} onClick={openFileDialog}>
              <UploadIcon />
              Upload
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
          <p className="flex flex-col gap-1">
            {acceptedFileTypes !== '*' && (
              <small>Files must end with [{acceptedFileTypes}]</small>
            )}
            <p className="text-sm">Files must not exceed {maxFileSizeMB}MB</p>
            <p className="text-sm">
              {multiple ? 'Multiple files allowed' : 'Single file only'}
            </p>
          </p>
        </div>
      )}
    </div>
  );
};

export { FileDropTarget, type FileDropTargetProps };
