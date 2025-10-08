document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const container = document.querySelector('.cards');

    // Javított, teljes data objektum
    const data = {
        chatgpt: {
            title: "ChatGPT",
            image: "img/chatgbt.png",
            description: "A ChatGPT az OpenAI által fejlesztett mesterséges intelligencia alapú nyelvi modell, amely képes természetes nyelvű párbeszédre, szövegalkotásra, fordításra és szövegértelmezésre. A GPT-4 architektúrán alapul, amely több milliárd szavas szövegkorpusz feldolgozásán keresztül tanulta meg az emberi nyelv szerkezetét, stílusát és logikáját. Oktatásban, kreatív írásban, ügyfélszolgálatban, programozásban és tartalomkészítésben egyaránt alkalmazható, és a felhasználók igényei szerint testreszabható. A rendszer folyamatosan fejlődik a felhasználói interakciók alapján, így képes új kontextusokat is megtanulni, és segíti a problémamegoldást, kutatást, valamint a nyelvi modellezést a szakmai és mindennapi életben."
        },
        tesla: {
            title: "Tesla Autopilot",
            image: "img/tesla.png",
            description: "A Tesla Autopilot egy fejlett vezetéstámogató rendszer, amely mesterséges intelligenciát és kamerarendszert használ a jármű részleges önvezetéséhez. Képes önállóan kormányozni, gyorsítani és fékezni bizonyos közlekedési szituációkban, például autópályán és forgalmi dugókban. A rendszer a valós idejű forgalmi adatok és a gépi tanulás kombinációjával folyamatosan javul, és OTA-frissítések segítségével új funkciókat kap. Az Autopilot célja a vezetési biztonság növelése és a sofőr terhelésének csökkentése, miközben a jövőben teljes önvezetésre is képes lehet. Fontos, hogy jelenleg a sofőr figyelme és beavatkozása továbbra is szükséges, mivel a rendszer nem teljesen önálló."
        },
        amazon: {
            title: "Amazon Robotics",
            image: "img/amazon.webp",
            description: "Az Amazon Robotics az Amazon logisztikai folyamatait támogató intelligens robotrendszereket fejleszt, amelyek AI segítségével automatizálják a termékek mozgatását, szortírozását és csomagolását a raktárakban. A robotok optimalizálják a munkafolyamatokat, növelik a hatékonyságot, csökkentik a hibalehetőségeket és gyorsítják a kiszállítási folyamatot. AI-alapú technológiákat alkalmaznak útvonaltervezésre, tárgyfelismerésre és robotok közötti koordinációra. Az Amazon célja, hogy a dolgozók munkáját támogassa a monoton és fizikai feladatok csökkentésével, miközben a raktár teljesítménye és pontossága növekszik."
        },
        alphastar: {
            title: "DeepMind AlphaStar",
            image: "img/deepmind.png",
            description: "Az AlphaStar a DeepMind által fejlesztett mesterséges intelligencia, amely a StarCraft II valós idejű stratégiai játékban ért el kiemelkedő teljesítményt. A rendszer mély megerősítéses tanulással sajátította el a játék szabályait, stratégiáit és dinamikáját, így képes emberi szinten és gyakran azt meghaladó módon játszani. Több AI-ügynök párhuzamos tanulása révén fejlődött, és különböző játékstílusokat alkalmazhat, beleértve híres profi játékosok stratégiáinak utánzását. Az AlphaStar projekt áttörést jelentett a komplex döntéshozatali rendszerek és autonóm stratégiai modellek terén, amelyet később más területeken, például autonóm rendszerekben vagy pénzügyi modellezésben is alkalmazhatnak."
        },
        pathai: {
            title: "PathAI",
            image: "img/path.webp",
            description: "A PathAI egy egészségügyi startup, amely mesterséges intelligenciát alkalmaz a patológiai diagnosztika forradalmasítására. AI-alapú modelljei digitális mikroszkópos képek elemzésén keresztül segítik a betegségek, például daganatos elváltozások pontosabb, gyorsabb és objektívebb felismerését. A rendszert több millió mintán képezték, így hatékonyan képes kiszűrni a kóros elváltozásokat, és támogatja a patológusok döntéshozatalát. A PathAI technológiáját nemcsak a klinikai diagnosztikában, hanem a gyógyszerfejlesztésben és a kutatásokban is alkalmazzák, hozzájárulva a személyre szabott orvoslás fejlődéséhez és a betegellátás minőségének javításához."
        }
    };

    // Kártyákra kattintás
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

        const cardData = data[card.dataset.card];

        modalTitle.textContent = cardData.title;
        modalImage.src = cardData.image;
        modalDescription.textContent = cardData.description;

        // Kép betöltés ellenőrzés
        const img = new Image();
        img.onload = () => modal.style.display = "flex";
        img.onerror = () => {
            modalImage.src = 'img/placeholder.png';
            modal.style.display = "flex";
        };
        img.src = cardData.image;
    });

    // Modal bezárása
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Modal háttérre kattintás
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
})
