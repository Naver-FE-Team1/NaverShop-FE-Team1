import moment from "moment";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { addCmt, editCmt } from "../../../store/reducers/commentSlice";
import {
  Avatar,
  Button,
  Rating,
  Stack,
  useMediaQuery,
  TextField,
} from "@mui/material";

import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import UserInfo from "../TabPanelDetail/UserInfo";
import { useAuth } from "../../../contexts/auth-context";

moment().format();
const ProductDetailInput = ({
  width,
  height,
  showRating,
  widthInput,
  dataCmt,
  toggleEditInput,
  addReview,
}) => {
  const dispatch = useDispatch();
  const productId = useParams();
  const { userInfo } = useAuth();

  const [comment, setComment] = useState(""); // Thiếp lập thêm comment mới
  const [cmtAvailable, setCmtAvailable] = useState(dataCmt.content); // Thiếp lập chỉnh sửa comment hiện tại
  const [value, setValue] = useState(2);

  // const [field, meta] = useField();

  const lgMatches = useMediaQuery("(min-width:1200px)");

  const handleOnChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      author: "Dang",
      content: comment,
      rating: value,
      created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      liked: [],
      dislike: [],
      productId: productId.id,
      userId: userInfo.uid,
    };
    //interact with firebase
    const colRef = collection(db, "reviews");
    const cmt = await addDoc(colRef, {
      ...result,
      author: "Dang",
      content: comment,
      rating: value,
      created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      liked: [],
      dislike: [],
    });
    dispatch(addCmt(cmt));
    toast.success("Thêm bình luận thành công");
    addReview();
    setComment("");
  };
  const handleClearCmt = () => {
    setComment("");
  };
  // Xử lý chỉnh sửa comment
  //Xử lý input
  const handleOnChangeCommentAvailable = (e) => {
    setCmtAvailable(e.target.value);
  };
  //Xử lý user thay cập nhật thay đổi
  const handleEditComment = (e) => {
    e.preventDefault();
    const result = {
      id: dataCmt.id,
      content: cmtAvailable,
      created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      author: dataCmt.author,
      rating: dataCmt.rating,
      liked: dataCmt.liked,
      dislike: dataCmt.disliked,
    };
    dispatch(editCmt(result));
    toggleEditInput();
  };
  //Xử lý user clear comment
  const handleClearCmtAvailable = () => {
    setCmtAvailable("");
  };
  //handle check whether user is enough condition to comment
  // useEffect(async () => {
  //   const colRef = collection(db, "reviews");

  //   getDocs(colRef).then((snapshot) => {
  //     let listReviews = [];
  //     snapshot.docs.forEach((doc) => {
  //       listReviews.push({ id: doc.id, ...doc.data() });
  //     });
  //     setReviewsData(listReviews);
  //     dispatch(getCmts(listReviews));
  //   });
  // }, []);
  return (
    <Stack direction="row" spacing={2} sx={{ margin: "1rem 0" }}>
      <Avatar src="/broken-image.jpg" sx={{ width: width, height: height }} />
      <Stack style={{ display: "inline" }} sx={{ width: "100%" }}>
        {showRating ? (
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newEvent) => {
              setValue(newEvent);
            }}
          />
        ) : (
          ""
        )}

        {dataCmt ? (
          <form onSubmit={handleEditComment}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={5}
              sx={{ width: lgMatches ? widthInput : "100%" }}
            >
              <TextField
                id="standard-basic"
                label="Chỉnh sửa bình luận...."
                variant="standard"
                name="comment"
                value={cmtAvailable}
                fullWidth
                multiline
                maxRows={7}
                style={{ display: "inline" }}
                onChange={handleOnChangeCommentAvailable}
              />
              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: "flex-end" }}
              >
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  value="submit"
                  sx={{
                    background: "#2A254B",
                    width: "100px",
                    height: "40px",
                    borderRadius: "20px",
                    "&:hover": {
                      background: "#2A254B",
                    },
                  }}
                >
                  Update
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  sx={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "20px",
                    color: "#2A254B",
                  }}
                  onClick={handleClearCmtAvailable}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={5}
              sx={{ width: lgMatches ? widthInput : "100%" }}
            >
              <TextField
                id="standard-basic"
                label="Viết bình luận...."
                variant="standard"
                name="comment"
                value={comment}
                fullWidth
                style={{ display: "inline" }}
                onChange={handleOnChangeComment}
              />

              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: "flex-end" }}
              >
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  value="submit"
                  sx={{
                    background: "#2A254B",
                    width: "100px",
                    height: "40px",
                    borderRadius: "20px",
                    "&:hover": {
                      background: "#2A254B",
                    },
                  }}
                >
                  Send
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  sx={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "20px",
                    color: "#2A254B",
                  }}
                  onClick={handleClearCmt}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </form>
        )}
      </Stack>
    </Stack>
  );
};

export default ProductDetailInput;
