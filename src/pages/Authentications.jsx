import { SignUp } from "./SignUp";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Login } from "./Login";
import { useCallback, useRef, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { AddMembers } from "./AddMembers";
import AddIcon from "@mui/icons-material/Add";

export const Authentications = () => {
  const [value, setValue] = useState("1");
  const containerRef = useRef(null);
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  const [totalForms, setTotalForms] = useState(1);

  const renderForms = useCallback(() => {
    return (
      <Stack spacing={2}>
        {Array(totalForms)
          .fill(0)
          .map((value, index, arr) => {
            return <AddMembers key={index} />;
          })}
      </Stack>
    );
  }, [totalForms]);

  return (
    <Box ref={containerRef}>
      <TabContext value={value}>
        <TabList onChange={handleOnChange}>
          <Tab label="SignUp" value="1" />
          <Tab label="Login" value="2" />
          <Tab label="Add Member" value="3" />
          <Tab label="Members" value="4" />
        </TabList>
        <TabPanel value="1">
          <SignUp />
        </TabPanel>
        <TabPanel value="2">
          <Login />
        </TabPanel>
        <TabPanel value="3">
          <Button
            onClick={() => setTotalForms(totalForms + 1)}
            endIcon={<AddIcon />}
          >
            Add
          </Button>
          {renderForms()}
        </TabPanel>
        <TabPanel value="2">
          <Login />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
