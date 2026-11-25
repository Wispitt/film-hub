import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import { getImage } from '../../utils/baseUrlImage';
import {
  Backgound,
  Info,
  MovieImage,
  Contant,
  ContainerButtons
} from './styles';

export const BasePage = ({
  mainData,
  secondData,
  thirdData,
  fourthData,
  fifthData,
  title
}) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {mainData && (
        <Backgound $urlImage={getImage(mainData.backdrop_path)}>
          {showModal && <Modal movie={mainData} setShowModal={setShowModal} />}
          <Contant>
            <Info>
              <h1> {mainData.title} </h1>
              <p> {mainData.overview} </p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`/detail/${mainData.id}`)}
                  buttonPrimary
                >
                  Assistir agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assistir o Trailer
                </Button>
              </ContainerButtons>
            </Info>

            <MovieImage>
              <img src={getImage(mainData.poster_path)} alt="capa-do-filme" />
            </MovieImage>
          </Contant>
        </Backgound>
      )}

      {secondData && <Slider info={secondData} title={title.firstTitle} />}
      {thirdData && <Slider info={thirdData} title={title.secondTitle} />}
      {fourthData && <Slider info={fourthData} title={title.thirdTitle} />}
      {fifthData && <Slider info={fifthData} title={title.fourthTitle} />}
    </>
  );
};
