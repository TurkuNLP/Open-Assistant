import { Box, Heading, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { PolicyChapterCard } from "src/components/PolicyCards/PolicyChapterCard";
import { PolicySectionCard } from "src/components/PolicyCards/PolicySectionCard";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const PrivacyPolicy = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.800");
  const { t } = useTranslation(["common"]);

  const PrivacyPolicyData = [
    {
      number: "1",
      title: "Vastuullinen rekisterinpitäjä",
      desc: "TurkuNLP, Teknillinen tiedekunta, 20014 Turun yliopisto, Suomi",
    },
    {
      number: "2",
      title: "Henkilötiedot",
      desc: "Tässä osiossa kerromme, miten käsittelemme kerättyjä henkilötietoja.",
      sections: [
        {
          number: "2.1",
          title: "Keräämämme tiedot",
          desc: "Tunnistettavien tietojen suhteen keräämme tarkoituksellisesti sinulta ainoastaan sähköpostiosoitteesi rekisteröitymisen yhteydessä.",
        },
        {
          number: "2.2",
          title: "Käyttötarkoitus",
          desc: "Sähköpostiosoitettasi käytetään käyttäjäsi tunnistamiseen verkkosivustollamme sekä kommunikointiin kanssasi, esimerkiksi tilin hallinnointiin ja turvallisuusilmoituksiin liittyen. Tämä mahdollistaa myös porttikiellon antamisen tai viestien suodattamisen sellaisten käyttäjien kohdalla jotka väärinkäyttävät verkkosivustoamme. Huomautamme, että vaikka et suorittaisi rekisteröitymisprosessia loppuun, jää sähköpostiosoitteesi kuitenkin teknisistä syistä tietokantaamme.",
        },
        {
          number: "2.3",
          title: "Tietojen suojaaminen",
          desc: "Takaamme, että tunnistettavia tietoja käsitellään luottamuksellisesti ja niitä käytetään ainoastaan edellä mainittuihin tarkoituksiin. Emme myy tai muutoin jaa tunnistettavia tietoja kolmansille osapuolille ilman käyttäjän selkeää suostumusta, ellei laki sitä edellytä.",
        },
        {
          number: "2.4",
          title: "Tietojen säilytys",
          desc: "Verkkosivustolla kerättyjä tietoja säilytetään Tieteen Tietotekniikan Keskus OY:n (CSC) ylläpitämien palvelimien virtuaalipalvelimilla Suomessa. Pääsy kerättyjä tietoja sisältäviin tietokantoihin on rajoitettu eikä niihin voi yhdistää suoraan julkisen verkon kautta. Säilytämme käyttäjätietoja sisältäviä tietoja verkkosivuston olemassaolon ajan, ei kuitenkaan pidempää aikaa kuin 5 vuotta käyttäjän rekisteröitymisajankohdasta. Verkkosivuston käyttötarkoituksen mukaisesti käyttäjätietoja sisältämättömät tiedot, kuten kirjoittamasi viestit ja tekemäsi arvioinnit, julkaistaan projektin päätyttyä. Tämän ajankohdan jälkeen keräämistämme tiedoista poistetaan kaikki sivuston käyttäjien luonnolliseen henkilöön liitettävissä olevat tiedot, kuten sähköpostiosoitteet ja käyttäjänimet. Tällöin käyttäjän verkkosivustolla kirjoittamat viestit ja tehdyt arvioinnit voidaan yksilöidä ainoastaan satunnaisen kirjain- ja numerosarjan perusteella.",
        },
      ],
    },
    {
      number: "3",
      title: "Lapset ja nuoret",
      desc: "Avoin Avustaja on lähtökohtaisesti tarkoitettu täysi-ikäisten käytettäväksi. Alle 16-vuotiaat lapset ja nuoret eivät saa rekisteröityä verkkosivustollemme tai muutoin välittää meille henkilötietoja ilman heidän vanhempiensa tai huoltajiensa suostumusta. ",
    },
    {
      number: "4",
      title: "Tietosuojaoikeudet",
      desc: "Tässä osiossa kerrotaan käyttäjän tietosuojaoikeuksista. Alapuolella mainitut oikeudet ovat lyhennettyjä versioita, jotka perustuvat varsinaiseen EU:n yleiseen tietosuoja-asetukseen. Jos tässä mainittujen oikeuksien ja yleisen tietosuoja-asetuksen välillä on ristiriitoja, sovelletaan jälkimmäistä. Myös oikeuksiin liittyvät ehdot on määritelty tarkemmin yleisessä tietosuoja-asetuksessa.",
      sections: [
        {
          number: "4.1",
          title: "Oikeus tutustua henkilötietoihin ja saada tietoa niiden käsittelystä",
          desc: "Sinulla on oikeus pyytää TurkuNLP:tä toimittamaan kopiot sinusta keräämistämme henkilötiedoista, ja pyytää tietoja henkilötietojesi käsittelyyn liittyen.",
        },
        {
          number: "4.2",
          title: "Oikeus oikaista tietoja",
          desc: "Sinulla on oikeus pyytää TurkuNLP:tä oikaisemaan mitä tahansa sinua koskevia tietoja joiden et usko olevan paikkansapitäviä, tai täydentämään tietoja jotka ovat puutteellisia.",
        },
        {
          number: "4.3",
          title: "Oikeus poistaa tiedot ja tulla unohdetuksi",
          desc: "Sinulla on oikeus pyytää TurkuNLP:tä poistamaan kaikki sinuun liittyvät henkilökohtaiset tietosi.",
        },
        {
          number: "4.4",
          title: "Oikeus rajoittaa ja vastustaa tietojen käsittelyä",
          desc: "Sinulla on oikeus rajoittaa ja vastustaa TurkuNLP:tä sinun henkilötietojesi käsittelyssä.",
        },
        {
          number: "4.5",
          title: "Oikeus siirtää tiedot järjestelmästä toiseen",
          desc: "Sinulla on oikeus pyytää TurkuNLP:tä siirtämään sinusta keräämämme tiedot toiselle yritykselle/organisaatiolle tai suoraan sinulle.",
        },
        {
          number: "4.6",
          title: "Oikeus olla joutumatta automaattisen päätöksenteon kohteeksi",
          desc: "Sinulla on oikeus pyytää TurkuNLP:tä vaatimaan ihmistä käsittelemään sinua koskevia päätöksiä.",
        },
        {
          number: "4.7",
          title: "Oikeus tehokkaisiin oikeussuojakeinoihin",
          desc: "Sinulla on oikeus tehokkaisiin oikeussuojakeinoihin, jos katsot, että yleiseen tietosuoja-asetukseen perustuvia oikeuksiasi on loukattu.",
        },
        {
          number: "4.8",
          title: "Oikeus peruuttaa suostumus",
          desc: "Sinulla on oikeus peruuttaa suostumuksesi tähän tietosuojaselosteeseen.",
        },
      ],
    },
    {
      number: "5",
      title: "Evästeet",
      desc: "",
      sections: [
        {
          number: "5.1",
          title: "Yleistä evästeistä",
          desc: "Evästeet ovat pieniä tekstitiedostoja, joita verkkosivustot tallentavat tietokoneelle tai muulle laitteelle, kun sivustolla käydään. Evästeet mahdollistavat erilaisten toimintojen toteuttamisen, kuten esimerkiksi käyttäjätunnuksen, valitun kielen, fonttikoon ja erilaisten näyttöasetusten muistamisen. Näin tallennetut tiedot tarvitsee antaa vain kerran eikä aina erikseen sivustolla käydessä tai sivuja selailtaessa. Evästeistä voit lukea lisää esimerkiksi Kyberturvallisuuskeskuksen verkkosivuilta: https://www.kyberturvallisuuskeskus.fi/fi/toimintamme/saantely-ja-valvonta/evasteet",
        },
        {
          number: "5.2",
          title: "Avoimen Avustajan evästeet",
          desc: "Käytämme ainoastaan toiminnallisia evästeitä. Näiden evästeiden avulla käyttäjäsi pysyy kirjautuneena verkkosivustollamme ja tämän valitsemat asetukset pysyvät samoina selaimen sulkemisen jälkeen.",
        },
        {
          number: "5.3",
          title: "Evästeiden hallinnointi",
          desc: "Käyttäjä voi asettaa selaimen hylkäämään kaikki evästeet, ja halutessaan myös poistaa kaikki jo olemassaolevat evästeet. Näiden toimenpiteiden suoritustavat riippuvat käytössä olevasta selaimesta, jolloin ohjeistuksen voi löytää selaimen kehittäjän tarjoamista resursseista. Huomaathan, että sivustomme ei välttämättä toimi laitteellasi evästeet hylättäessä.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{`${t("common:privacy_policy")} - ${t("common:title")}`}</title>
        <meta name="description" content="Avoimen Avustajan tietosuojaseloste" />
      </Head>
      <Box p="6" className="oa-basic-theme">
        <Box className="max-w-4xl mx-auto">
          <Stack spacing="6" mb="6">
            <Heading as="h1" size="xl" color="blue.500">
              {`${t("common:title")} - ${t("common:privacy_policy")}`}
            </Heading>

            <Box bg={backgroundColor} p="6" pt="4" borderRadius="xl" shadow="base">
              <Stack>
                <Heading as="h3" size="lg">
                  Yleiskatsaus
                </Heading>
                <Text>
                  Avoin Avustaja on Turun yliopiston teknillisessä tiedekunnassa toimivan TurkuNLP-tutkimusryhmän
                  ylläpitämä verkkosivusto. Tämä tietosuojaseloste kertoo sinulle, mitä henkilötietoja käsittelemme ja
                  mihin tarkoitukseen, sekä näihin tietoihin liittyvistä oikeuksistasi. TurkuNLP ylläpitää jatkuvasti
                  Avoimen Avustajan tietosuojaselostetta sekä päivittää sitä tarpeen vaatiessa. Tämä tietosuojaseloste
                  on päivitetty viimeksi 22. maaliskuuta 2024.
                </Text>
              </Stack>
            </Box>
          </Stack>

          <Stack spacing="8">
            {PrivacyPolicyData.map((chapter, chapterIndex) => (
              <PolicyChapterCard key={chapterIndex} chapter={chapter}>
                {chapter.sections && chapter.sections.length
                  ? chapter.sections.map((section, sectionIndex) => (
                      <PolicySectionCard key={sectionIndex} section={section} />
                    ))
                  : ""}
              </PolicyChapterCard>
            ))}
          </Stack>

          <Box bg={backgroundColor} p="6" pt="4" mt="8" borderRadius="xl" shadow="base">
            <Stack>
              <Heading as="h3" size="lg">
                Yhteydenotto
              </Heading>
              <Text>
                Jos sinulla on kysyttävää tietosuojaselosteestamme, teistä säilyttämistämme tiedoista, tai haluat
                harjoittaa jotain EU:n yleisen tietosuoja-asetuksen (GDPR) sekä muun lainsäädännön määrittelemistä
                yksilönoikeuksista, voit ottaa meihin yhteyttä alla olevia kanavia käyttäen:
              </Text>
              <Text fontWeight="bold">
                Sähköpostiosoite:{" "}
                <Link href="mailto:turkunlp.oasst.auth@gmail.com" color="blue.500">
                  turkunlp.oasst.auth@gmail.com
                </Link>
              </Text>
              <Text fontWeight="bold">Postiosoite: TurkuNLP, Teknillinen tiedekunta, 20014 Turun yliopisto, Suomi</Text>
              <Text>
                Kun otat meihin yhteyttä, tallennamme kyselysi ja siihen liittyvät henkilötiedot pyyntösi käsittelyä
                varten. Näitä tietoja ei luovuteta eteenpäin ilman suostumustasi. Tietojasi käytetään ainoastaan
                pyyntösi käsittelyyn ja siihen vastaamiseen. Lopullisen käsittelyn jälkeen annetuista tiedoistasi
                poistetaan kaikki luonnolliseen henkilöön viittaavat tiedot, tai kaikki antamasi tiedot poistetaan
                välittömästi, ellei meitä sido lakisääteinen tietojen säilytysaika. Vastaamme pyyntöösi kuukauden
                sisällä sen lähettämisajankohdasta.
              </Text>
              <Text>
                Huomioithan, että jos pyyntösi on ilmeisen perusteeton tai kohtuuton, voimme periä sen toteuttamisesta
                kohtuullisen maksun, tai kieltäytyä toteuttamasta pyydettyä toimenpidettä. Lisäksi meillä on oikeus sekä
                velvollisuus tarkistaa henkilöllisyytesi ennen pyynnön käsittelyä.
              </Text>
            </Stack>
          </Box>
          <Box bg={backgroundColor} p="6" pt="4" mt="8" borderRadius="xl" shadow="base">
            <Stack>
              <Heading as="h3" size="lg">
                Viranomaisyhteys
              </Heading>
              <Text>
                Jos haluat tehdä virallisen valituksen tai jos sinusta tuntuu, että organisaatiomme ei ole käsitellyt
                asiaasi tyydyttävällä tavalla, sinulla on oikeus ottaa yhteyttä tietosuojavaltuutetun toimistoon, jonka
                ajankohtaiset yhteystiedot löytyvät osoitteesta{" "}
                <Link href="https://tietosuoja.fi/" className="font-bold" color="blue.500">
                  https://tietosuoja.fi/
                </Link>
                .
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
