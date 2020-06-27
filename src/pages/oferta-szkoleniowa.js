import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/for-professionals/Title'

import topImage from '../img/oferta-top.png'
import bottomImage from '../img/oferta-bottom.png'

const Container = styled.div`
  max-width: 80%;
  margin: auto;

  @media screen and (min-width: 900px) {
      max-width: 90%;
    }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`

const StyledTitleParagraph = styled.p`
  text-transform: uppercase;
  padding: 8px 0px;
  font-weight: bold;
`

const StyledParagraph = styled.p`
  padding: 8px 0px;
`

const StyledDiv = styled.div`
  width: 70%;
  margin: auto;
`

export default () => (
  <Layout pageTitle='Oferta szkoleniowa'>
    <Container>
      <Title>AKADEMIA KOLORU</Title>
      <StyledTitleParagraph>INNOWACYJNY, CZTEROETAPOWY PROGRAM SZKOLENIOWY,</StyledTitleParagraph>
      <StyledParagraph>który odsłoni przed Tobą wszelkie tajniki koloryzacji. Zyskasz biegłość w sztuce, która da Ci przyjemność oferowania swoim klientkom modnych koloryzacji, współgrających z ich osobowością i stylem. Jako mistrz koloryzacji będziesz ekspertem, do którego chętnie wrócą zadowolone klientki.</StyledParagraph>
      <StyledDiv>
        <img alt='' src={topImage} />
      </StyledDiv>
      <StyledTitleParagraph>AKADEMIA KOLORU — POMOC W OSIĄGNIĘCIU MISTRZOSTWA W KOLORYZACJ</StyledTitleParagraph>
      <StyledParagraph>Poszczególne etapy szkoleń zostały skomponowane tak, abyś poznał dogłębnie materiał, na którym pracujesz, czyli włos. Następny krok to wiedza o produktach, ich właściwościach i reakcjach jakie wywołują we włosie oraz umiejętność kontrolowania procesów chemicznych. Kolejny krok to między innymi zdobycie umiejętności przeprowadzania anaizy kolorystycznej. Pomoże Ci to zdefiniować potrzeby klienta i stworzyć koloryzację idealnie dobraną do typu urody. Dzięki doświadczeniu wszelkich trudnych przypadków koloryzacji zyskasz pewność radzenia sobie z wyzwaniami w salonie.</StyledParagraph>
      <StyledParagraph>Kolejny krok to inspiracja, poznanie światowych trendów i umiejętność wykorzystania ich w codziennej pracy w salonie lub przy sesjach zdjęciowych. Praca zaawansowanymi technikami, które rozwiną Twoje umiejętności kreatywne, pozwolą odkryć własny styl i swobodnie go wyrażać.</StyledParagraph>
      <StyledTitleParagraph>ZAAWANSOWANA WIEDZA PODANA W PRZYSTĘPNY SPOSÓB</StyledTitleParagraph>
      <StyledParagraph>Nowatorskie, niestandardowe narzędzia edukacyjne w przyjazny i łatwy sposób pozwolą zrozumieć zawiłe tematy. Uczestnik szkolenia otrzyma pomocnicze materiały edukacyjne. Dla każdego etapu szkolenia zaprojektowany jest oddzielny zeszyt edukacyjny, w którym uczestnicy znajdą kluczowe informacje na dany temat, a także mogą prowadzić notatki. Specjalnie zaprojektowany segregator pozwoli w usystematyzowany sposób przechowywać zeszyty z poszczególnych etapów szkoleń. Materiały pomocnicze otrzymane na szkoleniach będą pomocne także w codziennej pracy w salonie.</StyledParagraph>
      <StyledTitleParagraph>SZKOLENIA PRZYGOTOWANE WE WSPÓŁPRACY Z EKSPERTAMI</StyledTitleParagraph>
      <StyledParagraph>Treść i forma szkoleń została opracowa- na przy współpracy Instruktorów Studia Wella z Małgorzatą Babicz — Dyrektor Artystyczny Studia. Moduły wymagające specyficznej wiedzy na danym polu zostały przygotowane we współpracy z ekspertami w dziedzinie chemii, psychologii, stylizacji, mody, fotografii.</StyledParagraph>
      <Title>AKADEMIA KREOWANIA WIZERUNKU</Title>
      <StyledTitleParagraph>Akademia Kreowania Wizerunku</StyledTitleParagraph>
      <StyledParagraph>To trzyetapowe szkolenie, dzięki któremu zobaczysz to, czego nie dostrzegałeś, usłyszysz to, czego nie słyszałeś, poczujesz to, co czuje Twój klient, stworzysz idealne dla niego stylizacje. Szkolenie to pozwoli Ci osiągnąć perfekcję w pracy z klientem, a każda usługa czyli pielęgnacja, strzyżenie i stylizacja będą idealnie dopasowane zarówno do osobowości, stylu jak również potrzeb klienta.</StyledParagraph>
      <StyledParagraph>Jeśli chcesz podkreślić swój indywidualizm jako stylista, dołącz do naszego projektu i zdobądź tytuł KREATORA WIZERUNKU!</StyledParagraph>
      <StyledParagraph>Treść i forma szkoleń została opracowana przy współpracy Instruktorów Studia Wella z Małgorzatą i Pawłem Babicz z Akademii Babicz. Moduły wymagające specjalistycznej wiedzy na danym polu zostały przygotowane we współpracy z ekspertami w dziedzinie biochemii, rehabilitacji, masażu, medycyny wschodu, stylizacji, geometrii przestrzennej oraz rzeźby.</StyledParagraph>
      <img src={bottomImage} alt='' />
    </Container>
  </Layout>
)