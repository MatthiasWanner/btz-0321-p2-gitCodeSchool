import React from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import { ModalContext } from '../Contexts';

function Modal() {
  const _status = {
    ok: 'bg-green-500',
    warn: 'bg-yellow-500',
    error: 'bg-red-500',
  }[status];

  return (
    <ModalContext.Consumer>
      {({ modal, setModal, modalOpen, setModalOpen }) => (
        <Dialog className="fixed inset-0 flex justify-center items-center flex-wrap" open={modalOpen} onClose={() => setModalOpen(false)}>
          <Dialog.Overlay className="fixed inset-0" />

          <div className={`w-full max-w-md p-6 my-8 mx-5 overflow-hidden rounded-2xl ${_status}`}>
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              {modal.title}
            </Dialog.Title>
            <Dialog.Description className="break-all">{modal.content}</Dialog.Description>

            <div className="mt-4">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={setModalOpen(false)}>
                {modal.closeButton}
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </ModalContext.Consumer>
  );
}

Modal.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  closeButton: PropTypes.string,
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

export default Modal;
