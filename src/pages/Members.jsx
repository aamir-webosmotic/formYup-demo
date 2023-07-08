import { useSyncExternalStore } from "react";
import { memberStore } from "../store/addMemberStore";
import { Card, Grid, Stack, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Members = () => {
  const members = useSyncExternalStore(
    memberStore.subscribe,
    memberStore.getSnapshot
  );
  return (
    <Grid container>
      {members?.map((member, index, arr) => {
        return (
          <Grid item xs={12} sm={4} md={3} key={member?.phone + index}>
            <Card>
              <Stack direction={"row"} alignItems={"center"}>
                <AccountBoxIcon />
                <Typography variant="subtitle2">
                  {member?.first_name}
                </Typography>
                <Typography variant="subtitle2">{member?.last_name}</Typography>
              </Stack>
              <Typography variant="subtitle2">{member?.email}</Typography>
              <Typography variant="subtitle2">{member?.phone}</Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
