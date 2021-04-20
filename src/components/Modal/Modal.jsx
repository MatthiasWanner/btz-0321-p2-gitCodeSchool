import React from 'react';
import { Dialog } from '@headlessui/react';

function Modal({ children, title, error }) {
  return (
    <Dialog>
      <Dialog.Overlay className="fixed inset-0" />
    </Dialog>
  );
}

export default Modal;