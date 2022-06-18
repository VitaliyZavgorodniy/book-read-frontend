import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import Media from 'react-media';

import { AiOutlinePlus } from 'react-icons/ai';

import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook';
import Container from 'components/UI-kit/containers/Container';
import BooksList from 'components/BooksList';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

import Popup from 'hoc/Popup';

const HomePage = ({
  totalBooks,
  completedBooks,
  readingBooks,
  pendingBooks,
  onLibraryLoad,
}) => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    onLibraryLoad();
    // eslint-disable-next-line
  }, []);

  const handleModal = () => setOpen(!isOpen);

  const renderModal = () => {
    if (!isOpen) return null;

    return (
      <Popup onClose={handleModal}>
        <FormAddBook />
      </Popup>
    );
  };

  return (
    <Container>
      <Media query={breakpoints.maxTablet} render={renderModal} />
      <Media query={breakpoints.tablet} render={() => <FormAddBook />} />

      {totalBooks ? (
        <ContainerLibrary>
          {completedBooks.length ? (
            <BooksList title="Already read" list={completedBooks} />
          ) : null}
          {readingBooks.length ? (
            <BooksList title="Reading now" list={readingBooks} />
          ) : null}
          {pendingBooks.length ? (
            <BooksList title="Going to read" list={pendingBooks} />
          ) : null}
        </ContainerLibrary>
      ) : (
        <ContainerIntro>
          <InfoBlockIntro />
        </ContainerIntro>
      )}

      {totalBooks ? (
        <ContainerButton>
          <CommonButton
            type="button"
            title="My training"
            variant="accent"
            onClick={() => navigate('/training')}
          />
        </ContainerButton>
      ) : null}

      <Media
        query={breakpoints.maxTablet}
        render={() => (
          <ContainerAddButton>
            <ButtonAdd onClick={handleModal}>
              <Add />
            </ButtonAdd>
          </ContainerAddButton>
        )}
      />
    </Container>
  );
};

const ContainerLibrary = styled.div`
  padding-top: 0;

  @media ${breakpoints.tablet} {
    padding-top: 40px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 80px;
  }
`;

const ContainerIntro = styled.div`
  padding-top: 64px;

  @media ${breakpoints.tablet} {
    padding-top: 40px;
  }
`;

const ContainerButton = styled.div`
  width: 130px;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 128px;

  @media ${breakpoints.tablet} {
    width: 200px;
    padding-top: 40px;
    padding-bottom: 299px;
  }
  @media ${breakpoints.desktop} {
    padding-bottom: 245px;
  }
`;

const ContainerAddButton = styled.div`
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
`;

const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};

  &:hover {
    cursor: pointer;
    box-shadow: ${(p) => p.theme.shadows.accent};
  }
`;

const Add = styled(AiOutlinePlus)`
  color: ${(p) => p.theme.colors.contrast};
  font-size: 22px;
  transition: ${(p) => p.theme.animations.primary} box-shadow;
`;

export default HomePage;
