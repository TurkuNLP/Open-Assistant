import { Stack } from "@chakra-ui/react";
import { PolicyChapterCard } from "src/components/PolicyCards/PolicyChapterCard";
import { PolicySectionCard } from "src/components/PolicyCards/PolicySectionCard";

// WEB-ADMIN! Lisää privacy policy url kohtaan 5.1

const TermsData = [
  {
    number: "1",
    title: "Soveltamisala, muutokset",
    desc: "",
    sections: [
      {
        number: "1.1",
        title: "",
        desc: `TurkuNLP, Turun yliopisto, Vesilinnantie 3, 20014 Turku, Suomi (jäljempänä 'TurkuNLP') ylläpitää verkkoportaalia, jolla voidaan tuottaa Avoin Assistentti-niminen koneoppimismalli yleisön tarjoamien tietojen avulla.`,
      },
      {
        number: "1.2",
        title: "",
        desc: "Nämä käyttöehdot säätelevät portaalin käyttäjien ja TurkuNLP:n välistä käyttäjäsuhdetta.",
      },
      {
        number: "1.3",
        title: "",
        desc: "TurkuNLP pidättää oikeuden muuttaa näitä käyttöehtoja milloin tahansa, myös jo rekisteröityjen henkilöiden osalta, jos se on tarpeen lainmuutosten, lainkäyttöalueen muutosten, taloudellisten olosuhteiden muutosten tai myöhemmin ilmenevien puutteiden vuoksi. Käyttäjälle ilmoitetaan tällaisista muutoksista hyvissä ajoin sähköpostitse. Käyttäjällä on mahdollisuus vastustaa muutoksia 14 päivän ajan tämän sähköpostin vastaanottamisesta. Jos käyttäjä ei vastusta muutoksia ja jatkaa portaalin käyttöä vastalauseajan päättymisen jälkeen, muutokset katsotaan hyväksytyiksi määräajan päättymisestä alkaen. Jos käyttäjä vastustaa muutoksia kahden viikon määräajan kuluessa, TurkuNLP:llä on oikeus sulkea portaali käyttäjältä. Käyttäjälle ilmoitetaan näistä vaikutuksista sähköpostitse.",
      },
    ],
  },
  {
    number: "2",
    title: "Käyttökohde, palvelun saatavuus",
    desc: "",
    sections: [
      {
        number: "2.1",
        title: "",
        desc: "Portaali toimii alustana, jonka avulla voidaan luoda tietoja vuorovaikutteisen agentin kouluttamiseksi tieteellisiin tarkoituksiin. Kaikkea palvelun kautta luotua tekstiä ja kehotuksia käytetään tieteellisiin tarkoituksiin, erityisesti tekoälyn optimointiin.",
      },
      {
        number: "2.2",
        title: "",
        desc: "Tekstien syöttäminen portaaliin ja tekoälyn suorittama tekstin tuottaminen portaalissa eivät johda tekijänoikeudella suojattujen teosten syntymiseen. Käyttäjällä, joka on syöttänyt tekstin tekstin tuottamista varten, ei ole yksinoikeutta käyttää tuotettua tekstiä eikä tekijänoikeuksia siihen.",
      },
      {
        number: "2.3",
        title: "",
        desc: "TurkuNLP pyrkii varmistamaan, että portaalia voidaan käyttää mahdollisimman keskeytyksettä. Portaalin käyttöön ei kuitenkaan voi kohdistua oikeudellisia vaatimuksia. TurkuNLP pidättää oikeuden harkintansa mukaan muuttaa portaalia milloin tahansa ja ilman ennakkoilmoitusta, lopettaa sen toiminnan tai sulkea yksittäiset käyttäjät sen käytön ulkopuolelle. Lisäksi ei voida poissulkea mahdollisuutta, että tilapäisiä rajoituksia tai keskeytyksiä voi esiintyä teknisten vikojen vuoksi (kuten sähköntoimituksen keskeytyminen, laitteisto- ja ohjelmistovirheet ja tekniset ongelmat tietoliikenteessä).",
      },
    ],
  },
  {
    number: "3",
    title: "Käyttäjän velvollisuudet",
    desc: "",
    sections: [
      {
        number: "3.1",
        title: "",
        desc: "Käyttäjä saa käyttää portaalia vain aiottuun tarkoitukseen. Käyttäjä ei saa väärinkäyttää portaalia. Käyttäjä sitoutuu olemaan tuottamatta tekstiä, joka rikkoo rikoslakia, nuorisonsuojelusäännöksiä tai seuraavien maiden voimassa olevia lakeja: Suomi ja käyttäjän asuinpaikka. Erityisesti on kiellettyä syöttää tekstejä, jotka johtavat pornografisen, väkivaltaa ylistävän tai pedoseksuaalisen sisällön ja/tai kolmansien osapuolten henkilökohtaisia oikeuksia loukkaavan sisällön luomiseen. TurkuNLP pidättää itsellään oikeuden tehdä rikosilmoitus toimivaltaisille viranomaisille, jos rikkomuksia tapahtuu.",
      },
      {
        number: "3.2",
        title: "",
        desc: "Käyttäjä sitoutuu olemaan käyttämättä portaalin käytön yhteydessä ohjelmia, algoritmeja tai muita ohjelmistoja, jotka voivat häiritä portaalin toimintaa. Käyttäjä ei myöskään saa ryhtyä mihinkään toimenpiteisiin, jotka voivat aiheuttaa kohtuutonta tai liiallista kuormitusta portaalin infrastruktuurille tai häiritä sitä.",
      },
      {
        number: "3.3",
        title: "",
        desc: "Jos käyttäjä havaitsee portaalissa ilmeisiä virheitä, jotka voivat johtaa portaalin tai sen sisällön väärinkäyttöön, käyttäjä on velvollinen ilmoittamaan virheestä TurkuNLP:lle viipymättä.",
      },
      {
        number: "3.4",
        title: "",
        desc: "Näiden käyttöehtojen vastaisten tietojen käyttö, jakelu, tallentaminen, välittäminen, muokkaaminen ja/tai muu käyttö on kielletty.",
      },
    ],
  },
  {
    number: "4",
    title: "Vastuu",
    desc: "",
    sections: [
      {
        number: "4.1",
        title: "",
        desc: "TurkuNLP ei ota vastuuta sisällön tarkkuudesta, täydellisyydestä, luotettavuudesta, ajantasaisuudesta ja käytettävyydestä.",
      },
      {
        number: "4.2",
        title: "",
        desc: "TurkuNLP on rajoituksetta vastuussa tahallisesta tai törkeästä huolimattomuudesta. Vähäisen huolimattomuuden tapauksessa TurkuNLP on vastuussa vain vahingosta, joka aiheutuu hengen, ruumiin tai terveyden loukkaamisesta tai olennaisesta sopimusvelvoitteesta (velvoite, jonka täyttäminen mahdollistaa ensisijaisesti sopimuksen asianmukaisen täyttämisen ja jonka noudattamiseen sopimuskumppani säännöllisesti luottaa ja voi luottaa).",
      },
      {
        number: "4.3",
        title: "",
        desc: "Jos olennaisten sopimusvelvoitteiden rikkominen johtuu vähäisestä huolimattomuudesta, TurkuNLP:n vastuu rajoittuu ennakoitavissa olevan, tyypillisesti aiheutuvan vahingon määrään. Muilta osin vastuu ei ole voimassa.",
      },
      {
        number: "4.4",
        title: "",
        desc: "Edellä mainittuja vastuunrajoituksia sovelletaan myös TurkuNLP:n laillisiin edustajiin ja sijaisiin.",
      },
      {
        number: "4.5",
        title: "",
        desc: "TurkuNLP ei ole vastuussa käyttäjän tietojen menetyksestä. Käyttäjä on yksin vastuussa tietojensa turvallisesta säilyttämisestä.",
      },
      {
        number: "4.6",
        title: "",
        desc: "TurkuNLP ei ole vastuussa mistään vahingoista, joita käyttäjälle aiheutuu näiden käyttöehtojen rikkomisesta.",
      },
      {
        number: "4.7",
        title: "",
        desc: "TurkuNLP ei ole vastuussa portaalissa tuotetun sisällön käytöstä, joka on tuotettu portaalin ulkopuolisella tekstinsyötöllä. Erityisesti TurkuNLP ei ole vastuussa mistään vahingoista, joita käyttäjälle aiheutuu tekijänoikeuksien tai yksinoikeuksien haltuunotosta.",
      },
    ],
  },
  {
    number: "5",
    title: "Tietosuoja",
    desc: "",
    sections: [
      {
        number: "5.1",
        title: "",
        desc: "TurkuNLP käsittelee käyttäjien henkilötietoja tietosuojalainsäädännön säännösten mukaisesti. Yksityiskohtaiset tiedot löytyvät tietosuojaselosteesta, joka on saatavilla osoitteessa: /privacy-policy.",
      },
      {
        number: "5.2",
        title: "",
        desc: "Käyttäjä hyväksyy nimenomaisesti sen, että hänen ja TurkuNLP:n välisen käyttäjäsuhteen puitteissa tapahtuva viestintä voi tapahtua myös salaamattomien sähköpostiviestien välityksellä. Käyttäjä on tietoinen siitä, että salaamattomat sähköpostiviestit tarjoavat vain rajoitetun turvallisuuden ja luottamuksellisuuden.",
      },
    ],
  },
  {
    number: "6",
    title: "Loppusäännökset",
    desc: "",
    sections: [
      {
        number: "6.1",
        title: "",
        desc: "Sopimussuhteeseen sovelletaan yksinomaan Suomen lakia, lukuun ottamatta YK:n yleissopimusta kansainvälistä tavaran kauppaa koskevista sopimuksista.",
      },
      {
        number: "6.2",
        title: "",
        desc: "Jos näiden yleisten sopimusehtojen yksittäiset määräykset, mukaan lukien tämä määräys, ovat tai tulevat kokonaan tai osittain pätemättömiksi, se ei vaikuta muiden määräysten pätevyyteen. Pätemättömät tai puuttuvat määräykset korvataan vastaavilla lakisääteisillä määräyksillä.",
      },
      {
        number: "6.3",
        title: "",
        desc: "Jos asiakas on kauppias, julkisoikeudellinen oikeushenkilö tai julkisoikeudellinen erityisrahasto, oikeuspaikkana kaikissa näiden käyttöehtojen nojalla tehdyistä sopimuksista johtuvissa ja niihin liittyvissä riita-asioissa on TurkuNLP:n kotipaikka.",
      },
    ],
  },
];

export const TermsOfService = () => (
  <Stack spacing="8">
    {TermsData.map((chapter, chapterIndex) => (
      <PolicyChapterCard key={chapterIndex} chapter={chapter}>
        {chapter.sections && chapter.sections.length
          ? chapter.sections.map((section, sectionIndex) => <PolicySectionCard key={sectionIndex} section={section} />)
          : ""}
      </PolicyChapterCard>
    ))}
  </Stack>
);