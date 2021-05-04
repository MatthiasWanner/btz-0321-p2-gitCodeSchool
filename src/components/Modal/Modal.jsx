import React, { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { ModalContext } from '../Contexts';

function Modal() {
  const { modal, modalOpen, setModalOpen } = useContext(ModalContext);

  const _status = {
    ok: 'bg-green-500',
    warn: 'bg-yellow-500',
    error: 'bg-red-500',
  }[modal.status || 'ok'];

  return (
    <Dialog className="fixed inset-0 flex justify-center items-center flex-wrap" open={modalOpen} onClose={() => setModalOpen(false)}>
      <Dialog.Overlay className="fixed inset-0" />

      <div className={`z-50 w-full max-w-md p-6 my-8 mx-5 overflow-hidden rounded-2xl ${_status}`}>
        <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">{modal.title}</Dialog.Title>
        <Dialog.Description className="opacity-60 break-word">{modal.content}</Dialog.Description>

        <div className="flex mt-4">
          {modal.buttons.map((button, index) => {
            return (
              <button
                key={index}
                className={`min-w-24 py-2 px-5 ${index < modal.buttons.length ? 'mr-2' : ''} ${
                  button.color
                } rounded-xl focus:outline-none focus:ring`}
                onClick={() => {
                  setModalOpen(false);
                  button.onClick && button.onClick();
                }}>
                {button.content}
              </button>
            );
          })}
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
