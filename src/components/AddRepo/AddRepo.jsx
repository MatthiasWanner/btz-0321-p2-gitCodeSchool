import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ModalContext } from '../Contexts';
import { Dialog } from '@headlessui/react';

export default function AddRepo({ showForm, setShowForm }) {
  const { modal, setModal, setModalOpen } = useContext(ModalContext);
  //   const [modalRepo, setModalRepo] = useState(false);
  const nameRef = useRef();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(showForm);
    setShowForm(false);
    setModal({
      title: 'Yepa !! Vous venez de créer un Repo!!!!',
      content: (
        <>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.type}</p>
        </>
      ),
      buttons: [
        {
          content: 'Valider',
          color: 'bg-green-300 hover:bg-green-600',
        },
      ],
    });
    setModalOpen(true);

    reset();
  };

  return (
    <Dialog
      initialFocus={nameRef}
      className="fixed inset-0 flex justify-center items-center flex-wrap"
      open={showForm}
      onClose={() => setShowForm(false)}>
      <Dialog.Overlay className="fixed inset-0" />
      <div className="z-50 w-full max-w-md p-6 my-8 mx-5 overflow-hidden rounded-2xl">
        <Dialog.Title className="text-white">Création de nouveau Repo</Dialog.Title>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="text-white">
          <div>
            <label htmlFor="name">Nom du Repo</label>
            <input
              type="text"
              className="text-red-400"
              ref={nameRef}
              placeholder="Nom du repo"
              id="name"
              {...register('name', {
                required: 'Ce champs est requis',
                minLength: {
                  value: 2,
                  message: 'Minimum 2 lettres',
                },
              })}
            />
            <ErrorMessage errors={errors} name="name" />
          </div>
          <div>
            <label htmlFor="text">Description</label>
            <input
              className="text-red-400"
              type="text"
              placeholder="Description"
              id="description"
              {...register('description', { required: 'Ce champs est requis' })}
            />
            <ErrorMessage errors={errors} name="description" />
          </div>
          <div>
            <label htmlFor="radio">Public</label>
            <input type="radio" defaultChecked {...register('type', { required: 'Ce champs est requis' })} value="public" />
          </div>
          <div>
            <label htmlFor="radio"> Private</label>
            <input type="radio" {...register('type', { required: 'Ce champs est requis' })} value="private" />
          </div>
          <button type="submit">Créer le Repo</button>
        </form>
      </div>
      <button onClick={() => setShowForm(false)}>Annuler</button>
    </Dialog>
  );
}
