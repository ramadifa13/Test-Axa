// Import Gambar
import image1 from "./Assets/image/celcius.png";
import image2 from "./Assets/image/adidas.png";
import image3 from "./Assets/image/adidas-2.png";
import image4 from "./Assets/image/vans.png";
import image5 from "./Assets/image/under.png";
import image6 from "./Assets/image/3second.png";
import image7 from "./Assets/image/h&m.png";
import image8 from "./Assets/image/3second-2.png";
import image9 from "./Assets/image/tolliver.png";

//Default Data Kategori Kaos
export const linkItem = ["PRIA", "WANITA", "ANAK-ANAK"];
export const sizes = ["XS", "S", "M", "L", "XL"];

// Random Gambar
export const getRandomImage = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
// Random Size
export const getRandomSize = () => {
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};
// Random Brand
export const brands = ["3Second", "Adidas", "Celciusmen", "H&M", "Tolliver","Under Armour","VANS"];
export const getRandomBrand = () => {
  const randomIndex = Math.floor(Math.random() * brands.length);
  return brands[randomIndex];
};

export const renderImage = (brand) => {
    switch (brand) {
      case '3Second':
        return <img src={image6} alt={brand} style={{ width: "100%", height: "auto"}} />;
      case 'Adidas':
        return <img src={image2} alt={brand}style={{ width: "100%", height: "auto"}} />;
      case 'Celciusmen':
        return <img src={image1} alt={brand}style={{ width: "100%", height: "auto"}} />;
      case 'H&M':
        return <img src={image7} alt={brand}style={{ width: "100%", height: "auto"}} />;
      case 'Tolliver':
        return <img src={image9} alt={brand}style={{ width: "100%", height: "auto"}} />;
      case 'Under Armour':
        return <img src={image5} alt={brand}style={{ width: "100%", height: "auto"}} />;
      case 'VANS':
        return <img src={image4} alt={brand}style={{ width: "100%", height: "auto"}} />;
      default:
        return <img src={image3} alt={brand}style={{ width: "100%", height: "auto"}} />;
    }
  };
export const formatRupiah = (item) => {
  return item?.toLocaleString('id-ID')
  };

  export const pickColor={
    "merah":"#FF2536",
    "hitam":"black",
    "biru":"#0069b4",
    "kuning":"#fbc424",
    "cream":"#fffdd0",
    "abu abu":"#bebebe",
    "warna 10":"#a8e4a0",
    "warna 11":"	#4b0082",
    "warna 12":"#8b7765",
  }