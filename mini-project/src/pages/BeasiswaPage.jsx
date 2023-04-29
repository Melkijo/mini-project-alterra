import { gql, useQuery } from "@apollo/client";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";

const GET_BEASISWA = gql`
  query GET_BEASISWA {
    beasiswa {
      nama
      id
      created_at
    }
  }
`;
const firebaseConfig = {
  apiKey: "AIzaSyA9VuNHJUzbdWsZqpNB1Zpf6N5NXzk0ETA",
  authDomain: "beasiswakita-3e322.firebaseapp.com",
  projectId: "beasiswakita-3e322",
  storageBucket: "beasiswakita-3e322.appspot.com",
  messagingSenderId: "1028273295288",
  appId: "1:1028273295288:web:afaa1b78d67324cb9bc94d",
  measurementId: "G-5D4CSXMFY8",
};

function BeasiswaImg() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const imagesListRef = ref(storage, "img/");
    return () => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    };
  }, []);

  return (
    <>
      {imageUrls.map((url, index) => (
        <img src={url} key={index} />
      ))}
    </>
  );
}

function BeasiswaData() {
  const { loading, error, data } = useQuery(GET_BEASISWA);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {data.beasiswa.map((item) => (
        <div key={item.id}>
          <div>Nama : {item.nama}</div>
        </div>
      ))}
    </>
  );
}

export default function BeasiswaPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">ini Beasiswa page</h1>
      <BeasiswaData />
      <BeasiswaImg />
    </>
  );
}
