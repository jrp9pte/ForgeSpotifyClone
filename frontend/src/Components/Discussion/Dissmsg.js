import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
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
import DeleteFormDialog from "./DeleteFormDialog";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
}));

export default function Dissmsg(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", bgcolor: "#252525" }}>
      <CardHeader
        sx={{ width: "auto", text: { primary: "white" } }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "white" }}>
            {/* <MoreVertIcon /> */}
            <DeleteFormDialog
              eventID={props.eventid}
              zdel={props.zdel}
              zmes={props.zmes}
            />
          </IconButton>
        }
        titleTypographyProps={{ color: "gray" }}
        title={props.user}
        subheaderTypographyProps={{ color: "gray" }}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "white" }}>
          {props.message}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <ExpandMore>
          <Dissreplies
            user={props.user}
            message={props.message}
            replies={props.replies}
            eventid={props.eventid}
            date={props.date}
          />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
