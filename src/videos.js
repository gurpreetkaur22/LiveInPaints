import icon from "/images/icon.webp";
import tile from "/images/tile1.webp";
import illus from "/images/illus3.webp";
import bday from "/images/bdayCard2.webp";
import crochet from "/images/crochet1.webp";
import bookmark from "/images/bookmark3.webp";
import walletCard from "/images/walletCard2.webp";
import semiIllus from "/images/illus1.webp";
import painting from "/images/hare.webp";
import petIllus from "/images/petIllus.webp";
import illusFam from "/images/illusFam.webp";
import illusReligious from "/images/illusReligious.webp";
import Vbday from "/videos/Vbday.mp4";
import Vbookmark from "/videos/Vbookmark.mp4";
import Vcrochet from "/videos/Vcrochet.mp4";
import Vdetailed from "/videos/Vdetailed.mp4";
import Vfam from "/videos/Vfam.mp4";
import Vhare from "/videos/Vhare.mp4";
import Vpet from "/videos/Vpet.mp4";
import Vsemi from "/videos/Vsemi.mp4";
import Vtile from "/videos/Vtile.mp4";
import VWcard from "/videos/VWcard.mp4";
import Vreli from "/videos/Vreli.mp4";

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
