/**
 * Detail of Product Page
 * file: ProductDetail.jsx
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/firebase-config";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";
import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductReview from "../../organisms/ProductDetail/ProductReview";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [productDetail, setProductDetail] = useState([]);

  console.log(
    "🚀 ~ file: ProductDetail.jsx ~ line 24 ~ ProductDetail ~ productDetail",
    productDetail
  );
  const { id } = useParams(); // id được khai báo ở trang App.jsx
  //state này để lưu size S,M,L,...
  const [sizePicker, setSizePicker] = useState([]);
  const [colorPicker, setColorPicker] = useState([]);
  const [quant, setQuant] = useState(0);
  const [listImages, setListImages] = useState([]);

  console.log(
    "🚀 ~ file: ProductDetailContent.jsx ~ line 48 ~ listImages",
    listImages
  );

  useEffect(() => {
    (async () => {
      if (!id) return;
      else {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          handleGetListProductWithCategories(data.category);
          setProductDetail(data);
          setSizePicker(data.sizes[0]);
          setListImages([data.image, ...data.detailImages]);
          setColorPicker(data.color[0]);
        } else {
          console.log("no data");
        }
      }
    })();
  }, [id]);

  const [productCategories, setProductCategories] = useState([]);

  const handleGetListProductWithCategories = async (categories) => {
    const docRef = collection(db, "products");
    const que = query(docRef, where("category", "==", categories));
    const snapshots = await getDocs(que);
    const docs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    setProductCategories(docs);
  };
  return (
    <>
      <ProductDetailContent
        setSizePicker={setSizePicker}
        sizePicker={sizePicker}
        data={productDetail}
        setQuant={setQuant}
        quant={quant}
        listImages={listImages}
        setColorPicker={setColorPicker}
        colorPicker={colorPicker}
      />
      <ProductDetailList />
      <ProductReview />
      <ProductDetailJoin />
    </>
  );
};

export default ProductDetail;
