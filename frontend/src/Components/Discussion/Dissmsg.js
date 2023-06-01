import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { withTheme } from "@emotion/react";
import ForumIcon from "@mui/icons-material/Forum";
import Dissreplies from "./Dissreplies";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Dissmsg(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 700, bgcolor: "#252525" }}>
      <CardHeader
        sx={{ minWidth: 700, text: { primary: "white" } }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "white" }}>
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ color: "white" }}
        title={props.user}
        subheaderTypographyProps={{ color: "white" }}
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "white" }}>
          {props.message}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {props.replies}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{ color: "white" }}>
          <FavoriteIcon />
        </IconButton>

        <ExpandMore>
          <Dissreplies
            user={props.user}
            message={props.message}
            replies={props.replies}
            eventid={props.eventid}
          />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
