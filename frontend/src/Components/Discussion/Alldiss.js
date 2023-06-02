import Dissmsg from "./Dissmsg.js";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { useEffect, React, useState } from "react";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import Sheet from "@mui/joy/Sheet";
import FormDialog from "./FormDialog.js";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";

function Alldiss() {
  const [events, setEvents] = useState([]);
  const [eventIDs, setEventIDs] = useState([]);
  useEffect(() => {
    getAllEvents();
  }, []);

  async function getAllEvents() {
    let temp = [];
    temp.shift();
    let temp2 = [];
    temp2.shift();

    getDocs(collection(db, "Disspost")).then((allDocs) => {
      allDocs.forEach((doc) => {
        temp.push(doc.data());
        temp2.push(doc.id);
      });
      setEvents(temp);
      setEventIDs(temp2);
    });
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <h3>CURRENT DISCUSSIONS </h3>
        </FormControl>

        <FormControl variant="standard">
          <FormDialog />
        </FormControl>
      </Box>
      <Sheet
        sx={{
          "--TableCell-height": "40px",
          // the number is the amount of the header rows.
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          height: 330,
          overflow: "auto",
          background: (theme) =>
            `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 50% 0,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 50% 100%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: " scroll, scroll",
          backgroundPosition:
            "0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%",
          backgroundColor: "background.surface",
        }}
      >
        <Table>
          <tbody>
            <tr>
              {Array.isArray(events)
                ? events.map((obj, index) => (
                    <div>
                      <td>
                        <Dissmsg
                          user={obj.user}
                          message={obj.message}
                          replies={obj.replies}
                          date={obj.date}
                          eventid={eventIDs[index]}
                          zdel={obj.zdel}
                          zmes={obj.zmes}
                        />
                      </td>
                    </div>
                  ))
                : console.log("There are no current events at this time.")}
            </tr>
          </tbody>
        </Table>
      </Sheet>
      {/* <FormControl variant="standard">
        <FormDialog />
      </FormControl> */}
    </div>
  );
}

export default Alldiss;
