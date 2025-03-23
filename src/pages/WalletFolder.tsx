
import React, { useState } from 'react';
import { ChevronLeft, Folder, File, Shield, Download, Upload, BarChart, Settings, Wallet, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const WalletFolder: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  
  const folders = [
    { id: 'main', name: 'Main Wallet', icon: Wallet, files: ['wallet.json', 'credentials.key', 'backup.zip'] },
    { id: 'personal', name: 'Personal Folder', icon: User, files: ['personal.json', 'notes.txt', 'contacts.dat'] },
    { id: 'transactions', name: 'Transactions', icon: BarChart, files: ['history.log', 'pending.json', 'receipts.dat'] },
    { id: 'security', name: 'Security', icon: Shield, files: ['auth.key', 'permissions.json', 'verification.dat'] },
    { id: 'backups', name: 'Backups', icon: Download, files: ['backup-2023.zip', 'backup-2024.zip', 'recovery.dat'] },
    { id: 'settings', name: 'Settings', icon: Settings, files: ['config.json', 'preferences.dat', 'network.json'] },
  ];

  const selectedFolderData = folders.find(folder => folder.id === selectedFolder);

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="mb-6 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Wallet Folder</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 bg-card rounded-lg shadow-sm border p-4">
          <h2 className="font-semibold mb-4 text-lg">Folders</h2>
          <div className="space-y-2">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-md transition-colors",
                  selectedFolder === folder.id 
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-muted"
                )}
              >
                <folder.icon className="h-5 w-5" />
                <span>{folder.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-card rounded-lg shadow-sm border p-4">
          {selectedFolderData ? (
            <>
              <h2 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <selectedFolderData.icon className="h-5 w-5" />
                {selectedFolderData.name}
              </h2>
              <div className="space-y-2">
                {selectedFolderData.files.map((file, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors cursor-pointer"
                  >
                    <File className="h-5 w-5 text-muted-foreground" />
                    <span>{file}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <Folder className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Select a folder</h3>
              <p className="text-muted-foreground">
                Choose a folder from the sidebar to view its contents
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletFolder;
