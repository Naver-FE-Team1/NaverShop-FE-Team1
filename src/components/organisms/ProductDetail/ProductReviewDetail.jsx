import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { deleteCmt } from "../../../store/reducers/commentSlice";
import { useDispatch } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Avatar, Divider, Grid, Rating, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import '../../../scss/ProductDetail/ProductDetail.scss';
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ProductDetailInput from "./ProductDetailInput";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useAuth } from "../../../contexts/auth-context";
import { useParams } from "react-router-dom";

const ProductReviewDetail = ({ data, ml, showRating }) => {
  const { userInfo } = useAuth();
  const productId = useParams();
  const [like, setLike] = useState(false); //Kiểm tra tạng thái user like
  const [dislike, setDislike] = useState(false); //Kiểm tra tạng thái user dislike
  const [edit, setEdit] = useState(false); //Sửa bình luận sẽ không hiện rating
  const [liked, setLiked] = useState(data.liked); //khởi tạo state liked  lưu trạng thái trong local storage
  const [disliked, setDisliked] = useState(data.disliked); //khởi tạo state disliked  lưu trạng thái trong local storage
  const dataCmts = useRef([]); //khởi tạo useRef lưu data comments trên local storage
  const dispatch = useDispatch();
  //Xử lý case like của user
  const handleLike = async () => {
    // const colRef = doc(db, "reviews");
    // await updateDoc(colRef, {});
  };
  //Xử lý case dislike của user
  const handleDisLike = () => {
    setDislike(!dislike);
    if (!dislike) {
      setDisliked((data) => data + 1);
    }
    if (dislike) {
      setDisliked((data) => data - 1);
    }
    if (like && !dislike) {
      setLike(false);
      setLiked((data) => data - 1);
    }
  };
  // Ẩn/Hiện sửa bình luận
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  //Ẩn input khi user chỉnh sửa bình luận thành công
  const toggleEditInput = () => {
    setEdit(!edit);
  };
  // Xóa bình luận
  const handleDeleteCmt = () => {
    dispatch(deleteCmt(data.id));
    toast.success("Xóa bình luận thành công");
  };
  useEffect(() => {
    dataCmts.current.map((item) => {
      if (item.id === data.id) {
        item.liked = liked;
        item.disliked = disliked;
      }
    });

    localStorage.setItem("comments", JSON.stringify(dataCmts.current));
  }, [liked, disliked, localStorage.getItem("comments")]);

  return (
    <Stack sx={{ marginLeft: ml }}>
      <Divider sx={{ marginTop: "20px" }} />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <Avatar src="/broken-image.jpg" />
        <Stack direction="column">
          <span>
            <strong>{data.author}</strong>
          </span>
          <Stack direction="row" spacing={2}>
            {showRating ? (
              <Rating
                name="read-only"
                value={data.rating}
                readOnly
                sx={{ width: "6.5rem" }}
              />
            ) : (
              ""
            )}
            <span> {data.created}</span>
          </Stack>
        </Stack>
      </Stack>
      <Grid item xs={10} md={10}>
        <p
          style={{
            textAlign: "justify",
            padding: ".5rem",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          {data.content}
        </p>
      </Grid>
      <Stack direction="row" spacing={3}>
        <Stack
          direction="row"
          spacing={1}
          className={like ? "product-review active" : "product-review"}
          onClick={() => handleLike()}
        >
          <ThumbUpOffAltIcon />
          <span className="product-detail__react">{liked?.length}</span>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          className={dislike ? "product-review active" : "product-review"}
          onClick={() => handleDisLike()}
        >
          <ThumbDownOffAltIcon />
          <span className="product-detail__react">{disliked?.length}</span>
        </Stack>
        <p onClick={handleToggleEdit} className="product-detail__ud">
          {!edit ? "edit" : "cancel"}
        </p>
        <p onClick={handleDeleteCmt} className="product-detail__ud">
          delete
        </p>
      </Stack>
      {edit ? (
        <ProductDetailInput
          width="40px"
          height="40px"
          showRating={false}
          widthInput="35rem"
          dataCmt={data}
          toggleEditInput={toggleEditInput}
        />
      ) : (
        ""
      )}
      {/* {data.subComments &&
        data.subComments.map((item) => (
          <ProductReviewDetail
            ml='3rem'
            key={item.id}
            data={item}
            showRating={false}
          />
        ))} */}
    </Stack>
  );
};
ProductReviewDetail.propTypes = {
  ml: PropTypes.string,
  showRating: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      liked: PropTypes.number,
      disliked: PropTypes.number,
      parentId: PropTypes.string,
      rating: PropTypes.number,
      created: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};
ProductReviewDetail.defaultProps = {
  ml: "",
  showRating: true,
  data: [
    {
      id: "",
      liked: 0,
      disliked: 0,
      parentId: "",
      rating: 0,
      created: "",
      content: "",
      author: "",
    },
  ],
};
export default ProductReviewDetail;
