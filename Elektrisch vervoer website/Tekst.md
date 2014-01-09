#Introductie

	Fossiel vs Elektrisch in NL

## Rol van de Transport

We leven in een wereld waar transport onmisbaar is. Mensen moeten zich vaak van A naar B verplaatsen: van huis naar de winkel, naar school, naar familie in een andere stad of op vakantie naar het buiteland. Afhankelijk van de afstand die je moet afleggen en de tijd die je hebt, kun je ervoor kiezen om lopend te gaan, met de fiets, met de auto, met de trein of met het vliegtuig. En natuurlijk zijn er nog veel meer bestemmingen en manieren om op die bestemming te komen.

Alle vormen van transport hebben één ding gemeen, ze kosten energie. Als je loopt of fietst, wordt de energie uit voedsel gebruikt. Als je op een scooter zit of in een auto rijdt, wordt energie uit de brandstoftank gebruikt. In een trein wordt elektrische energie van een energiecentrale gebruikt. En vliegtuigen gebruiken de energie uit kerosine. 

Maar waar wordt al deze energie eigenlijk voor gebruikt? Waarom kost bewegen energie? En wat gebeurt er met deze energie als de beweging ophoudt? En waarom zijn elektrisch auto’s zoveel efficiënter dan auto’s op fossiele brandstoffen?

Om deze vragen te kunnen beantwoorden wordt in deze module een model ontwikkelt om de energiebalans van een auto te analyseren. 

## Energiebalans Transport

In de slideshow hieronder wordt stap voor stap weergegeven hoe er energie in de aandrijving van de auto wordt gestopt en welke energieverliezen er zijn. Bekijk zelf de slideshow en bedenk of er elementen zijn die je mist.

	Slideshow 

De motor gebruikt energie uit de brandstof om de auto aan te drijven. Hier gaat een deel van de energie verloren doordat de motor een beperkte efficiëntie heeft. Daarnaast gaat er energie verloren bij het remmen. Ten slotte gaat tijdens het rijden energie verloren door lucht- en rolwrijving. 

Het is je misschien opgevallen dat er in bovenstaande slideshow geen rekening wordt gehouden met alle elektrische apparatuur *in* de auto. De verlichting, airco, navigatie, stereo en bijvoorbeel stoelverwarming kosten allemaal ook energie, maar er zijn twee redenen om deze niet mee te nemen in analyse. In de eerste plaats is het totale energieverbruik van deze apparaten klein ten opzichte van de overige energieverliezen. En ten tweede is dit energieverbruik sterk afhankelijk van de gebruiker. Dit maakt het moeilijk om het te modeleren.

De bovenstaande slideshow is *kwantitatief*: het geeft alleen aan welke energiestromen er zijn en gaat niet in op hoe groot de energiestromen zijn. Om een model te ontwikkelen dat zowel kwantitatief als *kwalitatief* is, moet dus worden berekend hoe groot de verliezen zijn in de aandrijving, in het remmen, in de luchtwrijving en in de rolwrijving.

In de volgende hoofdstukken worden deze onderdelen behandeld. Je zal zelf verschillende vragen moeten beantwoorden en aan de slag gaan met kleine computermodellen. Na afloop kun je zelf een belangrijke vraag beantwoorden: 
>Wat is de goedkoopste en meest efficiënte manier van transport?

# Aandrijving

## Kinetische energie

Alle bewegende voorwerpen hebben een bepaalde hoeveelheid energie in zich: kinetische energie. Deze energie komt vrij wanneer de voorwerpen tot stilstand komen. Zeker als een voorwerp heel snel tot stilstand komt, is het duidelijk dat de kinetische energie vrijkomt. Denk bijvoorbeeld aan een vaas die kapot valt.

De kinetische energie van een voorwerp is afhankelijk van de massa en de snelheid:

$$E_{k}=\frac{1}{2}mv^{2}$$

Hierin is $$$E_{k}$$$ de kinetische energie van het voorwerp (in Joule), $$$m$$$ is de massa (in kg) en $$$v$$$ is de snelheid (in m/s).

	Q1

Een voorwerp dat niet beweegt, heeft een snelheid van 0 m/s en heeft dus geen kinetische energie. Om dit voorwerp in beweging te krijgen, moet er energie in worden gestopt. Voor auto's kan deze *aandrijving* op twee manieren gebeuren:

1. Met een verbrandingsmotor; of
2. Met een elektrische motor. 

## Verbrandingsmotor

In een benzine-auto komt de energie die nodig is voor de aandrijving uit benzine. De benzine wordt verbrand in de motor. Hier wordt de chemische energie van de benzine omgezet in warmte. Door deze warmte zet de lucht in de motor uit waardoor een drukverschil met de buitenlucht ontstaat. Dit drukverschil duwt zuigers heen en weer door cilinders. De zuigers zitten op hun beurt vast aan een aandrijfas. Door de beweging van de zuigers gaat dus ook de aandrijfas draaien. De aandrijfas zit aan de wielen vast dus op deze manier gaan de wielen draaien en komt de auto in beweging.

	Q2

Bij alle energieomzettingen, komt warmte vrij. In sommige gevallen is deze warmte nuttig, maar meestal is dit verloren energie. Als een zuigers door een cilinder beweegt, zal de cilinder door wrijving een een beetje opwarmen. Deze warmte wordt uiteindelijk aan de buitenlucht afgegeven en draagt dus niet bij aan de aandrijving van de auto.

Een gemiddelde verbrandingsmotor heeft een efficiëntie van zo'n 30%. Dat betekent dat voor elke 100 Joule aan brandstof die je tankt, slechts 30 Joule gebruikt worden om de auto aan te drijven. De overige 70 Joule gaat verloren als warmte.

## Elektrische motor

Elektrische auto's gebruiken geen verbrandingsmotoren. In plaats daarvan wordt een elektromotor gebruikt. Deze motoren zetten elektrische energie direct om in beweging, zonder dat er eerst warmte wordt geproduceerd.

Het opslaan van energie is in een elektrische auto relatief moeilijk. De meest bekende vorm van elektriciteitsopslag is de accu. Het nadeel van accu's is dat de energiedichtheid (energie per gewicht) 50 tot 100 keer lager is dan in brandstof. Om een grote afstand af te kunnen leggen, moet een elektrische auto dus een enorm gewicht aan accu's meenemen. Dit extra gewicht maakt het ook weer moeilijker om de auto in beweging te brengen.

De efficiëntie van een elektromotor is zo'n 90-95%. Voor 100 Joule aan elektrische energie gaat dus slechts 5-10 Joule verloren in de vorm van warmte.

## Energieverliezen

Als de energie die door de motor in de aandrijving wordt gestopt bij het remmen teruggewonnen zou kunnen worden en er verder geen energieverliezen zijn, dan zou er netto geen energie nodig zijn voor transport. Helaas niet alle kinetische energie tijdens het remmen worden terugwonnen en helaas zijn er wel degelijk andere energieverliezen. Er zijn dus drie vormen van energieverlies die ervoor zorgen dat het energie kost om van A naar B te rijden, namelijk energieverliezen door:

- Optrekken en Remmen;
- Rolwrijving;
- Luchtwrijving.

Het totale energieverlies in de motor, $$$P\_{m}$$$, is afhankelijk van de energie die in totaal nodig is voor de aandrijving van de auto (remverliezen, rolwrijving en luchtwrijving) en de efficiëntie van de motor, $$$\eta$$$:

$$P\_{m} = \frac{P\_{\textrm{remverlies}}+P\_{\textrm{rolwrijving}}+P\_{\textrm{luchtwrijving}}}{\eta}$$

In de komende hoofdstukken zul je ontdekken hoe groot de afzonderlijke energieverliezen zijn en – nog belangrijker – hoe we deze verliezen kunnen verkleinen.

# Optrekken en Remmen

In een dichtbevolkt land als Nederland kun je bijna nooit van A naar B komen zonder te stoppen. Of  je nou loopt, fietst of met de auto rijdt, je zult af en toe moeten afremmen voor andere weggebruikers. Of je moet wachten voor een stoplicht. Elke keer dat je met een auto afremt, moet de kinetische energie uit de auto worden gehaald. Dit gebeurt meestal met behulp van remmen die de kinetische energie omzetten in warmte. Als je na een stop weg wilt rijden, moet de motor opnieuw energie omzetten naar kinetische energie van de auto. 

Hoeveel energie ben je bij een auto-rit kwijt aan remverliezen? Om deze vraag te kunnen beantwoorden, moeten eerst een aantal andere vragen worden beantwoord:

- Hoe zwaar is de auto?
- Hoe hard rijdt de auto op alle momenten tijdens de rit?
- Welk parcours rijdt de auto?

## Gewicht

De formule voor kinetische energie, $$$E_{k}=\frac{1}{2}mv^{2}$$$, laat zien dat de kinetische energie recht evenredig is met de massa. 

	Q3

Bovenstaand voorbeeld laat zien dat remverliezen eenvoudig verkleind kunnen worden door een auto lichter te maken. In de praktijk betekent dit vaak dat een auto óf kleiner óf minder comfortabel wordt. Maar met behulp van innovaties is het steeds vaker mogelijk om een auto lichter te maken zonder in te leveren op grootte of comfort. 

Een voorbeeld van zo’n innovatie is het plaatsen van elektrische motoren in de wielen. Op deze manieren is de zware overbrenging van de motor naar de wielen niet meer nodig. Dit betekent dat het chassis minder massa hoeft te ondersteunen en dus lichter kan zijn. Doordat de auto nu lichter is geworden, kunnen de elektromotoren kleiner worden en is er minder accucapaciteit nodig, waardoor de auto lichter kan worden en het chassis weer minder sterk hoeft te zijn, enzovoorts.

## Snelheid

De formule voor kinetische energie, $$$E_{k}=\frac{1}{2}mv^{2}$$$, laat zien dat de kinetische energie kwadratisch evenredig is met de snelheid. 

	Q4
 
Kinetische energie gaat niet alleen verloren bij het afremmen naar stilstand. Ook bij het afremmen van bijvoorbeeld 120 km/h naar 100 km/h gaat energie verloren. In het algemeen geldt:

$$\Delta E\_{k}
=E\_{k,f}-E\_{k,i}
=\frac{1}{2}mv\_{f}^{2}-\frac{1}{2}mv\_{i}^{2}
=\frac{1}{2}m(v\_{f}^{2}-v_{i}^{2})$$

Hierin is $$$\Delta E\_{k}$$$ de hoeveelheid kinetische energie die **in** de auto wordt gestopt (in Joule), $$$v\_{i}$$$ is de beginsnelheid (in m/s)  en $$$v\_{f}$$$ is de eindsnelheid (in m/s). 

Als een auto van 500 kg vanuit stilstand optrekt naar 36 km/h, kun je de formule als volgt invullen:

- $$$m$$$ = 500
- $$$v\_{i}$$$ = 0 m/s
- $$$v\_{f}$$$ = 10 m/s (want 36 km/h = 10 m/s)

Als je deze getallen invult, blijkt dat $$$\Delta E\_{k}$$$ in dit geval +50 kJ is. Als de auto vervolgens weer afremt tot stilstand, wisselen $$$v\_{i}$$$ en $$$v\_{f}$$$ van waarde en is $$$\Delta E\_{k}$$$ gelijk aan -50 kJ. Kortom, een positieve waarde van $$$\Delta E\_{k}$$$ betekent dat er energie **in** de auto wordt gestopt en een negatieve waarde van $$$\Delta E\_{k}$$$ betekent juist dat er energie **uit** de auto verloren gaat.

	Q5

	Q6
	
In beide gevallen hierboven is het snelheids**verschil** 20 km/h, maar het energieverlies is veel groter bij afremmen op de snelweg dan bij afremmen in een woonwijk. Dat komt doordat $$$\Delta E\_{k}$$$ *niet* evenredig is met het *kwadraat van het verschil* in snelheid, maar met het *verschil van de kwadraten*. 

## parcours

Bij het berekenen van remverliezen moet je ook rekening houden met het parcours. Vooral hoogteverschillen zijn hierbij belangrijk. Als je een berg oprijdt zonder gas te geven, rem je af. De kinetische energie wordt in dit geval omgezet in potentiële energie. Als je bij het wegrijden naar beneden rijdt, wordt deze potentiële energie weer omgezet in kinetische energie.

Er zijn metro-netwerken die van dit principe gebruikmaken. Door de metrohaltes net iets hoger te bouwen dan de rest, wordt automatisch afgeremd op het moment dat de metro bij een halte aankomt. Op deze manier worden de remverliezen dus kleiner.

Voor vervoer over de weg, is deze vorm van energiebesparing slecht toepasbaar. En zeker in een plat land als Nederland zijn hoogteverschillen geen belangrijke factor. Daarom zal hier in deze module geen aandacht aan worden besteed.

## NEDC Testroute

Om een gevoel te krijgen bij de echte remverliezen die optreden, is het handig om een standaard restprofiel gebruiken. Voor bijna alle nieuwe auto’s die op de markt komen, wordt het brandstofverbruik en de hoeveelheid uitlaatgassen getest met behulp van de *New Europen Driving Cycle* (NEDC).

De NEDC bestaat uit een stuk stedelijke route dat vier keer wordt gereden en een stuk voor buiten de stad. Hieronder is de totale NEDC weergegeven, met snelheid op de y-as (in km/h) en tijd op de x-as (in s).

![NEDC Testroute](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/NEDCparcour.jpg "NEDC Testroute")

Het valt op dat het stedelijke deel relatief veel variatie heeft en een lage gemiddelde snelheid. Het stuk voor buiten de stad heeft minder variatie, maar een hogere snelheid

Met behulp van de formule voor $$$\Delta E\_{k}$$$ is het mogelijk bij alle momenten van optrekken en afremmen te berekenen hoeveel energie het kost en hoeveel energie er verloren gaat. Het is echter handiger om eerst het vermogen uit te rekenen dat nodig is om op te trekken en te remmen. Met behulp van deze vermogensfunctie kan vervolgens door integratie het totale remverlies worden berekend. Het vermogen dat verloren gaat door te remmen, $$$P\_{r}$$$ kan als volgt berekend worden: 

$$ P\_{r}(t)=F(t)v(t)=m \cdot a(t) \cdot v(t) = m \cdot \frac{dv}{dt} \cdot v(t).$$ 

Met behulp van het NEDC $$$vt$$$-diagram en de massa van de auto kan dus worden berekend wat op elk moment het vermogen is dat in de auto wordt gestopt.

Hieronder is in de **NEDC**-tab opnieuw de NEDC te zien, maar onder het $$$vt$$$-diagram is nu het $$$Pt$$$-diagram weergeven. (Als je niks ziet, moet je de gratis Mathematica CDF plugin downloaden: [downloadlink](http://www.wolfram.com/cdf-player/ "Wolfram CDF Player").) Dit diagram geeft weer hoeveel vermogen er in een auto van 1500 kg wordt gestopt. Het oppervlak onder  grafiek geeft aan hoeveel energie er in de auto wordt gestopt (groen) en hoeveel remverliezen er zijn (rood).

In de **NEDC (gemiddeld)**-tab is een nieuwe route weergegeven. De totaal afgelegde afstand en de totale tijdsduur zijn hier hetzelfde als de oorspronkelijk NEDC, maar de remverliezen zijn (veel!) kleiner. Dit komt doordat er maar één keer wordt opgetrokken, er vervolgens een constante snelheid wordt gereden en er tenslotte één keer wordt geremd.

In de laatste tab, **NEDC (variabel)**, kun je zelf de oorspronkelijk NEDC aanpassen. Probeer bijvoorbeeld om de totaal afgelegde afstand op de 10,8 km te houden en op een realistische manier de remverliezen te verkleinen tot 0,75 MJ.

	[NEDC module voor remverliezen]

## Remverliezen in verhouding

Bij de standaard NEDC zijn de remverliezen 1,96 MJ voor een auto van 1500 kg over een afstand van 10,8 kilometer. Wat betekent dit precies voor een gemiddelde gebruiker? 

De *VW Passat* is een gemiddelde gezinsauto van zo’n 1500 kg. De *Passat* rijdt zo’n 12 km op 1 liter benzine. Deze waarde is bepaald op basis van de NEDC. Voor 10,8 km is dus 0,90 liter benzine nodig. Dit komt overeen met 31 MJ. Van deze 31 MJ gaat ongeveer 70% in de motor verloren in de vorm van warmte. Er blijft dus 9,3 MJ over om de auto aan te drijven. Ongeveer 2,0 MJ hiervan gaat verloren als remverlies. Deze verliezen worden hieronder grafisch weergegeven.

![Remverlies in verhouding](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/RemverliesVerhouding.jpg "Remverlies in verhouding")

Van de 9,3 MJ die overblijft voor de aandrijving gaat dus zo’n 22% van de energie verloren als remverlies. Voor sportieve rijders kan dit percentage hoger liggen. Ben je zelf een sportieve rijder? Dan kun je met de **NEDC (variabel)**-tab uitrekenen hoeveel energie het kost als je de 10,8 km aflegt met extra veel optrekken en afremmen.

We hebben nu gezien dat zo’n 22% van de energie in vervoer verloren gaat in remverliezen. Waar wordt de overige 78% voor gebruikt? Dat ontdek je in de onderdelen over rolwrijving en luchtwrijving.

# Rolwrijving en Luchtwrijving

## Rolwrijving  Theorie

Bij een stilstaande auto zijn de banden net niet helemaal rond. Onder het gewicht van de auto worden de banden een heel klein beetje platgedrukt. Zodra de auto gaat rijden, zullen de banden steeds op een andere plek worden platgedrukt. De kracht die nodig is voor deze continue vervorming wordt rolwrijving genoemd. De rolwrijving kan als volgt worden berekend:

$$F\_{w,r} = m \cdot g \cdot c\_{rr}$$

Hierin is $$$F\_{w,r}$$$ de rolwrijving (in Newton), $$$m$$$ is de massa van de auto (in kg), $$$g$$$ is de zwaartekrachtsversnelling (9,81 m/s<sup>2</sup>) en $$$c\_{rr}$$$ is de rolwrijvingscoëfficiënt (zonder eenheid). Deze $$$c\_{rr}$$$ is afhankelijk van het wegdek en het materiaal van de banden. Voor rubber autobanden op glad asfalt is deze waarde ongeveer 0,01.

De rolwrijvings**kracht** is niet afhankelijk van de snelheid. Het **vermogen** dat nodig is om bij een bepaalde snelheid de rolwrijving te overwinnen is echter wel degelijk afhankelijk van de snelheid. Voor het vermogen dat door een bepaalde kracht geleverd wordt geldt immers: $$$P=F \cdot v$$$. Om op een willekeurig moment te berekenen hoeveel vermogen er nodig is om de rolwrijving te overwinnen, moet het rolwrijvings**vermogen**, $$$P\_{w,r}$$$, dus als volgt worden berekend:

$$P\_{w,r}(t) = F\_{w,r} \cdot v(t) = m \cdot g \cdot c\_{rr} \cdot v(t).$$

Hierin is $$$P\_{w,r}$$$ het vermogen dat nodig is om de rolwrijving te overwinnen (in W) en $$$v$$$ is de snelheid (in m/s). 

In onderstaande figuur zijn zowel $$$F\_{w,r}$$$ als $$$P\_{w,r}$$$ weergegeven, als functie van snelheid. Voor beide grafieken geldt: 

- $$$m$$$ = 1500 kg; en 
- $$$c\_{rr}$$$ = 0,01

![Rolwrijving](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/Rolwrijving.png "Rolwrijving")
	
	Q7

## Rolwrijving verkleinen

Om vervoer zo zuinig mogelijk te maken, is het belangrijk om de rolwrijving zo laag mogelijk te houden. De vergelijking voor $$$F\_{w,r}$$$ laat zien dat er maar twee mogelijkheden zijn om de rolwrijving te verkleinen:

- De massa $$$m$$$ verkleinen;
- De rolwrijvingscoëficiënt $$$c\_{rr}$$$ verkleinen.

Er zijn een aantal makkelijke manieren om de massa van een auto te verkleinen: de auto kleiner maken, de auto minder velig maken, minder acessoires in de auto inbouwen, minder bagage meenemen of minder passagiers meenemen. Dit zijn allemaal geen ideale oplossingen. Een moeilijkere - maar structurele - oplossing is om nieuwe materialen te gebruiken. Voor sommige toepassingen zou het staal in auto's vervangen kunnen worden door koolstofvezels. In bepaalde opzichten is dit materiaal sterker dan staal en het is ongeveer drie keer zo licht. De Microjoule auto is voor het grootste deel gemaakt van koolstofvezels en mede hierdoor weegt de auto slechts 30 kg.

![MicroJoule car](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/MicroJoule.jpg "Microjoule Auto")

Het verkleinen van de rolwrijvingscoëfficiënt is een andere strategie om de rolwrijving te verkleinen. Deze wrijvingscoëfficiënt hangt af van zowel de wielen als het wegdek. Hoe minder de banden vervormd worden, hoe lager de rolwrijving. Met stalen wielen op een stalen rails rijden heeft een erg lage rolwrijvingscoëfficiënt. Met zachte rubber banden op een zandweg rijden heeft juist een erg hoge rolwrijvingscoëfficiënt. In de tabel hieronder zijn een aantal voorbeelden weergegeven ([bron](http://en.wikipedia.org/wiki/Rolling_resistance "Wikipedia: Rolwrijving")).

| Beschrijving | Rolwrijvingscoëfficiënt | 
| ------------ | ------------- |
| Stalen treinwielen op rails | 0,001 - 0,002  |
| Harde fietsbanden op asfalt | 0,002 - 0,005  |
| Grote vrachtwagenbanden op asfalt | 0,005 - 0,008  |
| Autobanden op asfalt | 0,01 - 0,015  |
| Autobanden op zand | 0,3 |

Het is voor alsnog helaas niet mogelijk om goedkope autobanden te maken die een goede wegligging combineren met een lage rolwrijvingscoëfficiënt. 

## Luchtwrijving Theorie

Het kost moeite om een voorwerp door de lucht te bewegen. Om ruimte te maken voor het voorwerp, moet er namelijk lucht verplaatst worden. Hiervoor moet de lucht eerst in beweging worden gebracht: de lucht moet kinetische energie krijgen. Hoe sneller het voorwerp beweegt, hoe meer kinetische energie de lucht moet krijgen om plaats te maken voor het voorwerp. 

De kracht die het kost om een voorwerp door de lucht te bewegen wordt luchtwrijving genoemd en kan als volgt worden berekend:

$$ F\_{w,l}(t) = \frac{1}{2} \rho A  c\_{d} v^{2}(t).$$

Hierin is $$$F\_{w,l}$$$ de luchtwrijving (in Newton), $$$\rho$$$ is de dichtheid van de lucht (1,225 kg/m<sup>3</sup>), $$$A$$$ is het frontale oppervlak van het voorwerp (in m<sup>2</sup>), $$$c_{d}$$$ is de luchtwrijvingscoëfficiënt (in m<sup>-1</sup>) en $$$v$$$ is de snelheid van het voorwerp (in m/s).

Net als bij rolwrijving, is het ook bij luchtwrijving interessant om te weten wat het vermogen is dat op een bepaald moment nodig is om de luchtwrijving te overwinnen. Dit vermogen (in W), $$$P\_{w,l}$$$, kan als volgt worden berekend: 

$$P\_{w,l}(t) = F\_{w,l} \cdot v(t) = \frac{1}{2} \rho A  c_{d} v^{3}(t).$$

In onderstaande figuur zijn zowel $$$F\_{w,l}$$$ als $$$P\_{w,l}$$$ weergegeven als functie van snelheid. In beide gevallen geldt: 

- $$$\rho$$$ = 1,225 kg/m<sup>3</sup>;
- $$$A$$$ = 2,7 m<sup>2</sup>; en 
- $$$c_{d}$$$ = 0,3.

![Luchtwrijving](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/Luchtwrijving.png "Luchtwrijving")

	Q8 
	
## Luchtwrijving verkleinen

Er zijn drie manieren om de luchtwrijving te verkleinen:

- Langzamer rijden (kleinere $$$$v$$$);
- Vlak achter een ander voertuig rijden (kleinere $$$\rho$$$);
- De auto aerodynamischer maker (kleinere $$$c\_{d}$$$).

De eerste twee opties zijn niet ideaal, omdat transport óf langer zal duren óf onveiliger wordt. De derde optie is een stuk aantrekkelijker, omdat vooral de vorm van de auto aangepast hoeft te worden. De luchtwrijvingscoëfficiënt wordt lager naarmate lucht om de auto heen kan stromen. De vorm is hiervoor het belangrijkste, maar ook de gladheid van het materiaal speelt een rol. De Nuna 6 zonne-auto is de wereldrecordhouder voor de laagste luchtwrijvingscoëfficiënt: 0,07. In vergelijking: een Toyota Prius heeft een luchtwrijvingscoëfficiënt van 0,25 en voor een vrachtwagen is het ongeveer 1.

![NUNA6](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/Nuna6RearView.jpg "NUNA6 zonne-auto")


## Lucht- en Rolwrijving  tijdens de NEDC

De vragen aan het eind van de laatste twee paragrafen hebben laten zien dat bij een gemiddelde gezinsauto die 50 km/h rijdt de rolwrijving 2,2 kW kost en de luchtwrijving 1,3 kW kost. Om te zien hoeveel energie er bij gemiddeld gebruik verloren gaat aan lucht- en rolwrijving, zijn hieronder de NEDC en de bijbehorende lucht- en rolwrijving weergegeven, in de “NEDC”-tab.

	[NEDCluchtrol]

Tijdens de 10,8 kilometer van de NEDC kosten lucht- en rolwrijving samen 2,92 MJ, voor de gemiddelde auto die we hiervoor besproken hebben ($$$m$$$ = 1500 kg, $$$A$$$ = 2,7 m<sup>2</sup>, $$$c\_{d}$$$ = 0,4 m<sup>-1</sup>, $$$c_{rr}$$$ = 0,01). Van deze 2,92 MJ gaat 1,33 MJ naar luchtwrijving en 1,59 MJ naar rolwrijving.

In de **NEDC (gemiddeld)**-tab worden de verliezen uitgerekend voor het afleggen van de NEDC afstand met een constante snelheid. Hiervoor is 1,92 MJ nodig, en dat is dus 1 MJ minder dan de bij de oorspronkelijk NEDC. 

In de laatste tab, **NEDC (variabel)**, kun je zelf de oorspronkelijk NEDC aanpassen. Probeer zelf een realistisch parcours van 10,8 km te maken met een maximaal energieverbruik van 2,5 MJ. Waar kan je het makkelijkste energie besparen, bij luchtwrijving of bij rolwrijving?

Na de efficiëntie van de motor en de remverliezen, hebben we nu ook de lucht- en rolwrijving besproken. In het volgende hoofdstuk zullen we alles samenvoegen om zo de totale energieconsumptie van auto’s in kaart te brengen. Hiermee kunnen twee belangrijke vragen worden beantwoord:

- Hoe kan vervoer zo zuinig en goedkoop mogelijk worden? 
- Op welke manier kan efficiënter vervoer de energiehuishouding van Nederland verduurzamen?


# Model van Energieverliezen

We hebben nu verschillende losse puzzelstukjes ontwikkeld die samen in staat zijn om de energieverliezen van een willekeurige auto te berekenen. Het model is uiteindelijk ook in staat om voor een willekeurige trein, scooter, fiets of vrachtwagen de energieverliezen te berekenen.

Voordat we de loss puzzelstukjes samenvoegen, worden eerst de verschillende vormen van energieverlies samengevat, wordt regeneratief remmen geïntroduceerd en wordt besproken hoe groot het bereik van een auto is.

Nadat de puzzelstukjes zijn samengevoegd, ga je zelf met het totale model aan de slag.

## Energieverliezen

In de voorgaande hoofdstukken hebben we de belangrijkste energieverliezen in transport besproken. Om met een auto van A naar B te gaan, moeten de volgende dingen gebeuren:

1. Energie uit de tank moet in een motor worden omgezet in beweging;
2. De auto moet kunnen remmen;
3. Tijdens het rijden moeten de banden vervormd worden; en
4. Tijdens het rijden moet de lucht voor de auto verplaatst worden.

Onderstaand figuur hebben we bij de introductie al gezien en is een grafische samenvatting van deze vier stappen.

![Overzicht energieverliezen](/Users/jonasvoorzanger/Dropbox/Quintel:Jonas Crossover/Elektrisch vervoer/Elektrisch vervoer website/Assets/PorscheVerliezen.jpg "Overzicht energieverliezen")

Stappen 1 en 2 vereisen energieomzettingen. Bij elke energieomzetting komt restwarmte vrij dus deze stappen kunnen niet 100% efficiënt zijn. Met behulp van een zuinige motor en regeneratieve remmen is het echter wel mogelijk om de energieverliezen bij deze stappen tot een minimum te beperken zonder het comfort van de auto te beperken.

De energieverliezen bij stappen 3 en 4 zijn voor een deel onvermijdelijk. Draaiende wielen waar een massa op rust zullen altijd vervormen en om van A naar B te gaan zal altijd lucht verplaatst moeten worden. De enige manier om geen energie te verliezen bij stappen 3 en 4 is door óf stil te blijven staan, óf een auto te gebruiken zonder frontaal oppervlak met een massa van 0 kg. Kortom, er zit een ondegrens aan de hoeveelheid energie die bij deze stappen verloren *moet* gaan om te rijden.

## Regeneratief remmen
Een belangrijk voordeel van elektrische auto's is dat ze relatief eenvoudig gebruik kunnen maken van regeneratieve remmen. Normale remmen zetten de kinetische energie van de auto om in warmte, met bijvoorbeeld een schijfrem. Regeneratieve remmen werken als een dynamo: ze zetten de kinetische energie om in elektrische energie die in de accu kan worden opgeslagen.

In het model kan de mate van regeneratief remmen worden ingesteld met variabele $$$R$$$. Als $$$R$$$ bijvoorbeeld 70% is, dan zullen de remverliezen 70% kleiner worden.

## Bereik
Het grootste nadeel van elektrische auto's is dat ze een beperkt bereik hebben. Dit komt doordat de energiedichtheid van accu's veel lager is dan de energiedichtheid van benzine. Over het algemeen worden voor elektrische auto's Lithium-ion accu's gebruikt. De energiedichtheid, $$$\rho\_{b}$$$, van deze accu's is ongeveer 0,6 MJ/kg, ten opzichte van 46 MJ/kg voor benzine ([bron](http://en.wikipedia.org/wiki/Energy_density "Wikipedia: Energy Density")).

Stel dat auto's op fossiele brandstof en elektrische auto's evenveel energie nodig zouden hebben voor dezelfde afstand, dan zou de accu van de elektrische auto dus zo'n 77 keer zwaarder moeten zijn dan de benzinetank van de 'fossiele' auto. De VW passat kan ongeveer 50 kg aan brandstof meenemen. Voor een elektrische variant zou dit dus bijna 4000 kg moeten zijn, wat betekent dat de totale massa meer dan verdrievoudigd. Gelukkig is een elektrische auto efficiënter dan een 'fossiele' auto, maar de massa van de brandstof en het bijbehorende bereik zijn dus wel relevante parameters.

In het model kunnen de massa van de auto, $$$m\_{a}$$$, en de massa van de brandstof (benzine of accu's), $$$m\_{b}$$$, afzonderlijke worden ingesteld. Het bereik wordt vervolgens in twee stappen uitgerekend. Eerst wordt aan de hand van het parcours en de energieverliezen het energieverbruik per kilometer berekend. Vervolgens wordt aan de hand van dit energieverbruik en de massa van de brandstof berekend hoe ver de auto kan rijden.

## Samenvoegen losse onderdelen

Het model kan aan de hand van een vt-diagram uitrekenen hoeveel energie er wordt gebruikt en wat het bereik van de auto is. Dit gebeurt in twee stappen. In stap 1 wordt de v(t)-data gebruikt om uit te rekenen wat de vermogensfuncties zijn voor de remverliezen, de rolwrijving, de luchtwrijving en de verliezen in de motor. De som van deze vier vermogensfuncties kan voor elk tijdstip in het oorspronkelijke vt-diagram uitrekenen hoeveel energie er verloren gaat.

In stap 2 wordt de v(t)-data en de totale vermogensfunctie gebruikt om het energieverbruik per kilometer uit te rekenen. Dit energieverbruik kan vervolgens worden gebruikt om het bereik van de auto te berekenen.

### Stap 1: Totale Vermogensfunctie

In de voorgaande hoofdstukken zijn de afzondelijke vermogensfuncties afgeleid voor de energie die verloren gaat door remmen ($$$P\_{r}$$$), door rolwrijving ($$$P\_{w,r}$$$), door luchtwrijving ($$$P\_{w,l}$$$), en in de motor ($$$P\_{m}$$$):

$$
\begin{aligned}
P\_{r}(t) & =  (m\_{a}+m\_{b}) \cdot (1-R)\cdot \frac{dv}{dt} \cdot v(t) \\\
P\_{w,r}(t) & = (m\_{a}+m\_{b}) \cdot g \cdot c\_{rr} \cdot v(t) \\\
P\_{w,l}(t) & = \frac{1}{2} \cdot \rho \cdot A \cdot c\_{d} \cdot v^{3}(t) \\\
P\_{m}(t) & = \frac{P\_{r}(t) + P\_{w,r}(t) + P\_{w,l}(t)}{\eta}
\end{aligned} 
$$

Het totale vermogen aan brandstof dat op een willekeurig moment in de vt-diagram nodig is, $$$P\_{t}$$$, kan nu als volgt worden berekend:

$$
\begin{aligned}
P\_{t} & = \Big( P\_{r}(t) + P\_{w,r}(t) + P\_{w,l}(t) \Big) + P\_{m}(t) \\\
& = \Big( P\_{r}(t) + P\_{w,r}(t) + P\_{w,l}(t) \Big) (1 + \frac{1}{\eta})
\end{aligned}
$$

### Stap 2: Bereik

Om het bereik uit te rekenen, moeten eerst de totaal afgelegde weg, $$$S\_{t}$$$, en het totale energieverbruik, $$$E\_{t}$$$, worden berekend:

$$
\begin{aligned}
S\_{t} & =  \int\_{t\_{i}}^{t\_{f}} v(t) dt; \\\
E\_{t} & =  \int\_{t\_{i}}^{t\_{f}} P(t) dt.
\end{aligned} 
$$

Nu $$$S\_{t}$$$ en $$$E\_{t}$$$ bekend zijn, kan worden berekend dat de auto $$$\frac{S\_{t}}{E\_{t}}$$$ meter rijdt op 1 Joule brandstof. Dit brandstofverbruik, $$$B$$$, kan worden omgerekend naar nuttigere grootheden: 

$$
\begin{aligned}
B & = \frac{S\_{t}}{E\_{t}} \cdot \frac{3,6\cdot 10^{6}}{10^{3}} \quad \Big[ \frac{\textrm{km}}{\textrm{kWh}} \Big]; \\\
& = \frac{S\_{t}}{E\_{t}} \cdot \frac{3,4\cdot 10^{6}}{10^{3}} \quad \Big[ \frac{\textrm{km}}{\textrm{liter benzine}} \Big].
\end{aligned}
$$

Met behulp van het brandstofverbruik $$$B$$$, de massa van de brandstof, $$$m\_{b}$$$ en de energiedichtheid $$$\rho\_{b}$$$, kan nu het bereik, $$$S\_{\textrm{max}}$$$ van de auto worden berekend:

$$
S\_{\textrm{max}} =m\_{b} \cdot \rho\_{b} \cdot B. 
$$


## Totaalbeeld van transportenergie

### Auto's en parcours

De afzonderlijke modellen die in de afgelopen hoofdstukken zijn geïntroduceerd kunnen worden samengevoegd tot één model dat alle vormen van energieverbruik in transport bevat. In de afzonderlijke modellen zijn we tot nu toe altijd uitgegaan van de *VW Passat*, maar we hebben natuurlijk veel meer vrijheid. Zodra we de belangrijke parameters ($$$m\_{a}$$$, $$$m\_{b}$$$, $$$c\_{rr}$$$, $$$c\_{d}$$$, $$$A$$$, $$$\eta$$$ en $$$R$$$) weten, kunnen we voor een willekeurige auto de energieverliezen uitrekenen.

In het totaalmodel kunnen deze parameters handmatig worden ingesteld. Daarnaast zijn er negen auto's voorgeprogrammeerd: vijf auro's op fossiele brandstof en vier elektrische auto's. In de tabel hieronder zijn de parameters voor deze auto's weergegeven.

| Auto                 | $$$$m$$$ (kg) | $$$m\_{b}$$$ (kg) | $$$c\_{rr}$$$ | $$$c\_{d}$$$ | $$$A$$$ (m<sup>2</sup>) | $$$\eta$$$ (%) | $$$R$$$ (%) |
| -------------------- | ------------- | ----------------- | ------------  | ------------ | ----------------------- | -------------- | ----------- |
| MicroJoule           | 80            | 1                 | 0,005         | 0,1          | 0,3                     | 40             | 0           |
| Toyota Yaris         | 1055          | 30                | 0,01          | 0,3          | 2,5                     | 30             | 0           |
| VW Passat            | 1451          | 50                | 0,01          | 0,3          | 2,7                     | 30             | 0           |
| Hummer               | 3000          | 90                | 0,02          | 0,5          | 4                       | 25             | 0           |
| Mercedes Atego Truck | 16000         | 150               | 0,006         | 1            | 6,5                     | 30             | 0           |
| NUNA 6               | 250           | 30                | 0,001         | 0,07         | 1,4                     | 95             | 50          |
| Tesla Roadster       | 1035          | 300               | 0,001         | 0,27         | 2,1                     | 88             | 65          |
| Elektrische Smart    | 750           | 100               | 0,001         | 0,4          | 2,4                     | 80             | 50          |
| Smith Newton Truck   | 10000         | 600               | 0,008         | 0,7          | 1,4                     | 80             | 50          |


In het totaalmodel kan worden gekozen uit vier verschillende parcours. Het NEDC parcours hebben we hiervoor al uitgebreid besproken en beslaag 10,8 km met een grote variatie aan snelheden. Het parcours *Lage constante snelheid* is ook 10,8 km lang, maar heeft een constante snelheid van 25 km/h. In het parcours *Hoge constante snelheid* wordt ook 10,8 km afgelegd, maar nu met een constante snelheid van 120 km/h. In het parcours *Amsterdam <> Utrecht* is een ritje tussen Amsterdam en Utrecht gesimuleerd, met een totale afstand van 48 km een variatie aan snelheden. Waarschijnlijk is de snelheidsvariatie in de prakijk nog groter.

	Q9

### Totaalmodel

Het totaalmodel is hieronder weergegeven. Het model bevat verschillende onderdelen:

- Bovenaan kan óf een voorgeprogrammeerde auto worden gekozen óf kunnen de parameters van de auto handmatig worden ingesteld; 
- Bovenaan kan ook het parcours worden gekozen;
- Boven de grafieken is informatie weergegeven over de auto, de afgelegde weg, het totale energieverbruik en het bereik;
- In het midden worden twee grafieken weergegeven, waarin gekozen kan worden uit:
	- Het parcours
	- Het brandstofverbruik
	- De energie die in totaal voor de aandrijving wordt gebruikt (remmen, luchtwrijving en rolwrijving)
	- Het optrekvermogen (verliezen door remmen)
	- De luchtwrijving
	- De rolwrijving
- Onderaan wordt grafisch de verhouding weergegeven tussen de verschillende vormen van energieverlies.

	***RemLuchtRol***

In de volgende paragraaf ga je zelf met dit model aan de slag.

### Vragen bij Totaalmodel

Gebruik bovenstaand model om de volgende vragen te beantwoorden.

	Q10 	
	Q11
	Q12
	Q13
	Q14
	Q15
	Q16
	
Welke auto zou jij later graag zelf willen hebben? Zoek online de parameters van deze auto op. Als je geen waardes kunt vinden voor $$$c\_{rr}$$$, $$$c\_{d}$$$ en $$$c\_{\etha}$$$, gebruik hiervoor dan respectievelijk 0,01; 0,3; en 1. Hoeveel energie gebruikt jouw auto in de NEDC? En wat zou je kunnen doen om jouw auto zuiniger te maken? Hoe zuinig kun je de auto uiteindelijk krijgen? Kan hij meer of minder dan 30 kilometer rijden op 1 liter brandstof? Succes!

Bij het maken van deze opdrachten heb je misschien gemerkt dat het model beperkingen heeft. Misschien wilde je jouw auto wel een nóg lagere massa geven, óf moest de motor een nóg hogere efficiëntie krijgen. De volgende paragraaf legt uit waarom deze beperkingen (voor alsnog) noodzakelijk zijn.

### Beperkingen van het model

Elk model beschrijft maar een deel van de werkelijkheid. En bij elk model wordt een afweging gemaakt tussen minimale complexiteit en maximale effectivititeit. De complexiteit bepaalt welke keuzes een gebruiker moet kunnen maken. In dit model is het bijvoorbeeld niet mogelijk om de auto lichter te maken dan 500 kilogram, simpelweg omdat het zou betekenen dat de auto onveilig wordt. 

Als je wilt weten hoe zuinig een auto kan worden, dan moet eerst veel informatie bekend zijn:

- Hoeveel mensen moeten er in de auto passen?
- Welke apparatuur (verlichting, verwarming, navigatie) moet er in de auto aanwezig zijn?
- Hoe hard moet de auto kunnen rijden?
- Hoe snel moet de auto kunnen optrekken?
- Wat moet de actieradius van de auto minimaal zijn?
- Aan welke veiligheidseisen moet de auto voldoen?
- Hoeveel mag de auto uiteindelijk kosten?
- Wat wordt de rijsteil van de bestuurder?

Daarnaast is het heel moeilijk om aan te geven hoe laag de rolweerstand ($$$c\_{rr}$$$) kan worden of hoe aerodynamisch ($$$c\_{d}$$$) een auto kan worden. Zelfs het bepalen van een realistische massa is moeilijk. Misschien worden er wel nieuwe materialen ontwikkeld die  auto’s veel lichter kunnen maken zonder de veiligheid te verlagen.

Het bestaande model kan worden aangepast om al deze informatie op een goede manier te verwerken, maar dat gaat voorbij aan het doel van deze module. In plaats daarvan gaan we in het laatste hoofdstuk het bestaande model combineren met informatie over vervoer in Nederland. Op deze manier kunnen we onderzoeken hoeveel energie er bespaard kan worden in de Nederlandse vervoerssector.

# Vervoer in Nederland


## Introductie
Door ons model te combineren met data over de energiebalans in Nederland en data over transport in Nederland, kunnen we twee belangrijke vragen beantwoorden:

- Hoeveel energie kan er realistisch bespaard worden in de vervoerssector?
- Met hoeveel kan de CO<sub>2</sub>-uitstoot van de vervoerssector worden teruggedrongen?

Om deze vragen te beantwoorden, zullen we kijken naar de huidige situatie in Nederland, de mogelijke veranderingen en de eindsituatie die uit die veranderingen volgt.

## Huidige verdeling

De totale vervoerssector in Nederland gebruikt per jaar [totaal vervoer per jaar PJ]  PJ. Dit is [percentage vervoer] % van het totale Nederlandse energieverbruik. De transportsector is daarnaast verantwoordelijk voor een CO<sub>2</sub>-uitstoot van [CO<sub>2</sub>-uitstoot vervoerssector] Mton per jaar. Dit is [percentage CO<sub>2</sub>-uitstoot] % van de totale CO<sub>2</sub>-uitstoot in Nederland.

De twee belangrijkste onderdelen van het transport in Nederland zijn personenauto’s en vrachtwagens. Samen gebruiken ze [zoveel] procent van de energie die in de hele transportsector wordt gebruikt. Om het overzichtelijk te houden, beperkt dit model zich daarom tot personenauto’s en vrachtwagens.

In onderstaand figuur is te zien hoeveel energie personenauto’s en vrachtwagens gebruiken en wat de bijbehorende CO<sub>2</sub>-uitsoot is. In de figuur is ook weergegeven wat het totale energieverbruik en de totale CO<sub>2</sub>-uitstoot voor Nederland zijn.

	[Figuur van energie en CO<sub>2</sub>-uitstoot voor personenauto’s en vrachtauto’s]

Hoe kan het dat de transportsector verantwoordelijk is voor [CO<sub>2</sub>-percentage]% van de Nederlandse CO<sub>2</sub>-uitstoot terwijl het “slechts” [Energie-percentage]% van het Nederlandse energieverbruik gebruikt? Dit komt doordat de transportsector nu bijna volledig afhankelijk is van fossiele brandstoffen en dus nauwelijks duurzame energie gebruikt. Een van de maatregelen om de transportsector te verduurzamen is dus het verkleinen van het fossiele aandeel.

## Mogelijke maatregelen

Er zijn grofweg vier variabelen die bepalen hoeveel energie de transportsector in de toekomst gebruikt en hoeveel CO<sub>2</sub> hierbij wordt uitgestoten:

- De verdeling van aandrijving voor personenauto’s (fossiel <> elektrisch)
- De verdeling van aandrijving voor vrachtwagens (fossiel <> elektrisch)
- De efficiëntieverbeteringen voor voertuigen op fossiele brandstof
- De efficiëntieverbeteringen voor elektrische voertuigen

In de afgelopen hoofdstukken heb je gezien dat elektrisch vervoer in sommige gevallen veel zuiniger is dan “fossiel” vervoer. Hier moet de afweging gemaakt worden tussen een efficiënte motor en een lichtgewicht energie-opslag.

Daarnaast wordt er hard gewerkt aan efficiëntieverbeteringen. De belangrijkste factoren hierin zijn: een lagere $$$c\_{d}$$$, een lagere $$$c\_{rr}$$$ en regeneratief remmen. Over het algemeen geldt hier dat het makkelijker is om elektrische auto’s efficiënter te maken.

## Eindsituatie

Met behulp van onderstaande sliders kun jij instellen hoe je denkt dat de transportsector er in 2050 uit zal zien.

	[Gebruik schuifjes om energieverdeling en totale CO<sub>2</sub>-uitstoot live te updaten. Grafiek moet ook bevatten met hoeveel procent beide onderdelen afnemen ]

	[Met hoeveel procent neemt de CO<sub>2</sub>-uitstoot volgens jou af?
	{relateren aan Overheidsbeleid en afhankelijk van antwoord gepaste feedback geven}]

Je weet nu hoeveel energie er bespaard kan worden en met hoeveel de CO<sub>2</sub>-uitstoot kan worden teruggedrongen door de vervoerssector op een realistische manier te verduurzamen. Gefeliciteerd!