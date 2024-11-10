"use client";

import {
  Drawer,
  DrawerContent,
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
import { cn } from "@/lib/utils";

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
  const PopupContent = isMobile ? DrawerContent : DialogContent;
  const PopupHeader = isMobile ? DrawerHeader : DialogHeader;
  const PopupTitle = isMobile ? DrawerTitle : DialogTitle;
  return (
    <Popup>
      <PopupTrigger asChild>{trigger}</PopupTrigger>
      <PopupContent className={cn("px-8 pb-8", className)}>
        <PopupHeader>
          <PopupTitle>{title}</PopupTitle>
        </PopupHeader>
        {children}
      </PopupContent>
    </Popup>
  );
};
