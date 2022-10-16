import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Avatar, Divider, Grid, Rating, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import '../../../scss/ProductDetail/ProductDetail.scss';
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ProductDetailInput from "./ProductDetailInput";

const ProductReviewDetail = ({ data, ml, showRating }) => {
  const [like, setLike] = useState(false); //Kiểm tra tạng thái user like
  const [dislike, setDislike] = useState(false); //Kiểm tra tạng thái user dislike
  const [reply, setReply] = useState(false); //bình luận sẽ có rating còn phản hồi thì không cần
  const [liked, setLiked] = useState(data.liked); //khởi tạo state liked  lưu trạng thái trong local storage
  const [disliked, setDisliked] = useState(data.disliked); //khởi tạo state disliked  lưu trạng thái trong local storage
  const dataCmts = useRef([]); //khởi tạo useRef lưu data comments trên local storage
  const [submitted, setSubmitted] = useState(false); //Cập nhật trạng thái chirld
  //Xử lý case like của user
  const handleLike = () => {
    setLike(!like);
    if (!like) {
      setLiked((data) => data + 1);
    }
    if (like) {
      setLiked((data) => data - 1);
    }
    if (!like && dislike) {
      setDislike(false);
      setDisliked((data) => data - 1);
    }
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

  const handleToggleReply = () => {
    setReply(!reply);
  };
  useEffect(() => {
    if (localStorage.getItem("comments")) {
      dataCmts.current = JSON.parse(localStorage.getItem("comments"));
    }
  }, []);
  const onChangeCmt = () => {
    setSubmitted(!submitted);
  };
  useEffect(() => {
    dataCmts.current.map((item) => {
      if (item.id === data.id) {
        item.liked = liked;
        item.disliked = disliked;
      }
      if (item.subComments.length > 0) {
        item.subComments.map((subCmt) => {
          if (subCmt.id === data.id) {
            subCmt.liked = liked;
            subCmt.disliked = disliked;
          }
        });
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
              <Rating name="read-only" value={data.rating} readOnly />
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
            paddingLeft: ".5rem",
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
          <span>{liked}</span>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          className={dislike ? "product-review active" : "product-review"}
          onClick={() => handleDisLike()}
        >
          <ThumbDownOffAltIcon />
          <span>{disliked}</span>
        </Stack>
        <p
          style={{ color: "#2A254B", cursor: "pointer" }}
          onClick={handleToggleReply}
        >
          {!reply ? "reply" : "cancel"}
        </p>
      </Stack>
      {reply ? (
        <ProductDetailInput
          width="40px"
          height="40px"
          showRating={false}
          widthInput="35rem"
          idCmt={data.parentId}
          onChangeCmt={onChangeCmt}
        />
      ) : (
        ""
      )}
      {data.subComments &&
        data.subComments.map((item) => (
          <ProductReviewDetail
            ml="3rem"
            key={item.id}
            data={item}
            showRating={false}
          />
        ))}
    </Stack>
  );
};

export default ProductReviewDetail;
