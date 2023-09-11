import { Box, Heading, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { PolicyChapterCard } from "src/components/PolicyCards/PolicyChapterCard";
import { PolicySectionCard } from "src/components/PolicyCards/PolicySectionCard";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const PrivacyPolicy = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.800");

  const PrivacyPolicyData = [
    {
      number: "1",
      title: "Määritelmät",
      desc: "Laki edellyttää, että henkilötietoja käsitellään laillisesti, vilpittömässä mielessä ja tavalla, jonka asianomaiset henkilöt voivat ymmärtää ('laillisuus, oikeudenmukainen käsittely, avoimuus'). Tätä varten ilmoitamme täten Euroopan yleisen tietosuoja-asetuksen (GDPR) ja Suomen tietosuojalain yksittäisistä oikeudellisista määritelmistä, joita käytetään myös näissä tietosuojasäännöissä",
      sections: [
        {
          number: "1.1",
          title: "Henkilötiedot",
          desc: "'Henkilötiedoilla' tarkoitetaan kaikkia tunnistettuun tai tunnistettavissa olevaan luonnolliseen henkilöön (jäljempänä 'rekisteröity') liittyviä tietoja. Luonnollinen henkilö katsotaan tunnistettavaksi, jos hänet voidaan suoraan tai välillisesti tunnistaa, erityisesti yhdistämällä hänet tunnistetietoihin, kuten nimeen, tunnusnumeroon, sijaintitietoihin, verkkotunnisteeseen tai yhteen tai useampaan erityispiirteeseen, jotka ilmentävät luonnollisen henkilön fyysistä, fysiologista, geneettistä, henkistä, taloudellista, kulttuurista tai sosiaalista identiteettiä",
        },
        {
          number: "1.2",
          title: "Käsittelyn rajoittaminen",
          desc: "'Käsittelyn rajoittamisella' tarkoitetaan tallennettujen henkilötietojen merkitsemistä siten, että niiden käsittelyä rajoitetaan tulevaisuudessa.",
        },
        {
          number: "1.3",
          title: "Profilointi",
          desc: "'Profiloinnilla' tarkoitetaan kaikenlaista henkilötietojen automaattista käsittelyä, jossa henkilötietoja käytetään tiettyjen luonnolliseen henkilöön liittyvien henkilökohtaisten näkökohtien arvioimiseen, erityisesti luonnollisen henkilön työsuoritukseen, taloudelliseen tilanteeseen, terveyteen, henkilökohtaisiin mieltymyksiin, kiinnostuksen kohteisiin, luotettavuuteen, käyttäytymiseen, sijaintiin tai liikkumiseen liittyvien näkökohtien analysoimiseksi tai ennustamiseksi.",
        },
        {
          number: "1.4",
          title: "Pseudonymisointi",
          desc: "'Pseudonymisoinnilla' tarkoitetaan henkilötietojen käsittelyä siten, että henkilötietoja ei voida enää yhdistää tiettyyn rekisteröityyn ilman lisätietojen käyttöä edellyttäen, että tällaiset lisätiedot säilytetään erillään ja että niihin sovelletaan teknisiä ja organisatorisia toimenpiteitä sen varmistamiseksi, että henkilötietoja ei voida yhdistää tunnistettuun tai tunnistettavissa olevaan luonnolliseen henkilöön.",
        },
        {
          number: "1.5",
          title: "Rekisteröintijärjestelmä",
          desc: "'Henkilötietojen käsittelijällä' tarkoitetaan luonnollista henkilöä tai oikeushenkilöä, viranomaista, virastoa tai muuta elintä, joka käsittelee henkilötietoja rekisterinpitäjän puolesta.",
        },
        {
          number: "1.6",
          title: "Rekisterinpitäjä",
          desc: "'Rekisterinpitäjällä' tarkoitetaan luonnollista henkilöä tai oikeushenkilöä, viranomaista, virastoa tai muuta elintä, joka yksin tai yhdessä muiden kanssa määrittelee henkilötietojen käsittelyn tarkoitukset ja keinot. Jos tällaisen käsittelyn tarkoitukset ja keinot määritetään Euroopan unionin tai jäsenvaltion lainsäädännössä, rekisterinpitäjästä tai sen nimeämistä koskevista erityisperusteista voidaan säätää Euroopan unionin tai jäsenvaltion lainsäädännössä.",
        },
        {
          number: "1.7",
          title: "Henkilötietojen käsittelijä",
          desc: "'Henkilötietojen käsittelijällä' tarkoitetaan luonnollista henkilöä tai oikeushenkilöä, viranomaista, virastoa tai muuta elintä, joka käsittelee henkilötietoja rekisterinpitäjän puolesta.",
        },
        {
          number: "1.8",
          title: "Vastaanottaja",
          desc: "'Vastaanottajalla' tarkoitetaan luonnollista henkilöä tai oikeushenkilöä, viranomaista, virastoa tai muuta elintä, jolle henkilötietoja luovutetaan, riippumatta siitä, onko kyseessä kolmas osapuoli vai ei. Vastaanottajina ei kuitenkaan pidetä viranomaisia, jotka voivat saada mahdollisesti henkilötietoja tietyn tutkimuksen yhteydessä Euroopan unionin tai jäsenvaltion lainsäädännön mukaisesti. Näiden viranomaisten on käsiteltävä kyseisiä tietoja käsittelyn tarkoituksen mukaisesti sovellettavien tietosuojasääntöjen mukaisesti.",
        },
        {
          number: "1.9",
          title: "Kolmas osapuoli",
          desc: "'Kolmannella osapuolella' tarkoitetaan luonnollista henkilöä tai oikeushenkilöä, viranomaista, virastoa tai muuta elintä kuin rekisteröityä, rekisterinpitäjää, henkilötietojen käsittelijää ja henkilöitä, joilla on rekisterinpitäjän tai henkilötietojen käsittelijän suorassa alaisuudessa lupa käsitellä henkilötietoja.",
        },
      ],
    },
    {
      number: "2",
      title: "Vastuullinen rekisterinpitäjä",
      desc: "Vastuullinen rekisterinpitäjä on: TurkuNLP, Turun yliopiston teknillinen tiedekunta, 20014 Turku, Suomi.",
      sections: [],
    },
    {
      number: "3",
      title: "Keräämämmë tiedot",
      desc: "Avoin Avustaja jäljittää tietoja seuraavissa olosuhteissa",
      sections: [
        {
          number: "3.1",
          title: "Verkkosivuston käyttäminen",
          desc: "Kun käyttäjä rekisteröi tilin verkkosivustolle, ja tallennamme yksityisesti rekisteröidyn käyttäjän yksilöllisen sähköpostin. Kun käyttäjä lähettää vastauksia, yhdistämme jokaisen lähetetyn vastauksen yksilölliseen pseudonyymiin tunnukseen.",
        },
      ],
    },
    {
      number: "4",
      title: "Yhteystiedot",
      desc: "Kun otat meihin yhteyttä sähköpostitse, puhelimitse tai faksilla, tallennamme kyselysi ja kaikki siitä johtuvat henkilötiedot pyyntösi käsittelyä varten. Emme luovuta näitä tietoja eteenpäin ilman suostumustasi. Näiden tietojen käsittely perustuu yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan 1 alakohdan b alakohtaan, jos tiedustelusi liittyy kanssamme tehdyn sopimuksen täyttämiseen tai on tarpeen sopimusta edeltävien toimenpiteiden toteuttamiseksi. Lisäksi käsittely perustuu yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan 1 alakohdan f alakohtaan, koska meillä on oikeutettu etu käsitellä meille lähetettyjä pyyntöjä tehokkaasti. Lisäksi meillä on yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan 1 alakohdan c alakohdan mukaan oikeus käsitellä edellä mainittuja tietoja, koska olemme oikeudellisesti velvollisia mahdollistamaan nopean sähköisen yhteydenpidon ja välittömän viestinnän. Tietojasi käytetään luonnollisesti vain tiukasti tarkoituksenmukaisesti ja ainoastaan pyyntösi käsittelyyn ja siihen vastaamiseen. Lopullisen käsittelyn jälkeen tietosi anonymisoidaan tai poistetaan välittömästi, ellei meitä sido lakisääteinen säilytysaika.",
      sections: [],
    },
    {
      number: "5",
      title: "Käsittelijät",
      desc: "Lähtökohtaisesti emme koskaan luovuta henkilötietojasi kolmansille osapuolille ilman nimenomaista suostumustasi. Kuten kaikki nykyaikaiset yritykset, teemme kuitenkin yhteistyötä tietojenkäsittelijöiden kanssa voidaksemme tarjota sinulle parasta mahdollista keskeytymätöntä palvelua. Kun teemme yhteistyötä ulkopuolisten palveluntarjoajien kanssa, suoritetaan säännöllistä tilausten käsittelyä yleisen tietosuoja-asetuksen 28 artiklan perusteella. Tätä varten teemme yhteistyökumppaneidemme kanssa asianmukaiset sopimukset tietojesi suojan takaamiseksi. Käytämme tietojesi käsittelyyn vain huolellisesti valittuja henkilötietojen käsittelijöitä. Ne ovat sidottuja ohjeisiimme, ja me valvomme niitä säännöllisesti. Annamme toimeksiannon vain sellaisille ulkopuolisille palveluntarjoajille, jotka ovat taanneet, että kaikki tietojenkäsittelyprosessit suoritetaan tietosuojasäännösten mukaisesti. Henkilötietojen vastaanottajia voivat olla webhotelliyritykset ja webhotellipalvelujen tarjoajat.",
      sections: [],
    },
    {
      number: "6",
      title: "Lapset ja nuoret",
      desc: "Lähtökohtaisesti tuotteemme on suunnattu aikuisille. Alle 16-vuotiaat lapset ja nuoret eivät saa välittää meille henkilötietoja ilman vanhempiensa tai huoltajiensa suostumusta.",
      sections: [],
    },
    {
      number: "7",
      title: "Sinun oikeutesi",
      desc: "Jos henkilötietojasi käsitellään meille antamasi suostumuksen perusteella, sinulla on oikeus peruuttaa suostumuksesi milloin tahansa. Suostumuksen peruuttaminen ei vaikuta suostumuksen perusteella suoritetun käsittelyn laillisuuteen peruuttamishetkeen saakka. Voit ottaa meihin yhteyttä milloin tahansa käyttääksesi oikeutta peruuttaa suostumuksesi.",
      sections: [
        {
          number: "7.1",
          title: "Oikeus vahvistukseen",
          desc: "Sinulla on oikeus pyytää rekisterinpitäjältä vahvistusta siitä, että käsittelemme sinua koskevia henkilötietoja. Voit pyytää tätä vahvistusta milloin tahansa yllä olevia yhteystietoja käyttäen.",
        },
        {
          number: "7.2",
          title: "Oikeus saada tietoja",
          desc: "Jos henkilötietoja käsitellään, voit milloin tahansa pyytää tietoja näistä henkilötiedoista ja seuraavia tietoja: käsittelyn tarkoitukset, käsiteltävien henkilötietojen luokat, vastaanottajat tai vastaanottajaryhmät, joille henkilötietoja on luovutettu tai luovutetaan, erityisesti jos vastaanottajat ovat kolmansissa maissa tai kansainvälisissä järjestöissä, jos mahdollista, suunnitellun säilytysajan, jonka henkilötietoja säilytetään, tai jos tämä ei ole mahdollista, perusteet, joiden perusteella tämä säilytysaika määritetään, oikeuden olemassaolo sinua koskevien henkilötietojen oikaisemiseen tai poistamiseen, tai rekisterinpitäjän suorittaman käsittelyn rajoittamista tai oikeutta vastustaa tällaista käsittelyä, oikeutta tehdä valitus valvontaviranomaiselle, jos henkilötietoja ei ole kerätty rekisteröidyltä itseltään, kaikkia saatavilla olevia tietoja tietojen lähteestä, automaattisen päätöksenteon, mukaan lukien profilointi, olemassaolo yleisen tietosuoja-asetuksen 22 artiklan 1 ja 4 kohdan mukaisesti ja ainakin näissä tapauksissa merkitykselliset tiedot kyseessä olevasta logiikasta ja tällaisen käsittelyn laajuudesta ja aiotusta vaikutuksesta rekisteröityyn. Jos henkilötietoja siirretään kolmanteen maahan tai kansainväliselle organisaatiolle, sinulla on oikeus saada tietoa GDPR:n 46 artiklan mukaisista asianmukaisista suojatoimista siirron yhteydessä. Toimitamme kopion henkilötiedoista, jotka ovat käsittelyn kohteena. Pyydetyistä lisäkopioista voimme periä kohtuullisen maksun, joka perustuu hallinnollisiin kustannuksiimme. Jos pyyntösi toimitetaan sähköisesti, tiedot on toimitettava sähköisessä vakiomuodossa, ellei toisin mainita. Oikeus saada kopio 3 kohdan mukaisesti ei vaikuta muiden oikeuksiin ja vapauksiin.",
        },
        {
          number: "7.3",
          title: "Oikeus tietojen oikaisemiseen",
          desc: "Sinulla on oikeus vaatia sinua koskevien virheellisten henkilötietojen välitöntä korjaamista. Ottaen huomioon käsittelyn tarkoitukset sinulla on oikeus pyytää puutteellisten henkilötietojen täydentämistä, myös täydentävän selvityksen avulla.",
        },
        {
          number: "7.4",
          title: "Oikeus tietojen poistamiseen (oikeus tulla unohdetuksi)",
          desc: "Sinulla on oikeus vaatia, että rekisterinpitäjä poistaa sinua koskevat henkilötiedot ilman aiheetonta viivytystä, ja olemme velvollisia poistamaan henkilötiedot ilman aiheetonta viivytystä, jos jokin seuraavista perusteista täyttyy: henkilötietoja ei enää tarvita niihin tarkoituksiin, joita varten ne kerättiin tai joita varten niitä muutoin käsiteltiin, rekisteröity peruuttaa suostumuksen, johon käsittely perustuu 6 artiklan 1 kohdan a alakohdan tai 9 artiklan 2 kohdan a alakohdan mukaisesti, eikä käsittelylle ole muuta laillista perustetta, rekisteröity vastustaa käsittelyä yleisen tietosuoja-asetuksen 21 artiklan 1 kohdan mukaisesti, eikä käsittelylle ole pakottavia oikeutettuja syitä, tai rekisteröity vastustaa käsittelyä yleisen tietosuoja-asetuksen 21 artiklan 2 kohdan mukaisesti, henkilötietoja on käsitelty lainvastaisesti, henkilötiedot on poistettava rekisterinpitäjään sovellettavan unionin tai jäsenvaltion lainsäädäntöön perustuvan oikeudellisen velvoitteen noudattamiseksi, henkilötiedot on kerätty yleisen tietosuoja-asetuksen 8 artiklan 1 kohdassa tarkoitettujen tietoyhteiskunnan palvelujen tarjoamisen yhteydessä. Jos rekisterinpitäjä on julkistanut henkilötiedot ja on 1 kohdan nojalla velvollinen poistamaan henkilötiedot, rekisterinpitäjän on käytettävissä oleva tekniikka ja toteutuskustannukset huomioon ottaen toteutettava kohtuulliset toimenpiteet, tekniset toimenpiteet mukaan lukien, ilmoittaakseen henkilötietoja käsitteleville rekisterinpitäjille, että rekisteröity on pyytänyt, että nämä rekisterinpitäjät poistavat kaikki kyseisiin henkilötietoihin johtavat linkit tai henkilötietojen kopiot tai jäljennökset. Oikeutta tietojen poistamiseen ('oikeus tulla unohdetuksi') ei sovelleta siltä osin kuin käsittely on välttämätöntä: sananvapauden ja tiedonvälityksen vapauden käyttämiseksi, sellaisen oikeudellisen velvoitteen noudattamiseksi, joka edellyttää käsittelyä rekisterinpitäjään sovellettavassa unionin tai jäsenvaltion lainsäädännössä, tai yleisen edun mukaisen tehtävän suorittamiseksi tai rekisterinpitäjälle kuuluvan julkisen vallan käyttämiseksi, yleisen edun vuoksi kansanterveyden alalla yleisen tietosuoja-asetuksen 9 artiklan 2 kohdan h ja i alakohdan sekä 9 artiklan 3 kohdan mukaisesti, yleisen edun mukaisia arkistointitarkoituksia, tieteellisiä tai historiallisia tutkimustarkoituksia tai tilastollisia tarkoituksia varten yleisen tietosuoja-asetuksen 89 artiklan 1 kohdan mukaisesti siltä osin kuin 1 kohdassa tarkoitettu oikeus todennäköisesti tekee mahdottomaksi tai vakavasti haittaa kyseisen käsittelyn tavoitteiden saavuttamista; tai oikeudellisten vaateiden laatimiseksi, esittämiseksi tai puolustamiseksi.",
        },
        {
          number: "7.5",
          title: "Oikeus käsittelyn rajoittamiseen",
          desc: "Sinulla on oikeus vaatia, että rekisterinpitäjä poistaa sinua koskevat henkilötiedot ilman aiheetonta viivytystä, ja olemme velvollisia poistamaan henkilötiedot ilman aiheetonta viivytystä, jos jokin seuraavista perusteista täyttyy: henkilötietoja ei enää tarvita niihin tarkoituksiin, joita varten ne kerättiin tai joita varten niitä muutoin käsiteltiin, rekisteröity peruuttaa suostumuksen, johon käsittely perustuu 6 artiklan 1 kohdan a alakohdan tai 9 artiklan 2 kohdan a alakohdan mukaisesti, eikä käsittelylle ole muuta laillista perustetta, rekisteröity vastustaa käsittelyä yleisen tietosuoja-asetuksen 21 artiklan 1 kohdan mukaisesti, eikä käsittelylle ole pakottavia oikeutettuja syitä, tai rekisteröity vastustaa käsittelyä yleisen tietosuoja-asetuksen 21 artiklan 2 kohdan mukaisesti, henkilötietoja on käsitelty lainvastaisesti, henkilötiedot on poistettava rekisterinpitäjään sovellettavan unionin tai jäsenvaltion lainsäädäntöön perustuvan oikeudellisen velvoitteen noudattamiseksi, henkilötiedot on kerätty yleisen tietosuoja-asetuksen 8 artiklan 1 kohdassa tarkoitettujen tietoyhteiskunnan palvelujen tarjoamisen yhteydessä. Jos rekisterinpitäjä on julkistanut henkilötiedot ja on 1 kohdan nojalla velvollinen poistamaan henkilötiedot, rekisterinpitäjän on käytettävissä oleva tekniikka ja toteutuskustannukset huomioon ottaen toteutettava kohtuulliset toimenpiteet, tekniset toimenpiteet mukaan lukien, ilmoittaakseen henkilötietoja käsitteleville rekisterinpitäjille, että rekisteröity on pyytänyt, että nämä rekisterinpitäjät poistavat kaikki kyseisiin henkilötietoihin johtavat linkit tai henkilötietojen kopiot tai jäljennökset. Oikeutta tietojen poistamiseen ('oikeus tulla unohdetuksi') ei sovelleta siltä osin kuin käsittely on välttämätöntä: sananvapauden ja tiedonvälityksen vapauden käyttämiseksi, sellaisen oikeudellisen velvoitteen noudattamiseksi, joka edellyttää käsittelyä rekisterinpitäjään sovellettavassa unionin tai jäsenvaltion lainsäädännössä, tai yleisen edun mukaisen tehtävän suorittamiseksi tai rekisterinpitäjälle kuuluvan julkisen vallan käyttämiseksi, yleisen edun vuoksi kansanterveyden alalla yleisen tietosuoja-asetuksen 9 artiklan 2 kohdan h ja i alakohdan sekä 9 artiklan 3 kohdan mukaisesti, yleisen edun mukaisia arkistointitarkoituksia, tieteellisiä tai historiallisia tutkimustarkoituksia tai tilastollisia tarkoituksia varten yleisen tietosuoja-asetuksen 89 artiklan 1 kohdan mukaisesti siltä osin kuin 1 kohdassa tarkoitettu oikeus todennäköisesti tekee mahdottomaksi tai vakavasti haittaa kyseisen käsittelyn tavoitteiden saavuttamista; tai oikeudellisten vaateiden laatimiseksi, esittämiseksi tai puolustamiseksi.",
        },
        {
          number: "7.6",
          title: "Oikeus tietojen siirrettävyyteen",
          desc: "Sinulla on oikeus saada sinua koskevat henkilötiedot, jotka olet toimittanut meille, jäsennellyssä, yleisesti käytetyssä ja koneellisesti luettavassa muodossa, ja sinulla on oikeus siirtää nämä tiedot toiselle rekisterinpitäjälle ilman, että rekisterinpitäjä, jolle henkilötiedot on toimitettu, estää sitä, jos: käsittely perustuu suostumukseen yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan a alakohdan tai 9 artiklan 2 kohdan a alakohdan mukaisesti tai sopimukseen yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti, ja jos käsittely suoritetaan automatisoidusti. Käyttäessäsi 1 kohdan mukaista oikeutta tietojen siirrettävyyteen sinulla on oikeus saada henkilötiedot siirrettyä suoraan rekisterinpitäjältä toiselle siinä määrin kuin se on teknisesti mahdollista. Tietojen siirrettävyyttä koskevan oikeuden käyttäminen ei vaikuta oikeuteesi tietojen poistamiseen ('oikeus tulla unohdetuksi'). Tätä oikeutta ei sovelleta käsittelyyn, joka on tarpeen yleistä etua koskevan tehtävän suorittamiseksi tai rekisterinpitäjälle kuuluvan julkisen vallan käyttämiseksi.",
        },
        {
          number: "7.7",
          title: "Oikeus vastustaa",
          desc: "Sinulla on oikeus vastustaa erityiseen tilanteeseesi liittyvin perustein milloin tahansa sinua koskevien henkilötietojen käsittelyä, joka perustuu yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan e tai f alakohtaan, mukaan lukien näihin säännöksiin perustuva profilointi. Jos vastustaminen tapahtuu, rekisterinpitäjä ei enää käsittele henkilötietoja, paitsi jos rekisterinpitäjä osoittaa käsittelylle pakottavia perusteltuja syitä, jotka syrjäyttävät rekisteröidyn edut, oikeudet ja vapaudet tai oikeudellisten vaatimusten laatimisen, esittämisen tai puolustamisen. Jos henkilötietoja käsitellään suoramarkkinointitarkoituksiin, sinulla on oikeus milloin tahansa vastustaa sinua koskevien henkilötietojen käsittelyä tällaista markkinointia varten. Tämä koskee myös profilointia siltä osin kuin se liittyy tällaiseen suoramarkkinointiin. Jos vastustat suoramarkkinointitarkoituksiin tapahtuvaa käsittelyä, henkilötietojasi ei enää käsitellä kyseisiin tarkoituksiin. Tietoyhteiskunnan palvelujen käytön osalta ja direktiivin 2002/58/EY estämättä voit käyttää vastustamisoikeuttasi automatisoidusti teknisten eritelmien avulla. Jos henkilötietoja käsitellään tieteellisiin tai historiallisiin tutkimustarkoituksiin tai 89 artiklan 1 kohdan mukaisiin tilastollisiin tarkoituksiin, sinulla on erityiseen tilanteeseesi liittyvistä syistä oikeus vastustaa sinua koskevien henkilötietojen käsittelyä, paitsi jos käsittely on tarpeen yleistä etua koskevan tehtävän suorittamiseksi. Vastustamisoikeutta voi käyttää milloin tahansa ottamalla yhteyttä asianomaiseen rekisterinpitäjään.",
        },
        {
          number: "7.8",
          title: "Automaattinen yksilöllinen päätöksenteko, mukaan lukien profilointi.",
          desc: "Sinulla on oikeus olla joutumatta sellaisen päätöksen kohteeksi, joka perustuu yksinomaan automaattiseen käsittelyyn, mukaan lukien profilointi, ja jolla on sinuun kohdistuvia oikeusvaikutuksia tai joka vaikuttaa sinuun vastaavalla tavalla merkittävästi. Tätä ei sovelleta, jos päätös: on tarpeen rekisteröidyn ja rekisterinpitäjän välisen sopimuksen tekemistä tai täytäntöönpanoa varten, on sallittu unionin tai jäsenvaltion lainsäädännössä, jota rekisterinpitäjä noudattaa ja jossa säädetään myös asianmukaisista toimenpiteistä rekisteröidyn oikeuksien ja vapauksien sekä oikeutettujen etujen suojaamiseksi, tai perustuu rekisteröidyn nimenomaiseen suostumukseen. Rekisterinpitäjän on toteutettava asianmukaiset toimenpiteet rekisteröidyn oikeuksien ja vapauksien sekä oikeutettujen etujen turvaamiseksi, ainakin oikeus saada rekisterinpitäjältä inhimillinen puuttuminen asiaan, ilmaista näkemyksensä ja riitauttaa päätös. Rekisteröity voi käyttää tätä oikeutta milloin tahansa ottamalla yhteyttä kyseiseen rekisterinpitäjään.",
        },
        {
          number: "7.9",
          title: "Oikeus tehdä valitus valvontaviranomaiselle.",
          desc: "Sinulla on myös oikeus tehdä valitus valvontaviranomaiselle erityisesti siinä jäsenvaltiossa, jossa sinulla on asuinpaikka, työpaikka tai paikka, jossa väitetty rikkominen tapahtuu, sanotun kuitenkaan rajoittamatta muiden hallinnollisten tai oikeudellisten muutoksenhakukeinojen käyttöä, jos olet rekisteröitynä sitä mieltä, että sinua koskevien henkilötietojen käsittelyssä rikotaan tätä asetusta.",
        },
        {
          number: "7.10",
          title: "Oikeus tehokkaisiin oikeussuojakeinoihin",
          desc: "Sinulla on oikeus tehokkaaseen oikeussuojakeinoon, jos katsot, että tämän asetuksen mukaisia oikeuksiasi on loukattu tämän asetuksen vastaisen henkilötietojesi käsittelyn seurauksena, sanotun kuitenkaan rajoittamatta muita käytettävissä olevia hallinnollisia tai oikeudellisia oikeussuojakeinoja, mukaan lukien oikeus tehdä valitus valvontaviranomaiselle yleisen tietosuoja-asetuksen 77 artiklan mukaisesti.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Tietosuojaseloste - Avoin Avustaja</title>
        <meta name="description" content="Avoimen Avustajan tietosuojaseloste" />
      </Head>
      <Box p="6" className="oa-basic-theme">
        <Box className="max-w-4xl mx-auto">
          <Stack spacing="6" mb="6">
            <Heading as="h1" size="xl" color="blue.500">
              Tietosuojakäytänteet
            </Heading>

            <Box bg={backgroundColor} p="6" pt="4" borderRadius="xl" shadow="base">
              <Stack>
                <Heading as="h3" size="lg">
                  Yleiskatsaus
                </Heading>
                <Text>
                  Olemme iloisia, että olet kiinnostunut työstämme, ja toivotamme sinut tervetulleeksi hankkeesemme.
                  Tästä tietosuojakäytännöstä saat tietää, mitä henkilötietoja käsittelemme, kun vierailet
                  verkkosivustollamme, ja mihin tarkoitukseen, sekä mitä oikeuksia sinulla on näihin tietoihin liittyen.
                  Kategorisesti ottaen säilytämme tietoja vain niin kauan kuin tarvitsemme niitä. Henkilötietojen
                  toimittamiseen meille ei ole oikeudellista velvoitetta. EU:n tietosuoja-asetuksen 22 artiklan mukaista
                  automatisoitua päätöksentekoa ei tapahdu.
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
                Email:{" "}
                <Link href="mailto:turkunlp.oasst.auth@gmail.com" color="blue.500" fontWeight="bold">
                  turkunlp.oasst.auth@gmail.com
                </Link>
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
