import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChangeEvent } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProcessFilesOptionsType = {
  multiple?: boolean;
  acceptedFileTypes?: string;
  maxSizeBytes?: number;
};

export const processFiles = (
  event: ChangeEvent<HTMLInputElement>,
  options?: ProcessFilesOptionsType,
) => {
  const defaults = {
    acceptedFileTypes: '*',
    multiple: true,
    maxSizeBytes: 100 * 1024 * 1024, // 100 MB
  };

  const { multiple, acceptedFileTypes, maxSizeBytes } = options
    ? { ...defaults, ...options }
    : defaults;

  const files: File[] = [];
  if (event.target.files) {
    const filesArray = Array.from(event.target.files);

    const filesToProcess = multiple ? filesArray : [filesArray[0]];

    filesToProcess.forEach((file) => {
      const fileTypeValid =
        acceptedFileTypes === '*' ||
        acceptedFileTypes
          .split(',')
          .map((type) => type.trim())
          .some((type) => {
            if (type.startsWith('.')) {
              // Check extension
              return file.name.toLowerCase().endsWith(type.toLowerCase());
            } else {
              // Check MIME type (e.g., "image/*")
              return new RegExp(type.replace('*', '.*')).test(file.type);
            }
          });

      const fileSizeValid = file.size <= maxSizeBytes;

      if (fileTypeValid && fileSizeValid) {
        files.push(file);
      } else {
        console.warn(
          `File "${file.name}" rejected: ${
            !fileTypeValid ? 'Invalid file type' : 'File too large'
          }`,
        );
      }
    });
  }

  return files;
};
