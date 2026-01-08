type Image = {
  title: string;
  url: string;
};

type Films = {
  title: string;
  src: string;
};

const imageData: Image[] = [
  {
    title: "flowers",
    url: "/img/flowers.webp",
  },
  {
    title: "heart",
    url: "/img/heart.webp",
  },
  {
    title: "invitation",
    url: "/img/invitation.webp",
  },
  {
    title: "table",
    url: "/img/table.webp",
  },
  {
    title: "testimony",
    url: "/img/testimony.webp",
  },
];

export const videoData: Films[] = [
  {
    title: "Martin & Mati",
    src: "https://www.youtube.com/embed/oLyBzCFWmT4?si=q-yK4nw_FzGpeCLV",
  },
  {
    title: "Herwin & Cherry",
    src: "https://www.youtube.com/embed/Xp_omrNQpQI?si=DwJzep6wMB2usHS_",
  },
  {
    title: "Stan & Rhizza",
    src: "https://www.youtube.com/embed/Lz6fWNAFJ4c?si=GEb8O_y1FTKcDcP6",
  },
];

export default imageData;
