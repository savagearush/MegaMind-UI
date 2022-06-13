import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Post = () => {
  const AllPost = [
    {
      title: "This is Card 1",
      image: "https://picsum.photos/300/200?random1",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
      title: "This is Card 2",
      image: "https://picsum.photos/300/200?random2",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
      title: "This is Card 3",
      image: "https://picsum.photos/300/200?random3",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" component="div" my={4}>
        Some Available Posts
      </Typography>
      <Container sx={{ flex: 1, display: "inline-flex" }}>
        {AllPost.map((post) => {
          return (
            <Card key={post.title} sx={{ maxWidth: 350, margin: "0 20px" }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterbottom="true" variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
};

export default Post;
