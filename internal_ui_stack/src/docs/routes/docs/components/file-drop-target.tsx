import { CodeBlock } from '@/lib/components/ui/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { FileDropTarget } from '@/lib/components/ui/file-drop-target';
import { useState } from 'react';

export default function FileDropTargetDoc() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  const handleFilesDropped = (files: File[]) => {
    setUploadedFiles(files);
  };
  
  const handleCancel = () => {
    setUploadedFiles([]);
  };
  
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">File Drop Target</h1>
        <p className="text-muted-foreground">
          A component that allows users to drag and drop files for upload.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The FileDropTarget component provides a user-friendly interface for file uploads through drag and drop or traditional file selection.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This component is ideal for user interfaces that require file uploads, offering both drag-and-drop functionality and a traditional file selection dialog.
          </p>
          
          <div className="border rounded-md p-4">
            <FileDropTarget 
              onFilesDropped={handleFilesDropped} 
              onCancel={handleCancel}
              acceptedFileTypes=".jpg,.png,.pdf"
              maxFileSizeMB={5}
              multiple={true}
            />
            
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium">Uploaded Files:</h4>
                <ul className="list-disc pl-6 mt-2">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="text-sm">
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the FileDropTarget component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The FileDropTarget component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { FileDropTarget } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage of the FileDropTarget component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Here's how to use the FileDropTarget component:
          </p>

          <CodeBlock language="typescript" code={`import { FileDropTarget } from '@aptima/ui';
import { useState } from 'react';

function FileUploadComponent() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  const handleFilesDropped = (files: File[]) => {
    setUploadedFiles(files);
    // You can now process or upload these files
    console.log('Files received:', files);
  };
  
  const handleCancel = () => {
    // Handle cancel action
    setUploadedFiles([]);
  };
  
  return (
    <div>
      <FileDropTarget 
        onFilesDropped={handleFilesDropped} 
        onCancel={handleCancel}
        acceptedFileTypes=".jpg,.png,image/*"
        maxFileSizeMB={10}
        multiple={true}
      />
      
      {/* Display uploaded files if needed */}
      {uploadedFiles.length > 0 && (
        <div>
          <h4>Uploaded Files:</h4>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the FileDropTarget component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">FileDropTarget Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The FileDropTarget component accepts the following props:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">onFilesDropped</TableCell>
                    <TableCell>
                      <code className="text-xs">(files: File[]) =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>Callback function that is called when files are selected or dropped.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onCancel</TableCell>
                    <TableCell>
                      <code className="text-xs">() =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>Callback function that is called when the cancel button is clicked.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disable</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Whether the file drop target is disabled.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">acceptedFileTypes</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">'*'</code>
                    </TableCell>
                    <TableCell>A comma-separated list of allowed file types (e.g. ".jpg,.png,image/*").</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">maxFileSizeMB</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">10</code>
                    </TableCell>
                    <TableCell>Maximum allowed file size in megabytes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">multiple</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Whether multiple files can be selected.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">''</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to apply to the component.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the FileDropTarget component:
              </p>
              <CodeBlock language="typescript" code={`// Single file upload with specific file type
<FileDropTarget 
  onFilesDropped={handleSingleFileUpload} 
  onCancel={handleCancel}
  acceptedFileTypes=".pdf"
  multiple={false}
/>

// Image upload with size limit
<FileDropTarget 
  onFilesDropped={handleImageUpload} 
  onCancel={handleCancel}
  acceptedFileTypes=".jpg,.jpeg,.png,.gif,image/*"
  maxFileSizeMB={2}
  multiple={true}
/>

// Document upload with custom styling
<FileDropTarget 
  onFilesDropped={handleDocumentUpload} 
  onCancel={handleCancel}
  acceptedFileTypes=".doc,.docx,.pdf,.txt"
  maxFileSizeMB={15}
  multiple={true}
  className="custom-file-uploader"
/>

// Disabled state example
<FileDropTarget 
  onFilesDropped={handleFilesDropped} 
  onCancel={handleCancel}
  disable={isUploading}
/>
`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the FileDropTarget component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The FileDropTarget component is designed with accessibility in mind:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provides keyboard-accessible file upload button for users who cannot use drag-and-drop.</li>
            <li>Includes clear visual feedback for drag over states.</li>
            <li>Maintains proper focus management.</li>
            <li>Provides meaningful error feedback when files are rejected.</li>
            <li>Includes descriptive text that explains file size and type limitations.</li>
            <li>Supports proper disabled states.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
