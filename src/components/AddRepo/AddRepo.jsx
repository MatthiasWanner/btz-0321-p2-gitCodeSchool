import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ModalContext } from '../Contexts';
import { Dialog } from '@headlessui/react';

export default function AddRepo({ showForm, setShowForm }) {
  const { modal, setModal, setModalOpen } = useContext(ModalContext);
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
      title: 'Yepa 🎉 ! Vous venez de créer un Repo',
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
      <div className="z-50 w-full max-w-md p-6 my-8 mx-5 overflow-hidden rounded-2xl bg-gold-dark flex flex-col justify-around">
        <Dialog.Title className="text-white text-center text-lg mb-2">Création de votre Repo</Dialog.Title>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="text-white flex flex-col justify-around ">
          <div>
            <label htmlFor="name" className="">
              Nom du Repo
            </label>
            <input
              type="text"
              ref={nameRef}
              placeholder="Nom du repo"
              id="name"
              className={` text-black focus:outline-none
              ${errors.name ? 'bg-red-400' : ''}
              `}
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
            <label htmlFor="text" className="">
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              id="description"
              className={`  text-black focus:outline-none
           ${errors.description ? 'bg-red-400' : ''}
              `}
              {...register('description', { required: 'Ce champs est requis' })}
            />
            <ErrorMessage errors={errors} name="description" />
          </div>
          <div className="flex flex-row justify-around py-2">
            <div>
              <label htmlFor="radio">Public</label>
              <input type="radio" defaultChecked {...register('type', { required: 'Ce champs est requis' })} value="public" />
            </div>
            <div>
              <label htmlFor="radio"> Private</label>
              <input type="radio" {...register('type', { required: 'Ce champs est requis' })} value="private" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button type="submit" className="focus:outline-none w-1/2  bg-green-500 break-words  border border-green-500 rounded-full">
              Créer le Repo
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <button className="mt-3 w-1/2 border border-red-500 bg-red-500 text-white rounded-full " onClick={() => setShowForm(false)}>
            Annuler
          </button>
        </div>
      </div>
    </Dialog>
  );
}
