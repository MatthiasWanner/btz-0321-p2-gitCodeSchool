import { useContext, useEffect } from 'react';
import { ModalContext } from '../components/Contexts';
import { useHistory } from 'react-router-dom';

export function useErrorModal(error) {
  const { setModal, setModalOpen } = useContext(ModalContext);
  const history = useHistory();
  error = error?.toJSON()?.message || '';

  useEffect(() => {
    if (error?.endsWith('403')) {
      setModal({
        title: 'Erreur imprévue',
        content: `Trop de requêtes faites a Github. Veuillez vous connecter pour enlever ce message.`,
        buttons: [
          {
            content: 'Aller se connecter',
            color: 'bg-red-300 hover:bg-red-600',
            onClick: () => {
              history.push('/');
            },
          },
        ],
        status: 'error',
      });
      setModalOpen(true);
    } else if (error) {
      setModal({
        title: 'Erreur imprévue',
        content: `Erreur lors de la requête à Github`,
        buttons: [
          {
            content: 'Recharger la page',
            color: 'bg-red-300 hover:bg-red-600',
            onClick: () => {
              history.go(0);
            },
          },
        ],
        status: 'error',
      });
      setModalOpen(true);
    }
  }, [error]);
}
