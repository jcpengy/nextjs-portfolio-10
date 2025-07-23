'use client';
import Footer from "../components/footer";
const photos = require.context('../../public/images/Photography', false);
const photoList = photos.keys().map(image => photos(image));
import DesktopNavbar from "../components/desktopNavbar";
import React, {useState} from "react";
import FsLightbox from "fslightbox-react";
import Masonry from "react-responsive-masonry";

export default function Photography() {
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <DesktopNavbar/>
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>photography</h2>
          <h4>New to photography! Here are some moments I've captured on my <u><a href="https://www.amazon.com/dp/B0CNXKKRPH?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_3" target="_blank">film camera.</a></u></h4>
        </div>
        <br/>
        <FsLightbox
          toggler={toggler}
          sources={[photoList[imageIndex].default.src]}
          key={imageIndex}
          thumbs={[photoList[imageIndex].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {photoList.map((image, i) => (
            <button onClick={() => {
              setToggler(!toggler);
              setImageIndex(i);
            }}>
              <img
                alt="art"
                key={i}
                src={image.default.src}
                style={{width: "100%", display: "block"}}
              />
            </button>
          ))}
        </Masonry>
      </section>
      <Footer/>
    </>
  );
}
