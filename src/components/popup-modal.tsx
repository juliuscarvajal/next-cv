"use client";

import {
  Drawer,
  DrawerContent,
  DrawerContentProps,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type ProjectModalProps = {
  trigger: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const PopupModal = ({
  trigger,
  title,
  children,
  className = "",
}: ProjectModalProps) => {
  const isMobile = useIsMobile();
  const Popup = isMobile ? Drawer : Dialog;
  const PopupTrigger = isMobile ? DrawerTrigger : DialogTrigger;
  const PopupContent = isMobile
    ? ({ children: drawerContentChildren, ...props }: DrawerContentProps) => (
        <DrawerContent {...props}>
          <div className="overflow-y-auto">{drawerContentChildren}</div>
        </DrawerContent>
      )
    : ({
        children: dialogContentChildren,
        className = "",
        ...props
      }: DrawerContentProps) => (
        <DialogContent className={`overflow-y-auto ${className}`} {...props}>
          <div>{dialogContentChildren}</div>
        </DialogContent>
      );
  const PopupHeader = isMobile ? DrawerHeader : DialogHeader;
  const PopupTitle = isMobile ? DrawerTitle : DialogTitle;
  return (
    <Popup>
      <PopupTrigger asChild>{trigger}</PopupTrigger>
      <PopupContent className={`max-h-[90%] ${className}`}>
        <PopupHeader>
          <PopupTitle>{title}</PopupTitle>
        </PopupHeader>
        <div className={`${isMobile ? "p-4" : ""}`}>{children}</div>
      </PopupContent>
    </Popup>
  );
};
