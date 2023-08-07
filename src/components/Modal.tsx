import React, { ReactNode } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

type ModalStyle = {
  overlay: MotionStyle;
  modal: MotionStyle;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth,
}) => {
  const modalStyle: ModalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
    },
    modal: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "0.5rem",
      maxWidth: maxWidth ?? "480px",
      width: "90%",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    },
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          style={modalStyle.overlay}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-container"
            style={modalStyle.modal}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
