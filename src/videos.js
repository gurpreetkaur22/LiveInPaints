import icon from "./assets/images/icon.jpg";
import tile from "./assets/images/tile1.jpg";
import illus from "./assets/images/illus3.jpg";
import bday from "./assets/images/bdayCard2.jpg";
import crochet from "./assets/images/crochet1.png";
import bookmark from "./assets/images/bookmark3.jpg";
import walletCard from "./assets/images/walletCard2.jpg";
import semiIllus from "./assets/images/illus1.jpg";
import painting from "./assets/images/hare.jpg";
import petIllus from "./assets/images/petIllus.jpg";
import illusFam from "./assets/images/illusFam.jpg";
import illusReligious from "./assets/images/illusReligious.jpg";
import Vbday from "./assets/videos/Vbday.mp4";
import Vbookmark from "./assets/videos/Vbookmark.mp4";
import Vcrochet from "./assets/videos/Vcrochet.mp4";
import Vdetailed from "./assets/videos/Vdetailed.mp4";
import Vfam from "./assets/videos/Vfam.mp4";
import Vhare from "./assets/videos/Vhare.mp4";
import Vpet from "./assets/videos/Vpet.mp4";
import Vsemi from "./assets/videos/Vsemi.mp4";
import Vtile from "./assets/videos/Vtile.mp4";
import VWcard from "./assets/videos/VWcard.mp4";
import Vreli from "./assets/videos/Vreli.mp4";

const galleryItems = [
  // Row 1 (4 items)
  {
    id: "1-0",
    videoId: Vcrochet,
    name: "Crochet Art",
    previewImg: crochet,
  },
  {
    id: "1-1",
    videoId: VWcard,
    name: "Modern Wallet Cards",
    previewImg: walletCard,
  },
  {
    id: "1-2",
    videoId: Vbday,
    name: "Birthday Cards",
    previewImg: bday,
  },
  {
    id: "1-3",
    videoId: Vsemi,
    name: "Semi-Detailed Frame Illustration",
    previewImg: semiIllus,
  },

  // Row 2 (3 items)
  {
    id: "2-0",
    videoId: Vdetailed,
    name: "Detailed Illustration Frame",
    previewImg: illus,
  },
  {
    id: "2-1",
    videoId: Vreli,
    name: "Religious Illustrations",
    previewImg: illusReligious,
  },
  {
    id: "2-2",
    videoId: Vhare,
    name: "Painting",
    previewImg: painting,
  },

  // Row 3 (4 items)
  {
    id: "3-0",
    videoId: Vtile,
    name: "Tile Frame Artwork",
    previewImg: tile,
  },
  {
    id: "3-1",
    videoId: Vbookmark,
    name: "Cute Bookmark Set",
    previewImg: bookmark,
  },
  {
    id: "3-2",
    videoId: Vpet,
    name: "Pet Illustration",
    previewImg: petIllus,
  },
  {
    id: "3-3",
    videoId: Vfam,
    name: "Family Illustration",
    previewImg: illusFam,
  },
];

export default galleryItems;
