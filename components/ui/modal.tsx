"use client"

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

export const Modal: React.FC<ModalProps> = (
    { 
        title, 
        description, 
        isOpen, 
        children, 
        onClose 
    }) => {
        const onChange = (open: boolean) => {
            if (!open) {
                onClose();
            } 
        }

        return (
            <Dialog open={isOpen} onOpenChange={onChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div>
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
        
